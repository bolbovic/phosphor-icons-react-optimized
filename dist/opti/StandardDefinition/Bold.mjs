var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      H.call(t, e) && c(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && H.call(a, o) && (e[o] = a[o]);
  return e;
};
import s, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const M = f((o, e) => {
  var m = o, { children: a } = m, t = l(m, ["children"]);
  return /* @__PURE__ */ s.createElement(i, d({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M172,68H148a12,12,0,0,0-12,12v96a12,12,0,0,0,12,12h24a60,60,0,0,0,0-120Zm0,96H160V92h12a36,36,0,0,1,0,72ZM20,44A12,12,0,0,1,32,32H224a12,12,0,0,1,0,24H32A12,12,0,0,1,20,44ZM236,212a12,12,0,0,1-12,12H32a12,12,0,0,1,0-24H224A12,12,0,0,1,236,212ZM96,152c0-6.37-6.29-9.32-24-14.42-16.14-4.65-38.23-11-38.23-33.58,0-20.52,18.15-36,42.22-36,17.24,0,32.06,8.14,38.69,21.24a12,12,0,1,1-21.41,10.84C90.8,95.17,84,92,76,92c-10.22,0-18.22,5.27-18.22,12,0,1.09,0,2.21,3.28,4.17,4.18,2.48,11,4.45,17.6,6.35,8.75,2.52,17.8,5.13,25.38,9.86,13.19,8.23,16,19.56,16,27.62,0,20.19-19.33,36-44,36s-44-15.81-44-36a12,12,0,0,1,24,0c0,6.87,10.56,12,20,12S96,158.87,96,152Z" }));
});
M.displayName = "Bold";
export {
  M as Bold
};
