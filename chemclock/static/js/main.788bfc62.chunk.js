(this.webpackJsonpchemclock=this.webpackJsonpchemclock||[]).push([[0],{16:function(e,t,n){e.exports=n(26)},21:function(e,t,n){},22:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a,c=n(0),i=n.n(c),o=n(11),l=n.n(o),r=(n(21),n(9)),s=(n(22),n(8)),m=n(7),u=n.n(m),h=function e(){Object(s.a)(this,e),this.timeString="",this.isAM=!0},v=function e(){Object(s.a)(this,e),this.getNormalTime=function(){var e=new Date,t=new h,n=e.getHours();return t.isAM=n<12,n=(n%=12)||12,t.timeString="".concat(n,":").concat(e.getMinutes(),":").concat(e.getSeconds()),t},this.getChemicalTime=function(){var e=new Date,t=new h,n=e.getHours();t.isAM=n<12,n=(n%=12)||12,n=u.a.numbers[n].symbol;var a=0===e.getMinutes()?"Nu":u.a.numbers[e.getMinutes()].symbol,c=0===e.getSeconds()?"Nu":u.a.numbers[e.getSeconds()].symbol;return t.timeString="".concat(n,":").concat(a,":").concat(c),t}},g=n(28),f=n(29),d=n(30),b=n(31),E=n(33),w=n(15),p=n(32);!function(e){e[e.Chemist=0]="Chemist",e[e.Human=1]="Human"}(a||(a={}));var C=function(){var e=Object(c.useState)(),t=Object(r.a)(e,2),n=t[0],o=t[1],l=Object(c.useState)(a.Chemist),s=Object(r.a)(l,2),m=s[0],u=s[1],h=new v,C=Object(c.useCallback)((function(){m.valueOf()===a.Chemist?o(h.getChemicalTime()):o(h.getNormalTime())}),[h,m]);return Object(c.useEffect)((function(){C();var e=setInterval(C,1e3);return function(){clearInterval(e)}}),[C]),i.a.createElement("div",{className:"App m-4"},i.a.createElement(g.a,null,i.a.createElement(f.a,null,i.a.createElement(d.a,null,i.a.createElement(b.a,null,i.a.createElement(E.a,{type:"radio",name:"options",defaultValue:0,onChange:function(e){u(0===e?a.Chemist:a.Human)}},i.a.createElement(w.a,{value:0,variant:"light",size:"sm"},"Chemist"),i.a.createElement(w.a,{value:1,variant:"light",size:"sm"},"Normal"))))),i.a.createElement(f.a,null,i.a.createElement(d.a,null,i.a.createElement("div",{className:"time"},null===n||void 0===n?void 0:n.timeString))),i.a.createElement(f.a,null,i.a.createElement(d.a,null,i.a.createElement(p.a,{pill:!0,variant:"dark"},(null===n||void 0===n?void 0:n.isAM)?"AM":"PM")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);