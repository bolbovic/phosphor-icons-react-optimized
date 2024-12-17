var Z = Object.defineProperty;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var m = (e, t, c) => t in e ? Z(e, t, { enumerable: !0, configurable: !0, writable: !0, value: c }) : e[t] = c, o = (e, t) => {
  for (var c in t || (t = {}))
    s.call(t, c) && m(e, c, t[c]);
  if (a)
    for (var c of a(t))
      h.call(t, c) && m(e, c, t[c]);
  return e;
};
var i = (e, t) => {
  var c = {};
  for (var C in e)
    s.call(e, C) && t.indexOf(C) < 0 && (c[C] = e[C]);
  if (e != null && a)
    for (var C of a(e))
      t.indexOf(C) < 0 && h.call(e, C) && (c[C] = e[C]);
  return c;
};
import p, { forwardRef as n } from "react";
import M from "../../lib/OptiBase.mjs";
const f = n((C, c) => {
  var r = C, { children: e } = r, t = i(r, ["children"]);
  return /* @__PURE__ */ p.createElement(M, o({ ref: c }, t), e, /* @__PURE__ */ p.createElement("path", { d: "M195.05,58.1C183.73,38.69,168.44,28,152,28H104C87.56,28,72.27,38.69,61,58.1,50,76.84,44,101.66,44,128s6,51.16,17,69.9C72.27,217.31,87.56,228,104,228h48c16.44,0,31.73-10.69,43.05-30.1C206,179.16,212,154.34,212,128S206,76.84,195.05,58.1ZM191.27,188H152.1c7.24-16.14,11.37-35.53,11.84-56h40C203.44,152.77,199,172.28,191.27,188Zm-27.33-64c-.47-20.47-4.6-39.86-11.84-56h39.17c7.74,15.72,12.17,35.23,12.67,56ZM152,36c12.89,0,25.19,8.51,34.84,24H148.11c-.35-.63-.7-1.28-1.06-1.9-5.58-9.56-12.12-17-19.29-22.1ZM67.86,193.87C57.63,176.34,52,153,52,128s5.63-48.34,15.86-65.87C77.69,45.28,90.52,36,104,36s26.31,9.28,36.14,26.13C150.37,79.66,156,103.05,156,128s-5.63,48.34-15.86,65.87C130.31,210.72,117.48,220,104,220S77.69,210.72,67.86,193.87ZM152,220H127.76c7.17-5.09,13.71-12.54,19.29-22.1.36-.62.71-1.27,1.06-1.9h38.73C177.19,211.49,164.89,220,152,220Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
