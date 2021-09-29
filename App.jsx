import React from "react";
import "./App.css";
import { rewards, urls } from "./bundle.json";

import fileDownload from "js-file-download";

let dusts = ["Make 3 Great Throws in a row", "Make 2 Nice Curveball Throws in a row", "Make 5 Nice Throws", "Make 3 Great Throws", "Make 3 Nice Throws in a row", "Make an Excellent Throw", ""]



fetch("https://cors-anywhere.herokuapp.com/")
.then(res => {
  if(res.statusText==="Forbidden") {
    alert("Activate demo server!")
    // window.location = "https://cors-anywhere.herokuapp.com/corsdemo"

    fetch("https://cors-anywhere.herokuapp.com/corsdemo?accessRequest=abd73549d263ddcfa148b38acd13f2a461bd324beeea0113124dead9edb6bcc1", {
      method: "GET",
      referrer: "https://cors-anywhere.herokuapp.com/corsdemo",
      mode: "no-cors"

    })
    // .then(html => html.text())
    // .then(html => {
    //   let test = DOMParser.parseFromString(html)
    //   console.log(test)


    // })
  }
})

async function distance(coord1, coord2, unit = "K") {
  let [lat1, lon1] = coord1.split(",");
  let [lat2, lon2] = coord2.split(",");
  lat1 = parseFloat(lat1);
  lon1 = parseFloat(lon1);
  lat2 = parseFloat(lat2);
  lon2 = parseFloat(lon2);

  if (lat1 === lat2 && lon1 === lon2) {
    return 0;
  } else {
    var radlat1 = (Math.PI * lat1) / 180;
    var radlat2 = (Math.PI * lat2) / 180;
    var theta = lon1 - lon2;
    var radtheta = (Math.PI * theta) / 180;
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit === "K") {
      dist = dist * 1.609344;
    }
    if (unit === "N") {
      dist = dist * 0.8684;
    }
    return dist;
  }
}

async function fetchQuest(url, questUrl) {
  try {
    let res = await fetch(
      "https://cors-anywhere.herokuapp.com/" + url + questUrl,
      { "x-requested-with": "fetch" }
    );
    console.log(res);
    res = await res.json();
    return await sortQuests(res.quests);
  } catch (err) {
    console.error(err + " fetchQuest()");
    alert("Activate demo server!");
    window.location = "https://cors-anywhere.herokuapp.com/corsdemo";
  }
}

async function sortQuests(quests) {
  function pop(list, index) {
    let temp = [];
    let popped;
    if (index === -1) {
      index = list.length - 1;
    }

    for (let i = 0; i < list.length; i++) {
      if (i !== index) {
        temp = [...temp, list[i]];
      } else {
        popped = list[i];
      }
    }
    if (!popped)
      throw new Error(
        `index not valid. sortQuests.pop() actual length: ${quests.length}, index given: ${index}`
      );
    return [temp, popped];
  }

  if (quests.length === 0) return "No quests specified. sortQuests()";

  let done = [];
  let popped;

  [quests, popped] = pop(quests, 0);
  done[0] = popped;

  quests = quests.filter((i) => i !== popped);

  let coord = [];

  while (quests.length > 0) {
    let temp = [{ chose: null }];
    let dist = 1000000000;
    let obj = null;
    for (let i of quests) {
      let elemDist = await distance(
        i.lat + "," + i.lng,
        done.at(-1).lat + "," + done.at(-1).lng
      );
      temp = [...temp, elemDist];

      if (elemDist < dist) {
        temp[0].chose = elemDist;
        dist = elemDist;
        obj = i;
      }
    }
    coord = [...coord, temp];

    [quests, popped] = pop(quests, quests.indexOf(obj));
    done = [...done, popped];
  }
  return done;
}

function questCreateGpx(coords) {
  let stringFile = "";
  stringFile += '<?xml version="1.0" encoding="utf-8" standalone="yes"?>\n';
  stringFile += "<gpx>\n";
  stringFile += "<trk>\n";
  stringFile += "<trkseg>\n";

  coords.forEach((i) => {
    stringFile += `<trkpt lat="${parseFloat(i.lat)}" lon="${parseFloat(
      i.lng
    )}"></trkpt>\n`;
  });

  stringFile += `</trkseg>\n`;
  stringFile += `</trk>\n`;
  stringFile += `</gpx>\n`;
  return stringFile;
}

