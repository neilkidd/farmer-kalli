(this["webpackJsonpfarmer-kalli"]=this["webpackJsonpfarmer-kalli"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),l=(n(9),n(1)),s=function(e){return r.a.createElement("form",{name:"calculator"},"Number of bags: ",r.a.createElement("input",{type:"number",min:"0",max:"1000",name:"sacks",value:e.sacksOfCorn,onChange:function(t){return e.setSacksOfCorn(t.target.value)}}),r.a.createElement("button",{onClick:e.handleCalculate},"Calculate"))};n(10);var u=function(e){var t=Object(a.useState)(0),n=Object(l.a)(t,2),o=n[0],c=n[1],u=Object(a.useState)(0),i=Object(l.a)(u,2),m=i[0],f=i[1],h=new Intl.NumberFormat("en-GB",{style:"currency",currency:"GBP"});return r.a.createElement("div",{className:"App"},r.a.createElement(s,{handleCalculate:function(e){e.preventDefault();var t,n=1===(t=parseInt(o))?.25:t>0?.25*(t+(t%2===0?1:2)):0;f(n)},sacksOfCorn:o,setSacksOfCorn:c}),r.a.createElement("div",null,"Total Cost: ",h.format(m)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.5a0e1258.chunk.js.map