!function(e){var n={};function t(c){if(n[c])return n[c].exports;var o=n[c]={i:c,l:!1,exports:{}};return e[c].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,c){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:c})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(c,o,function(n){return e[n]}.bind(null,o));return c},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(module,exports){eval("const list = document.querySelector('.list--js');\n\nfetch('https://api.github.com/users/PawelTobys/repos?sort=updated&direction=asc')\n  .then(resp => resp.json())\n  .then(resp => {\n    const repos = resp;\n    for (const repo of repos) {\n      const {description, html_url, name} = repo;\n      list.innerHTML += \n      `<li class=\"list__item\"><a href=\"${html_url}\"> ${name}</a>\n      <p> ${description ? description : \"no description\"}</p></li>`;\n    }\n})\n.catch(err => {\n  console.log(err);\n})\n\nconsole.log('test');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDRCQUE0QjtBQUN6QztBQUNBLHlDQUF5QyxTQUFTLEtBQUssS0FBSztBQUM1RCxZQUFZLDZDQUE2QztBQUN6RDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LS1qcycpO1xuXG5mZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9QYXdlbFRvYnlzL3JlcG9zP3NvcnQ9dXBkYXRlZCZkaXJlY3Rpb249YXNjJylcbiAgLnRoZW4ocmVzcCA9PiByZXNwLmpzb24oKSlcbiAgLnRoZW4ocmVzcCA9PiB7XG4gICAgY29uc3QgcmVwb3MgPSByZXNwO1xuICAgIGZvciAoY29uc3QgcmVwbyBvZiByZXBvcykge1xuICAgICAgY29uc3Qge2Rlc2NyaXB0aW9uLCBodG1sX3VybCwgbmFtZX0gPSByZXBvO1xuICAgICAgbGlzdC5pbm5lckhUTUwgKz0gXG4gICAgICBgPGxpIGNsYXNzPVwibGlzdF9faXRlbVwiPjxhIGhyZWY9XCIke2h0bWxfdXJsfVwiPiAke25hbWV9PC9hPlxuICAgICAgPHA+ICR7ZGVzY3JpcHRpb24gPyBkZXNjcmlwdGlvbiA6IFwibm8gZGVzY3JpcHRpb25cIn08L3A+PC9saT5gO1xuICAgIH1cbn0pXG4uY2F0Y2goZXJyID0+IHtcbiAgY29uc29sZS5sb2coZXJyKTtcbn0pXG5cbmNvbnNvbGUubG9nKCd0ZXN0Jyk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")}]);