var Z = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (e, s, t) => s in e ? Z(e, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[s] = t, n = (e, s) => {
  for (var t in s || (s = {}))
    m.call(s, t) && r(e, t, s[t]);
  if (o)
    for (var t of o(s))
      p.call(s, t) && r(e, t, s[t]);
  return e;
};
var i = (e, s) => {
  var t = {};
  for (var a in e)
    m.call(e, a) && s.indexOf(a) < 0 && (t[a] = e[a]);
  if (e != null && o)
    for (var a of o(e))
      s.indexOf(a) < 0 && p.call(e, a) && (t[a] = e[a]);
  return t;
};
import c, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const l = d((a, t) => {
  var C = a, { children: e } = C, s = i(C, ["children"]);
  return /* @__PURE__ */ c.createElement(f, n({ ref: t }, s), e, /* @__PURE__ */ c.createElement(
    "path",
    {
      d: "M216,80c0,26.51-39.4,48-88,48S40,106.51,40,80s39.4-48,88-48S216,53.49,216,80Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ c.createElement("path", { d: "M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z" }));
});
l.displayName = "Duotone";
export {
  l as Duotone
};
