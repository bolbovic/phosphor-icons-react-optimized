var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, Z = (e, t) => {
  for (var a in t || (t = {}))
    n.call(t, a) && p(e, a, t[a]);
  if (o)
    for (var a of o(t))
      i.call(t, a) && p(e, a, t[a]);
  return e;
};
var d = (e, t) => {
  var a = {};
  for (var c in e)
    n.call(e, c) && t.indexOf(c) < 0 && (a[c] = e[c]);
  if (e != null && o)
    for (var c of o(e))
      t.indexOf(c) < 0 && i.call(e, c) && (a[c] = e[c]);
  return a;
};
import m, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const A = l((c, a) => {
  var r = c, { children: e } = r, t = d(r, ["children"]);
  return /* @__PURE__ */ m.createElement(s, Z({ ref: a }, t), e, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M202.43,151.85c-21.26,28.17-62.09,48.24-138.35,40C55.89,115.64,76,74.82,104.15,53.57A104,104,0,0,0,202.43,151.85Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M168,76a12,12,0,1,1-12-12A12,12,0,0,1,168,76Zm42,79.08c-15.08,20.84-37.53,34.88-66.7,41.74-20.08,4.72-43.54,6-70.12,3.93q2.4,17.82,6.72,37.54a8,8,0,0,1-6.1,9.52,7.81,7.81,0,0,1-1.72.19,8,8,0,0,1-7.81-6.29q-4.89-22.36-7.41-42.62-20.22-2.51-42.58-7.41a8,8,0,0,1,3.43-15.63q19.7,4.32,37.5,6.73c-2.09-26.56-.78-50,3.93-70.06C66,83.55,80.05,61.1,100.88,46,115,35.76,140.12,23.64,179.27,24c21.19.21,40.83,4.33,43.81,6.08a8,8,0,0,1,2.83,2.83c1.75,3,5.87,22.59,6.08,43.78C232.21,98.31,228.57,129.44,210,155.08Zm-23.76,2.8A112.07,112.07,0,0,1,98.12,69.74C75.64,94,66.7,132.47,71.36,184.6,123.51,189.28,162,180.35,186.25,157.88ZM212.44,43.56a175.75,175.75,0,0,0-39.22-3.51c-24.34.64-44.71,6.49-60.76,17.39a96,96,0,0,0,86.09,86.1c10.91-16,16.76-36.42,17.4-60.76A175.82,175.82,0,0,0,212.44,43.56Z" }));
});
A.displayName = "Duotone";
export {
  A as Duotone
};