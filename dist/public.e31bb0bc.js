// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"constants/colors.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.hexColorsMap = exports.cssHex = exports.cssColors = void 0;
var cssColors = {
  0: "AliceBlue",
  1: "AntiqueWhite",
  2: "Aqua",
  3: "Aquamarine",
  4: "Azure",
  5: "Beige",
  6: "Bisque",
  7: "Black",
  8: "BlanchedAlmond",
  9: "Blue",
  10: "BlueViolet",
  11: "Brown",
  12: "BurlyWood",
  13: "CadetBlue",
  14: "Chartreuse",
  15: "Chocolate",
  16: "Coral",
  17: "CornflowerBlue",
  18: "Cornsilk",
  19: "Crimson",
  20: "Cyan",
  21: "DarkBlue",
  22: "DarkCyan",
  23: "DarkGoldenRod",
  24: "DarkGray",
  25: "DarkGrey",
  26: "DarkGreen",
  27: "DarkKhaki",
  28: "DarkMagenta",
  29: "DarkOliveGreen",
  30: "DarkOrange",
  31: "DarkOrchid",
  32: "DarkRed",
  33: "DarkSalmon",
  34: "DarkSeaGreen",
  35: "DarkSlateBlue",
  36: "DarkSlateGray",
  37: "DarkSlateGrey",
  38: "DarkTurquoise",
  39: "DarkViolet",
  40: "DeepPink",
  41: "DeepSkyBlue",
  42: "DimGray",
  43: "DimGrey",
  44: "DodgerBlue",
  45: "FireBrick",
  46: "FloralWhite",
  47: "ForestGreen",
  48: "Fuchsia",
  49: "Gainsboro",
  50: "GhostWhite",
  51: "Gold",
  52: "GoldenRod",
  53: "Gray",
  54: "Grey",
  55: "Green",
  56: "GreenYellow",
  57: "HoneyDew",
  58: "HotPink",
  59: "IndianRed",
  60: "Indigo",
  61: "Ivory",
  62: "Khaki",
  63: "Lavender",
  64: "LavenderBlush",
  65: "LawnGreen",
  66: "LemonChiffon",
  67: "LightBlue",
  68: "LightCoral",
  69: "LightCyan",
  70: "LightGoldenRodYellow",
  71: "LightGray",
  72: "LightGrey",
  73: "LightGreen",
  74: "LightPink",
  75: "LightSalmon",
  76: "LightSeaGreen",
  77: "LightSkyBlue",
  78: "LightSlateGray",
  79: "LightSlateGrey",
  80: "LightSteelBlue",
  81: "LightYellow",
  82: "Lime",
  83: "LimeGreen",
  84: "Linen",
  85: "Magenta",
  86: "Maroon",
  87: "MediumAquaMarine",
  88: "MediumBlue",
  89: "MediumOrchid",
  90: "MediumPurple",
  91: "MediumSeaGreen",
  92: "MediumSlateBlue",
  93: "MediumSpringGreen",
  94: "MediumTurquoise",
  95: "MediumVioletRed",
  96: "MidnightBlue",
  97: "MintCream",
  98: "MistyRose",
  99: "Moccasin",
  100: "NavajoWhite",
  101: "Navy",
  102: "OldLace",
  103: "Olive",
  104: "OliveDrab",
  105: "Orange",
  106: "OrangeRed",
  107: "Orchid",
  108: "PaleGoldenRod",
  109: "PaleGreen",
  110: "PaleTurquoise",
  111: "PaleVioletRed",
  112: "PapayaWhip",
  113: "PeachPuff",
  114: "Peru",
  115: "Pink",
  116: "Plum",
  117: "PowderBlue",
  118: "Purple",
  119: "RebeccaPurple",
  120: "Red",
  121: "RosyBrown",
  122: "RoyalBlue",
  123: "SaddleBrown",
  124: "Salmon",
  125: "SandyBrown",
  126: "SeaGreen",
  127: "SeaShell",
  128: "Sienna",
  129: "Silver",
  130: "SkyBlue",
  131: "SlateBlue",
  132: "SlateGray",
  133: "SlateGrey",
  134: "Snow",
  135: "SpringGreen",
  136: "SteelBlue",
  137: "Tan",
  138: "Teal",
  139: "Thistle",
  140: "Tomato",
  141: "Turquoise",
  142: "Violet",
  143: "Wheat",
  144: "White",
  145: "WhiteSmoke",
  146: "Yellow",
  147: "YellowGreen"
};
exports.cssColors = cssColors;
var cssHex = {
  0: "F0F8FF",
  1: "FAEBD7",
  2: "00FFFF",
  3: "7FFFD4",
  4: "F0FFFF",
  5: "F5F5DC",
  6: "FFE4C4",
  7: "000000",
  8: "FFEBCD",
  9: "0000FF",
  10: "8A2BE2",
  11: "A52A2A",
  12: "DEB887",
  13: "5F9EA0",
  14: "7FFF00",
  15: "D2691E",
  16: "FF7F50",
  17: "6495ED",
  18: "FFF8DC",
  19: "DC143C",
  20: "00FFFF",
  21: "00008B",
  22: "008B8B",
  23: "B8860B",
  24: "A9A9A9",
  25: "A9A9A9",
  26: "006400",
  27: "BDB76B",
  28: "8B008B",
  29: "556B2F",
  30: "FF8C00",
  31: "9932CC",
  32: "8B0000",
  33: "E9967A",
  34: "8FBC8F",
  35: "483D8B",
  36: "2F4F4F",
  37: "2F4F4F",
  38: "00CED1",
  39: "9400D3",
  40: "FF1493",
  41: "00BFFF",
  42: "696969",
  43: "696969",
  44: "1E90FF",
  45: "B22222",
  46: "FFFAF0",
  47: "228B22",
  48: "FF00FF",
  49: "DCDCDC",
  50: "F8F8FF",
  51: "FFD700",
  52: "DAA520",
  53: "808080",
  54: "808080",
  55: "008000",
  56: "ADFF2F",
  57: "F0FFF0",
  58: "FF69B4",
  59: "CD5C5C",
  60: "4B0082",
  61: "FFFFF0",
  62: "F0E68C",
  63: "E6E6FA",
  64: "FFF0F5",
  65: "7CFC00",
  66: "FFFACD",
  67: "ADD8E6",
  68: "F08080",
  69: "E0FFFF",
  70: "FAFAD2",
  71: "D3D3D3",
  72: "D3D3D3",
  73: "90EE90",
  74: "FFB6C1",
  75: "FFA07A",
  76: "20B2AA",
  77: "87CEFA",
  78: "778899",
  79: "778899",
  80: "B0C4DE",
  81: "FFFFE0",
  82: "00FF00",
  83: "32CD32",
  84: "FAF0E6",
  85: "FF00FF",
  86: "800000",
  87: "66CDAA",
  88: "0000CD",
  89: "BA55D3",
  90: "9370DB",
  91: "3CB371",
  92: "7B68EE",
  93: "00FA9A",
  94: "48D1CC",
  95: "C71585",
  96: "191970",
  97: "F5FFFA",
  98: "FFE4E1",
  99: "FFE4B5",
  100: "FFDEAD",
  101: "000080",
  102: "FDF5E6",
  103: "808000",
  104: "6B8E23",
  105: "FFA500",
  106: "FF4500",
  107: "DA70D6",
  108: "EEE8AA",
  109: "98FB98",
  110: "AFEEEE",
  111: "DB7093",
  112: "FFEFD5",
  113: "FFDAB9",
  114: "CD853F",
  115: "FFC0CB",
  116: "DDA0DD",
  117: "B0E0E6",
  118: "800080",
  119: "663399",
  120: "FF0000",
  121: "BC8F8F",
  122: "4169E1",
  123: "8B4513",
  124: "FA8072",
  125: "F4A460",
  126: "2E8B57",
  127: "FFF5EE",
  128: "A0522D",
  129: "C0C0C0",
  130: "87CEEB",
  131: "6A5ACD",
  132: "708090",
  133: "708090",
  134: "FFFAFA",
  135: "00FF7F",
  136: "4682B4",
  137: "D2B48C",
  138: "008080",
  139: "D8BFD8",
  140: "FF6347",
  141: "40E0D0",
  142: "EE82EE",
  143: "F5DEB3",
  144: "FFFFFF",
  145: "F5F5F5",
  146: "FFFF00",
  147: "9ACD32"
};
exports.cssHex = cssHex;
var hexColorsMap = {
  "00BFFF": "DeepSkyBlue",
  "00CED1": "DarkTurquoise",
  "00FA9A": "MediumSpringGreen",
  "00FF00": "Lime",
  "00FF7F": "SpringGreen",
  "00FFFF": "Cyan",
  "0000CD": "MediumBlue",
  "0000FF": "Blue",
  "000000": "Black",
  "1E90FF": "DodgerBlue",
  "2E8B57": "SeaGreen",
  "2F4F4F": "DarkSlateGrey",
  "3CB371": "MediumSeaGreen",
  "4B0082": "Indigo",
  "5F9EA0": "CadetBlue",
  "6A5ACD": "SlateBlue",
  "6B8E23": "OliveDrab",
  "7B68EE": "MediumSlateBlue",
  "7CFC00": "LawnGreen",
  "7FFF00": "Chartreuse",
  "7FFFD4": "Aquamarine",
  "00008B": "DarkBlue",
  "008B8B": "DarkCyan",
  "8A2BE2": "BlueViolet",
  "8B0000": "DarkRed",
  "8B008B": "DarkMagenta",
  "8B4513": "SaddleBrown",
  "8FBC8F": "DarkSeaGreen",
  "9ACD32": "YellowGreen",
  "20B2AA": "LightSeaGreen",
  "32CD32": "LimeGreen",
  "40E0D0": "Turquoise",
  "48D1CC": "MediumTurquoise",
  "66CDAA": "MediumAquaMarine",
  "000080": "Navy",
  "87CEEB": "SkyBlue",
  "87CEFA": "LightSkyBlue",
  "90EE90": "LightGreen",
  "98FB98": "PaleGreen",
  "228B22": "ForestGreen",
  "483D8B": "DarkSlateBlue",
  "556B2F": "DarkOliveGreen",
  "4169E1": "RoyalBlue",
  "4682B4": "SteelBlue",
  "006400": "DarkGreen",
  "6495ED": "CornflowerBlue",
  "008000": "Green",
  "008080": "Teal",
  "9370DB": "MediumPurple",
  "9400D3": "DarkViolet",
  "9932CC": "DarkOrchid",
  "191970": "MidnightBlue",
  "663399": "RebeccaPurple",
  "696969": "DimGrey",
  "708090": "SlateGrey",
  "778899": "LightSlateGrey",
  "800000": "Maroon",
  "800080": "Purple",
  "808000": "Olive",
  "808080": "Grey",
  "A9A9A9": "DarkGrey",
  "A52A2A": "Brown",
  "A0522D": "Sienna",
  "ADD8E6": "LightBlue",
  "ADFF2F": "GreenYellow",
  "AFEEEE": "PaleTurquoise",
  "B0C4DE": "LightSteelBlue",
  "B0E0E6": "PowderBlue",
  "B8860B": "DarkGoldenRod",
  "B22222": "FireBrick",
  "BA55D3": "MediumOrchid",
  "BC8F8F": "RosyBrown",
  "BDB76B": "DarkKhaki",
  "C0C0C0": "Silver",
  "C71585": "MediumVioletRed",
  "CD5C5C": "IndianRed",
  "CD853F": "Peru",
  "D2B48C": "Tan",
  "D3D3D3": "LightGrey",
  "D8BFD8": "Thistle",
  "D2691E": "Chocolate",
  "DA70D6": "Orchid",
  "DAA520": "GoldenRod",
  "DB7093": "PaleVioletRed",
  "DC143C": "Crimson",
  "DCDCDC": "Gainsboro",
  "DDA0DD": "Plum",
  "DEB887": "BurlyWood",
  "E0FFFF": "LightCyan",
  "E6E6FA": "Lavender",
  "E9967A": "DarkSalmon",
  "EE82EE": "Violet",
  "EEE8AA": "PaleGoldenRod",
  "F0E68C": "Khaki",
  "F0F8FF": "AliceBlue",
  "F0FFF0": "HoneyDew",
  "F0FFFF": "Azure",
  "F4A460": "SandyBrown",
  "F5DEB3": "Wheat",
  "F5F5DC": "Beige",
  "F5F5F5": "WhiteSmoke",
  "F5FFFA": "MintCream",
  "F8F8FF": "GhostWhite",
  "F08080": "LightCoral",
  "FA8072": "Salmon",
  "FAEBD7": "AntiqueWhite",
  "FAF0E6": "Linen",
  "FAFAD2": "LightGoldenRodYellow",
  "FDF5E6": "OldLace",
  "FF00FF": "Magenta",
  "FF0000": "Red",
  "FF7F50": "Coral",
  "FF8C00": "DarkOrange",
  "FF69B4": "HotPink",
  "FF1493": "DeepPink",
  "FF4500": "OrangeRed",
  "FF6347": "Tomato",
  "FFA07A": "LightSalmon",
  "FFA500": "Orange",
  "FFB6C1": "LightPink",
  "FFC0CB": "Pink",
  "FFD700": "Gold",
  "FFDAB9": "PeachPuff",
  "FFDEAD": "NavajoWhite",
  "FFE4B5": "Moccasin",
  "FFE4C4": "Bisque",
  "FFE4E1": "MistyRose",
  "FFEBCD": "BlanchedAlmond",
  "FFEFD5": "PapayaWhip",
  "FFF0F5": "LavenderBlush",
  "FFF5EE": "SeaShell",
  "FFF8DC": "Cornsilk",
  "FFFACD": "LemonChiffon",
  "FFFAF0": "FloralWhite",
  "FFFAFA": "Snow",
  "FFFF00": "Yellow",
  "FFFFE0": "LightYellow",
  "FFFFF0": "Ivory",
  "FFFFFF": "White"
};
exports.hexColorsMap = hexColorsMap;
var colorsMap = {
  AliceBlue: "F0F8FF",
  AntiqueWhite: "FAEBD7",
  Aqua: "00FFFF",
  Aquamarine: "7FFFD4",
  Azure: "F0FFFF",
  Beige: "F5F5DC",
  Bisque: "FFE4C4",
  Black: "000000",
  BlanchedAlmond: "FFEBCD",
  Blue: "0000FF",
  BlueViolet: "8A2BE2",
  Brown: "A52A2A",
  BurlyWood: "DEB887",
  CadetBlue: "5F9EA0",
  Chartreuse: "7FFF00",
  Chocolate: "D2691E",
  Coral: "FF7F50",
  CornflowerBlue: "6495ED",
  Cornsilk: "FFF8DC",
  Crimson: "DC143C",
  Cyan: "00FFFF",
  DarkBlue: "00008B",
  DarkCyan: "008B8B",
  DarkGoldenRod: "B8860B",
  DarkGray: "A9A9A9",
  DarkGreen: "006400",
  DarkGrey: "A9A9A9",
  DarkKhaki: "BDB76B",
  DarkMagenta: "8B008B",
  DarkOliveGreen: "556B2F",
  DarkOrange: "FF8C00",
  DarkOrchid: "9932CC",
  DarkRed: "8B0000",
  DarkSalmon: "E9967A",
  DarkSeaGreen: "8FBC8F",
  DarkSlateBlue: "483D8B",
  DarkSlateGray: "2F4F4F",
  DarkSlateGrey: "2F4F4F",
  DarkTurquoise: "00CED1",
  DarkViolet: "9400D3",
  DeepPink: "FF1493",
  DeepSkyBlue: "00BFFF",
  DimGray: "696969",
  DimGrey: "696969",
  DodgerBlue: "1E90FF",
  FireBrick: "B22222",
  FloralWhite: "FFFAF0",
  ForestGreen: "228B22",
  Fuchsia: "FF00FF",
  Gainsboro: "DCDCDC",
  GhostWhite: "F8F8FF",
  Gold: "FFD700",
  GoldenRod: "DAA520",
  Gray: "808080",
  Green: "008000",
  GreenYellow: "ADFF2F",
  Grey: "808080",
  HoneyDew: "F0FFF0",
  HotPink: "FF69B4",
  IndianRed: "CD5C5C",
  Indigo: "4B0082",
  Ivory: "FFFFF0",
  Khaki: "F0E68C",
  Lavender: "E6E6FA",
  LavenderBlush: "FFF0F5",
  LawnGreen: "7CFC00",
  LemonChiffon: "FFFACD",
  LightBlue: "ADD8E6",
  LightCoral: "F08080",
  LightCyan: "E0FFFF",
  LightGoldenRodYellow: "FAFAD2",
  LightGray: "D3D3D3",
  LightGreen: "90EE90",
  LightGrey: "D3D3D3",
  LightPink: "FFB6C1",
  LightSalmon: "FFA07A",
  LightSeaGreen: "20B2AA",
  LightSkyBlue: "87CEFA",
  LightSlateGray: "778899",
  LightSlateGrey: "778899",
  LightSteelBlue: "B0C4DE",
  LightYellow: "FFFFE0",
  Lime: "00FF00",
  LimeGreen: "32CD32",
  Linen: "FAF0E6",
  Magenta: "FF00FF",
  Maroon: "800000",
  MediumAquaMarine: "66CDAA",
  MediumBlue: "0000CD",
  MediumOrchid: "BA55D3",
  MediumPurple: "9370DB",
  MediumSeaGreen: "3CB371",
  MediumSlateBlue: "7B68EE",
  MediumSpringGreen: "00FA9A",
  MediumTurquoise: "48D1CC",
  MediumVioletRed: "C71585",
  MidnightBlue: "191970",
  MintCream: "F5FFFA",
  MistyRose: "FFE4E1",
  Moccasin: "FFE4B5",
  NavajoWhite: "FFDEAD",
  Navy: "000080",
  OldLace: "FDF5E6",
  Olive: "808000",
  OliveDrab: "6B8E23",
  Orange: "FFA500",
  OrangeRed: "FF4500",
  Orchid: "DA70D6",
  PaleGoldenRod: "EEE8AA",
  PaleGreen: "98FB98",
  PaleTurquoise: "AFEEEE",
  PaleVioletRed: "DB7093",
  PapayaWhip: "FFEFD5",
  PeachPuff: "FFDAB9",
  Peru: "CD853F",
  Pink: "FFC0CB",
  Plum: "DDA0DD",
  PowderBlue: "B0E0E6",
  Purple: "800080",
  RebeccaPurple: "663399",
  Red: "FF0000",
  RosyBrown: "BC8F8F",
  RoyalBlue: "4169E1",
  SaddleBrown: "8B4513",
  Salmon: "FA8072",
  SandyBrown: "F4A460",
  SeaGreen: "2E8B57",
  SeaShell: "FFF5EE",
  Sienna: "A0522D",
  Silver: "C0C0C0",
  SkyBlue: "87CEEB",
  SlateBlue: "6A5ACD",
  SlateGray: "708090",
  SlateGrey: "708090",
  Snow: "FFFAFA",
  SpringGreen: "00FF7F",
  SteelBlue: "4682B4",
  Tan: "D2B48C",
  Teal: "008080",
  Thistle: "D8BFD8",
  Tomato: "FF6347",
  Turquoise: "40E0D0",
  Violet: "EE82EE",
  Wheat: "F5DEB3",
  White: "FFFFFF",
  WhiteSmoke: "F5F5F5",
  Yellow: "FFFF00",
  YellowGreen: "9ACD32"
};
var _default = colorsMap;
exports.default = _default;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _colors = _interopRequireWildcard(require("./constants/colors"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// https://vis4.net/chromajs
// https://tailwindcss.com/docs/customizing-colors
// https://www.w3schools.com/colors/colors_hex.asp
function pickRandomNumber() {
  var total = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 147;
  return Math.floor(Math.random() * total);
}

function pickRandomColor(number) {
  return _colors.cssColors[number];
}

var block1 = document.querySelector('#block-1');
var block2 = document.querySelector('#block-2');
var block3 = document.querySelector('#block-3');
var block4 = document.querySelector('#block-4');
var block5 = document.querySelector('#block-5');
var block6 = document.querySelector('#block-6');
var button = document.getElementById('button');

(function () {
  var color1 = pickRandomColor(pickRandomNumber());
  var color6 = pickRandomColor(pickRandomNumber());
  var scale = chroma.scale([color1, color6]).mode('lch').colors(6);

  var color2 = _colors.hexColorsMap[scale[1].toUpperCase().substring(1)];

  var color3 = _colors.hexColorsMap[scale[2]];
  var color4 = _colors.hexColorsMap[scale[3]];
  var color5 = _colors.hexColorsMap[scale[4]];
  block1.style.backgroundColor = "".concat(color1);
  block2.style.backgroundColor = scale[1];
  block3.style.backgroundColor = scale[2];
  block4.style.backgroundColor = scale[3];
  block5.style.backgroundColor = scale[4];
  block6.style.backgroundColor = "".concat(color6);
  block1.innerHTML = color1;
  block6.innerHTML = color6;
})();

button.addEventListener('click', function () {
  location.reload();
});
},{"./constants/colors":"constants/colors.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54939" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/public.e31bb0bc.js.map