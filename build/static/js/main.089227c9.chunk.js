(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{18:function(t,n,e){},23:function(t,n,e){"use strict";e.r(n);var c=e(1),a=e.n(c),r=e(8),i=e.n(r),o=e(5),u=e(9),s=e(4),l=e(13),b=e(11),p=e(12),j=e(7),f=(e(18),e(10)),h=e.n(f),m=e(0),x=function t(n,e){Object(j.a)(this,t),this.lat=n,this.lon=e};function O(){var t=Object(c.useState)([]),n=Object(p.a)(t,2),e=n[0],r=n[1],i=function(t){Object(l.a)(e,t);var n=Object(b.a)(e);function e(t){var c;return Object(j.a)(this,e),(c=n.call(this,t)).state={inputText:""},c.handleFormSubmit=c.handleFormSubmit.bind(Object(s.a)(c)),c}return Object(u.a)(e,[{key:"handleFormSubmit",value:function(t){t.preventDefault();var n=[];this.state.inputText.split("min ").forEach((function(t){t.split("- Set ").forEach((function(t){if(""!==t){var e=t.split(", ")[0];e=(e=e.split(" ")).length>1?e[1]:e[0],n=[].concat(Object(o.a)(n),[e])}}))})),n=n.filter((function(t){return t.length>3}));var e=[];n.forEach((function(t){var n=t.split(",");e=[].concat(Object(o.a)(e),[new x(n[0],n[1])])})),r(e),document.querySelector("a").click()}},{key:"render",value:function(){var t=this;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("form",{onSubmit:function(n){return t.handleFormSubmit(n)},children:[Object(m.jsx)("input",{type:"text",value:this.state.inputText,onChange:function(n){t.setState({inputText:n.target.value})}}),Object(m.jsx)("input",{type:"submit",value:"Get .gpx file"})]})})}}]),e}(a.a.Component);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(i,{}),Object(m.jsx)(h.a,{label:"",filename:"pokemon.gpx",exportFile:function(){return function(){var t="";return t+='<?xml version="1.0" encoding="utf-8" standalone="yes"?>\n',t+="<gpx>\n",t+="<trk>\n",t+="<trkseg>\n",Object(o.a)(e).forEach((function(n){t+='<trkpt lat="'.concat(n.lat,'" lon="').concat(n.lon,'"></trkpt>\n')})),t+="</trkseg>\n",t+="</trk>\n",t+="</gpx>\n"}()}})]})}i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.089227c9.chunk.js.map