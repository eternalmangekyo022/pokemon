(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),s=n(15),c=n.n(s),o=n(16),i=n(6),l=n(7),u=n(1),p=n.n(u),d=n(10),h=n(11),f=n(4),b=n(13),C=n(12),m=n(9),j=(n(23),n(5)),v=n(17),x=n.n(v),w=n(0),g=["Make 3 Great Throws in a row","Make 2 Nice Curveball Throws in a row","Make 5 Nice Throws","Make 3 Great Throws","Make 3 Nice Throws in a row","Make an Excellent Throw",""];function k(e,t){return q.apply(this,arguments)}function q(){return(q=Object(m.a)(p.a.mark((function e(t,n){var a,r,s,c,o,i,u,d,h,f,b,C,m,j,v=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=v.length>2&&void 0!==v[2]?v[2]:"K",r=t.split(","),s=Object(l.a)(r,2),c=s[0],o=s[1],i=n.split(","),u=Object(l.a)(i,2),d=u[0],h=u[1],c=parseFloat(c),o=parseFloat(o),d=parseFloat(d),h=parseFloat(h),c!==d||o!==h){e.next=11;break}return e.abrupt("return",0);case 11:return f=Math.PI*c/180,b=Math.PI*d/180,C=o-h,m=Math.PI*C/180,(j=Math.sin(f)*Math.sin(b)+Math.cos(f)*Math.cos(b)*Math.cos(m))>1&&(j=1),j=60*(j=180*(j=Math.acos(j))/Math.PI)*1.1515,"K"===a&&(j*=1.609344),"N"===a&&(j*=.8684),e.abrupt("return",j);case 23:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e,t){return y.apply(this,arguments)}function y(){return(y=Object(m.a)(p.a.mark((function e(t,n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://pokemon-api-327709.appspot.com/quests/".concat(t,"/").concat(n));case 3:return a=e.sent,console.log(a),e.next=7,a.json();case 7:return a=e.sent,e.next=10,S(a.data);case 10:return e.abrupt("return",e.sent);case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0+" fetchQuest()");case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function S(e){return M.apply(this,arguments)}function M(){return(M=Object(m.a)(p.a.mark((function e(t){var n,a,r,s,c,u,d,h,f,b,C,m,j,v,x;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=function(e,n){var a,r=[];-1===n&&(n=e.length-1);for(var s=0;s<e.length;s++)s!==n?r=[].concat(Object(i.a)(r),[e[s]]):a=e[s];if(!a)throw new Error("index not valid. sortQuests.pop() actual length: ".concat(t.length,", index given: ").concat(n));return[r,a]},0!==t.length){e.next=4;break}return console.error("No quests specified, quest list empty. sortQuests()"),e.abrupt("return",t);case 4:a=[],s=n(t,0),c=Object(l.a)(s,2),t=c[0],r=c[1],a[0]=r,t=t.filter((function(e){return e!==r})),u=[];case 13:if(!(t.length>0)){e.next=45;break}d=[{chose:null}],h=1e9,f=null,b=Object(o.a)(t),e.prev=18,b.s();case 20:if((C=b.n()).done){e.next=29;break}return m=C.value,e.next=24,k(m.lat+","+m.lng,a.at(-1).lat+","+a.at(-1).lng);case 24:j=e.sent,d=[].concat(Object(i.a)(d),[j]),j<h&&(d[0].chose=j,h=j,f=m);case 27:e.next=20;break;case 29:e.next=34;break;case 31:e.prev=31,e.t0=e.catch(18),b.e(e.t0);case 34:return e.prev=34,b.f(),e.finish(34);case 37:u=[].concat(Object(i.a)(u),[d]),v=n(t,t.indexOf(f)),x=Object(l.a)(v,2),t=x[0],r=x[1],a=[].concat(Object(i.a)(a),[r]),e.next=13;break;case 45:return e.abrupt("return",a);case 46:case"end":return e.stop()}}),e,null,[[18,31,34,37]])})))).apply(this,arguments)}function F(e){var t="";return t+='<?xml version="1.0" encoding="utf-8" standalone="yes"?>\n',t+="<gpx>\n",t+="<trk>\n",t+="<trkseg>\n",e.forEach((function(e){t+='<trkpt lat="'.concat(parseFloat(e.lat),'" lon="').concat(parseFloat(e.lng),'"></trkpt>\n')})),t+="</trkseg>\n",t+="</trk>\n",t+="</gpx>\n"}var N=function(e){Object(b.a)(n,e);var t=Object(C.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).handleGetQuest=Object(m.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:""===a.state.url||""===a.state.quest?alert(a.state.url?"Select a quest type!":"Select a city!"):O(a.state.url,a.state.quest).then((function(e){var t=e;["quests[]=12%2C0%2C3","quests[]=12%2C0%2C6","quests[]=12%2C0%2C9","quests[]=12%2C0%2C15","quests[]=12%2C0%2C18"].includes(a.state.quest)?t=t.filter((function(e){return"Power up Pok\xe9mon 5 times"===e.conditions_string})):"quests[]=3%2C200%2C0&quests[]=3%2C500%2C0&quests[]=3%2C1000%2C0&quests[]=3%2C1500%2C0"===a.state.quest?t=t.filter((function(e){return g.includes(e.conditions_string)})):("quests[]=12%2C0%2C80"===a.state.quest||"quests[]=12%2C0%2C94"===a.state.quest)&&(t=t.filter((function(e){return"Use 10 supereffective Charged Attacks"===e.conditions_string}))),x()(new Blob([F(t)]),"quest.gpx")}));case 1:case"end":return e.stop()}}),e)}))),a.state={url:"",quest:"",fileDownloadUrl:""},a.handleSelectCity=a.handleSelectCity.bind(Object(f.a)(a)),a.handleSelectQuest=a.handleSelectQuest.bind(Object(f.a)(a)),a}return Object(h.a)(n,[{key:"componentDidUpdate",value:function(){}},{key:"handleSelectCity",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t&&alert("Selected ".concat(e.target.value)),this.setState({url:e.target.value})}},{key:"handleSelectQuest",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t&&alert("Selected ".concat(e.target.value)),this.setState({quest:e.target.value})}},{key:"render",value:function(){return Object(w.jsxs)("div",{className:"quest-select-container",children:[Object(w.jsxs)("select",{name:"city-name",className:"select-quest city",value:this.state.url,onChange:this.handleSelectCity,children:[Object(w.jsx)("option",{value:"",hidden:!0,children:"\ud83c\udfd9City\ud83c\udfd9"}),j.b.map((function(e){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("option",{className:"option-url",value:e.url,style:{fontFamily:"sans-serif"},children:e.name},j.b.indexOf(e))})}))]}),Object(w.jsxs)("select",{name:"quest-url",className:"select-quest quest",value:this.state.quest,onChange:this.handleSelectQuest,children:[Object(w.jsx)("option",{value:"",hidden:!0,children:"\ud83d\uddfa\ufe0fQuest\ud83d\uddfa\ufe0f"}),j.a.map((function(e){return Object(w.jsx)("optgroup",{label:e.category,children:e.rewards.map((function(t){return Object(w.jsx)("option",{value:t.literal,style:{fontFamily:"sans-serif"},children:t.reward},e.rewards.indexOf(t))}))},j.a.indexOf(e))}))]}),Object(w.jsx)("button",{className:"button-quest",onClick:this.handleGetQuest,children:"Get quests"})]})}}]),n}(r.a.Component),T=function(e){Object(b.a)(n,e);var t=Object(C.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).date=new Date,a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log("Mounted"),setInterval((function(){e.forceUpdate()}),1e3)}},{key:"render",value:function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("div",{style:{marginBottom:"30px important",display:"block",position:"absolute",width:"100vw",textAlign:"center"},children:j.b.map((function(e){var t=new Date;return Object(w.jsx)("p",{children:"".concat(e.name," ").concat(t.toLocaleString("en-CA",{timeZone:e.timeZone,hour12:!0}))})}))})})}}]),n}(r.a.Component),D=function(e){Object(b.a)(n,e);var t=Object(C.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={inputText:"",fileDownloadUrl:""},a.handleFormSubmit=a.handleFormSubmit.bind(Object(f.a)(a)),a}return Object(h.a)(n,[{key:"createGpx",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.parseCoords(this.state.inputText),t="";return t+='<?xml version="1.0" encoding="utf-8" standalone="yes"?>\n',t+="<gpx>\n",t+="<trk>\n",t+="<trkseg>\n",e.forEach((function(e){var n=e[0].split(","),a=Object(l.a)(n,2),r=a[0],s=a[1];t+='<trkpt lat="'.concat(parseFloat(r),'" lon="').concat(parseFloat(s),'"></trkpt>\n')})),t+="</trkseg>\n",t+="</trk>\n",t+="</gpx>\n"}},{key:"downloadFile",value:function(){var e=this,t=new Blob([this.createGpx(this.state.inputText)]),n=URL.createObjectURL(t);this.setState({fileDownloadUrl:n},(function(){e.dofileDownload.click(),URL.revokeObjectURL(n),e.setState({fileDownloadUrl:""})}))}},{key:"parseCoords",value:function(){var e=this.state.inputText;return Object(i.a)(e.matchAll(/[0-9]{1,3}\.[0-9]{3,14},.[0-9]{0,3}\.[0-9]{3,14}/g))}},{key:"handleFormSubmit",value:function(e){e.preventDefault(),this.downloadFile()}},{key:"render",value:function(){var e=this;return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("form",{onSubmit:function(t){return e.handleFormSubmit(t)},className:"gpx-form",children:[Object(w.jsx)("input",{type:"text",value:this.state.inputText,onChange:function(t){e.setState({inputText:t.target.value})}}),Object(w.jsx)("input",{type:"submit",value:"Get .gpx file",className:"gpx-submit"})]})})}}]),n}(r.a.Component);function U(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(D,{}),Object(w.jsx)(N,{}),Object(w.jsx)(T,{})]})}c.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(U,{})}),document.getElementById("root"))},5:function(e){e.exports=JSON.parse('{"a":[{"category":"Stardust","rewards":[{"reward":"\u2728200\u2728","literal":"quests[]=3%2C200%2C0"},{"reward":"\u2728500\u2728","literal":"quests[]=3%2C500%2C0"},{"reward":"\u27281000\u2728","literal":"quests[]=3%2C1000%2C0"},{"reward":"\u27281500\u2728","literal":"quests[]=3%2C1500%2C0"},{"reward":"\ud83d\udcb0All in one\ud83d\udcb0","literal":"quests[]=3%2C200%2C0&quests[]=3%2C500%2C0&quests[]=3%2C1000%2C0&quests[]=3%2C1500%2C0"}]},{"category":"Mega Energy","filter":"Power up Pok\xe9mon 5 times","rewards":[{"reward":"20x\ud83d\udc7bGengar\ud83d\udc7b","literal":"quests[]=12%2C0%2C94"},{"reward":"10x\ud83c\udf43Venusaur\ud83c\udf43","literal":"quests[]=12%2C0%2C3"},{"reward":"10x\ud83d\udd25Charizard\ud83d\udd25","literal":"quests[]=12%2C0%2C6"},{"reward":"10x\ud83d\udca7Blastoise\ud83d\udca7","literal":"quests[]=12%2C0%2C9"},{"reward":"10x\ud83d\udc1eBeedrill\ud83d\udc1e","literal":"quests[]=12%2C0%2C15"},{"reward":"10x\ud83d\udca8Pidgeot\ud83d\udca8","literal":"quests[]=12%2C0%2C18"},{"reward":"20x\ud83d\udca7Slowbro\ud83d\udca7","literal":"quests[]=12%2C0%2C80"}]},{"category":"Pokemon Encounter","rewards":[{"reward":"\ud83d\udc4dRufflet\u2728","literal":"quests[]=7%2C0%2C627"},{"reward":"\ud83d\udc4dSpinda\u2728","literal":"quests[]=7%2C0%2C327"},{"reward":"\ud83e\udea8Larvitar\u2728","literal":"quests[]=7%2C0%2C246"},{"reward":"\ud83e\udea8Sudowoodo\u2728","literal":"quests[]=7%2C0%2C185"},{"reward":"\ud83d\udc09Dratini\u2728","literal":"quests[]=7%2C0%2C147"},{"reward":"\ud83d\udc09Gible\u2728","literal":"quests[]=7%2C0%2C443"},{"reward":"\ud83d\udc09Bagon\u2728","literal":"quests[]=7%2C0%2C371"},{"reward":"\ud83d\udca7Magikarp\u2728","literal":"quests[]=7%2C0%2C129"},{"reward":"\ud83d\udd29Beldum\u2728","literal":"quests[]=7%2C0%2C374"}]}],"b":[{"name":"\ud83d\uddfdNew York\ud83d\uddfd","url":"nycpokemap.com/quests.php","timeZone":"America/New_York"},{"name":"\ud83c\udde8\ud83c\udde6Vancouver\ud83c\udde8\ud83c\udde6","url":"vanpokemap.com/quests.php","timeZone":"America/New_York"},{"name":"\ud83c\uddec\ud83c\udde7London\ud83c\uddec\ud83c\udde7","url":"londonpogomap.com/quests.php","timeZone":"Europe/London"},{"name":"\ud83c\uddf0\ud83c\uddf7Singapore\ud83c\uddf0\ud83c\uddf7","url":"sgpokemap.com/quests.php","timeZone":"Asia/Singapore"}]}')}},[[25,1,2]]]);
//# sourceMappingURL=main.026b8997.chunk.js.map