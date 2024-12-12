var i = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    A.call(t, a) && p(e, a, t[a]);
  if (H)
    for (var a of H(t))
      V.call(t, a) && p(e, a, t[a]);
  return e;
};
var n = (e, t) => {
  var a = {};
  for (var o in e)
    A.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && H)
    for (var o of H(e))
      t.indexOf(o) < 0 && V.call(e, o) && (a[o] = e[o]);
  return a;
};
import m, { forwardRef as l } from "react";
import L from "../../lib/OptiBase.mjs";
const d = l((o, a) => {
  var r = o, { children: e } = r, t = n(r, ["children"]);
  return /* @__PURE__ */ m.createElement(L, c({ ref: a }, t), e, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M216,48V160H179.31a8,8,0,0,0-5.66,2.34l-19.31,19.32a8,8,0,0,1-5.66,2.34H107.31a8,8,0,0,1-5.66-2.34L82.34,162.34A8,8,0,0,0,76.68,160H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,16V152h-28.7A15.86,15.86,0,0,0,168,156.69L148.69,176H107.31L88,156.68A15.89,15.89,0,0,0,76.69,152H48V48Zm0,160H48V168H76.69L96,187.32A15.89,15.89,0,0,0,107.31,192h41.38A15.86,15.86,0,0,0,160,187.31L179.31,168H208v40Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
