(this.webpackJsonpchemclock=this.webpackJsonpchemclock||[]).push([[0],{16:function(e,t,n){e.exports=n(26)},21:function(e,t,n){},22:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a,i=n(0),c=n.n(i),o=n(11),r=n.n(o),l=(n(21),n(9)),s=(n(22),n(8)),m=n(7),u=n.n(m),h=function e(){Object(s.a)(this,e),this.timeString="",this.isAM=!0},g=function e(){Object(s.a)(this,e),this.getNormalTime=function(){var e=new Date,t=new h,n=e.getHours();return t.isAM=n<12,n=(n%=12)||12,t.timeString="".concat(n,":").concat(e.getMinutes(),":").concat(e.getSeconds()),t},this.getChemicalTime=function(){var e=new Date,t=new h,n=e.getHours();t.isAM=n<12,n=(n%=12)||12,n=u.a.numbers[n].symbol;var a=0===e.getMinutes()?"Nu":u.a.numbers[e.getMinutes()].symbol,i=0===e.getSeconds()?"Nu":u.a.numbers[e.getSeconds()].symbol;return t.timeString="".concat(n,":").concat(a,":").concat(i),t}},v=n(28),f=n(29),d=n(30),E=n(31),b=n(33),w=n(15),p=n(32);!function(e){e[e.Chemist=0]="Chemist",e[e.Human=1]="Human"}(a||(a={}));var C=function(){var e=Object(i.useState)(),t=Object(l.a)(e,2),n=t[0],o=t[1],r=Object(i.useState)(a.Chemist),s=Object(l.a)(r,2),m=s[0],u=s[1],h=new g;return Object(i.useEffect)((function(){var e=setInterval((function(){m.valueOf()===a.Chemist?o(h.getChemicalTime()):o(h.getNormalTime())}),1e3);return function(){clearInterval(e)}}),[h,m]),c.a.createElement("div",{className:"App m-4"},c.a.createElement(v.a,null,c.a.createElement(f.a,null,c.a.createElement(d.a,null,c.a.createElement(E.a,null,c.a.createElement(b.a,{type:"radio",name:"options",defaultValue:0,onChange:function(e){u(0===e?a.Chemist:a.Human)}},c.a.createElement(w.a,{value:0,variant:"light"},"Chemist"),c.a.createElement(w.a,{value:1,variant:"light"},"Normal")))),c.a.createElement(d.a,null,c.a.createElement(p.a,{pill:!0,variant:"light"},(null===n||void 0===n?void 0:n.isAM)?"AM":"PM"))),c.a.createElement(f.a,null,c.a.createElement(d.a,null,c.a.createElement("div",{className:"time"},null===n||void 0===n?void 0:n.timeString)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);