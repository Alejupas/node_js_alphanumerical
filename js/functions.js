"use strict";
// 3. functions.js faile aprasyti funkcija, kuri gauna texta arba stringa ir pavercia ji camelCase (istrint tarpa ir kita raide in capital letters)

function makeCamel(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}
console.log(makeCamel("pasikurti nauja projekta inicializuoti git"));

module.exports = {
  makeCamel,
};
