!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict";e.defineMode("pascal",function(){function e(e,a){var u=e.next();if("#"==u&&a.startOfLine)return e.skipToEnd(),"meta";if('"'==u||"'"==u)return a.tokenize=r(u),a.tokenize(e,a);if("("==u&&e.eat("*"))return a.tokenize=t,t(e,a);if(/[\[\]{}\(\),;\:\.]/.test(u))return null;if(/\d/.test(u))return e.eatWhile(/[\w\.]/),"number";if("/"==u&&e.eat("/"))return e.skipToEnd(),"comment";if(i.test(u))return e.eatWhile(i),"operator";e.eatWhile(/[\w\$_]/);var f=e.current();return n.propertyIsEnumerable(f)?"keyword":o.propertyIsEnumerable(f)?"atom":"variable"}function r(e){return function(r,t){for(var n,o=!1,i=!1;null!=(n=r.next());){if(n==e&&!o){i=!0;break}o=!o&&"\\"==n}return!i&&o||(t.tokenize=null),"string"}}function t(e,r){for(var t,n=!1;t=e.next();){if(")"==t&&n){r.tokenize=null;break}n="*"==t}return"comment"}var n=function(e){for(var r={},t=e.split(" "),n=0;n<t.length;++n)r[t[n]]=!0;return r}("and array begin case const div do downto else end file for forward integer boolean char function goto if in label mod nil not of or packed procedure program record repeat set string then to type until var while with"),o={null:!0},i=/[+\-*&%=<>!?|\/]/;return{startState:function(){return{tokenize:null}},token:function(r,t){if(r.eatSpace())return null;var n=(t.tokenize||e)(r,t);return n},electricChars:"{}"}}),e.defineMIME("text/x-pascal","pascal")});