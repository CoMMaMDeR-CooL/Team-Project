parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"c4md":[function(require,module,exports) {
var e=document.getElementById("Form1"),t=document.getElementById("Form2"),l=document.getElementById("Form3"),n=document.getElementById("Next1"),c=document.getElementById("Next2"),d=document.getElementById("Back1"),o=document.getElementById("Back2"),y=document.getElementById("progress");n.onclick=function(){e.style.left="-400px",t.style.left="10px",y.style.width="200px"},d.onclick=function(){e.style.left="10px",t.style.left="400px",y.style.width="100px"},c.onclick=function(){t.style.left="-400px",l.style.left="10px",y.style.width="360px"},o.onclick=function(){t.style.left="10px",l.style.left="400px",y.style.width="200px"};
},{}]},{},["c4md"], null)
//# sourceMappingURL=/Team-Project/modal-franchise-sign.e211090d.js.map