// fetch("https://cors-anywhere.herokuapp.com/https://nycpokemap.com/quests.php", { "x-requested-with": "fetch" })
// component
class GetQuest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "",
      quest: "",
      fileDownloadUrl: "",
    };

    this.handleSelectCity = this.handleSelectCity.bind(this);
    this.handleSelectQuest = this.handleSelectQuest.bind(this);
  }

  componentDidUpdate() {
    return
  }

  handleGetQuest = () => {
    if (this.state.url === "" || this.state.quest === "") {
      alert(!this.state.url ? "Select a city!" : "Select a quest type!");
    } else {

      fetchQuest(this.state.url, this.state.quest).then((res) => {
        let final = res;
        if (
          [
            "quests[]=12%2C0%2C3",
            "quests[]=12%2C0%2C6",
            "quests[]=12%2C0%2C9",
            "quests[]=12%2C0%2C15",
            "quests[]=12%2C0%2C18",
          ].includes(this.state.quest)
        ) {

          final = final.filter(
            i => i.conditions_string === "Power up Pokémon 5 times"
          );
        } else if(this.state.quest === "quests[]=3%2C200%2C0&quests[]=3%2C500%2C0&quests[]=3%2C1000%2C0&quests[]=3%2C1500%2C0") {
          final = final.filter(
            i => dusts.includes(i.conditions_string)
          )
        } else if(this.state.quest === "quests[]=12%2C0%2C80") {
          final = final.filter(
            i => i.conditions_string === "Use 10 supereffective Charged Attacks"
          );
        }
        
        fileDownload(new Blob([questCreateGpx(final)]), "quest.gpx");
      });
    }
  };

  handleSelectCity(e, debug=false) {
    if (debug) {
      alert(`Selected ${e.target.value}`);
    }

    this.setState({ url: e.target.value });
  }

  handleSelectQuest(e, debug=false) {
    if (debug) {
      alert(`Selected ${e.target.value}`);
    }

    this.setState({ quest: e.target.value });
  }

  render() {
    return (
      <div className="quest-select-container">
        {/* Select city */}
        <select
          name="city-name"
          className="select-quest city"
          value={this.state.url}
          onChange={this.handleSelectCity}
        >
          <option value="" hidden>
            🏙City🏙
          </option>
          {urls.map((i) => {
            return (
              <>
                <option
                  className="option-url"
                  value={i.url}
                  key={urls.indexOf(i)}
                  style={{ fontFamily: "sans-serif" }}
                >
                  {i.name}
                </option>
              </>
            );
          })}
        </select>

        {/* Select quest */}
        <select
          name="quest-url"
          className="select-quest quest"
          value={this.state.quest}
          onChange={this.handleSelectQuest}
        >
          <option value="" hidden>
            🗺️Quest🗺️
          </option>
          {rewards.map((i) => {
            return (
              <optgroup label={i.category} key={rewards.indexOf(i)}>
                {i.rewards.map((j) => {
                  return (
                    <option
                      value={j.literal}
                      key={i.rewards.indexOf(j)}
                      style={{ fontFamily: "sans-serif" }}
                    >
                      {j.reward}
                    </option>
                  );
                })}
              </optgroup>
            );
          })}
        </select>
        <button className="button-quest" onClick={ this.handleGetQuest }>
          Get quests
        </button>
      </div>
    );
  }
}

class ConvertToGpx extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputText: "", fileDownloadUrl: "" };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  createGpx(temp = this.parseCoords(this.state.inputText)) {
    let stringFile = "";
    stringFile += '<?xml version="1.0" encoding="utf-8" standalone="yes"?>\n';
    stringFile += "<gpx>\n";
    stringFile += "<trk>\n";
    stringFile += "<trkseg>\n";

    temp.forEach((i) => {
      let [lat, lon] = i[0].split(",");

      stringFile += `<trkpt lat="${parseFloat(lat)}" lon="${parseFloat(
        lon
      )}"></trkpt>\n`;
    });

    stringFile += `</trkseg>\n`;
    stringFile += `</trk>\n`;
    stringFile += `</gpx>\n`;
    return stringFile;
  }

  downloadFile() {
    const blob = new Blob([this.createGpx(this.state.inputText)]); // Step 3
    const fileDownloadUrl = URL.createObjectURL(blob); // Step 4
    this.setState(
      { fileDownloadUrl: fileDownloadUrl }, // Step 5
      () => {
        this.dofileDownload.click(); // Step 6
        URL.revokeObjectURL(fileDownloadUrl); // Step 7
        this.setState({ fileDownloadUrl: "" });
      }
    );
  }

  parseCoords() {
    const coordRegex = /[0-9]{1,3}\.[0-9]{3,14},.[0-9]{0,3}\.[0-9]{3,14}/g;
    const text = this.state.inputText;
    return [...text.matchAll(coordRegex)];
  }

  handleFormSubmit(e) {
    e.preventDefault();

    this.downloadFile();
  }

  render() {
    return (
      <>
        <form onSubmit={(e) => this.handleFormSubmit(e)} className="gpx-form">
          <input
            type="text"
            value={this.state.inputText}
            onChange={(e) => {
              this.setState({ inputText: e.target.value });
            }}
          />
          <input type="submit" value="Get .gpx file" className="gpx-submit" />
        </form>

        <a
          style={{ display: "none" }}
          download={"test.gpx"}
          href={this.state.fileDownloadUrl}
          ref={(e) => (this.dofileDownload = e)}
        >
          download it
        </a>
      </>
    );
  }
}
// component
export default function App() {
  /* Functions */
  // const copyToClipboard = (text) => {
  //   let textField = document.createElement('textarea')
  //   textField.innerText = text
  //   document.body.appendChild(textField)
  //   textField.select()
  //   document.execCommand('copy')
  //   textField.remove()
  // }

  return (
    <>
      <ConvertToGpx />
      <GetQuest />
    </>
  );
}
