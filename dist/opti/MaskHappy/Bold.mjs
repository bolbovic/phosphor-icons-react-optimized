var C = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var s = (a, t, e) => t in a ? C(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && s(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && s(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    c.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import A, { forwardRef as Z } from "react";
import f from "../../lib/OptiBase.mjs";
const i = Z((m, e) => {
  var r = m, { children: a } = r, t = l(r, ["children"]);
  return /* @__PURE__ */ A.createElement(f, d({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M219.29,31.5a20,20,0,0,0-18.52-2.14C187,34.72,159.17,43.7,128,43.7s-59-9-72.77-14.34A20,20,0,0,0,28,48v55.77c0,36.64,9.9,71.25,27.88,97.45C74.81,228.81,100.42,244,128,244s53.19-15.19,72.12-42.76C218.1,175,228,140.43,228,103.79V48A20,20,0,0,0,219.29,31.5ZM204,103.79c0,31.84-8.41,61.63-23.67,83.87C166,208.51,147.43,220,128,220s-38-11.49-52.33-32.34C60.41,165.42,52,135.63,52,103.79v-50c16.59,5.95,44.67,13.94,76,13.94s59.41-8,76-13.94Zm-38.67,62.88a12,12,0,0,1-1.79,16.87,56.92,56.92,0,0,1-71.08,0,12,12,0,0,1,15.08-18.67,32.92,32.92,0,0,0,40.92,0A12,12,0,0,1,165.33,166.67Zm-27.44-35.51a12,12,0,0,1,3.61-16.58,41.66,41.66,0,0,1,39.23-3.06,12,12,0,1,1-9.46,22.06A19.53,19.53,0,0,0,164,132a19.14,19.14,0,0,0-9.52,2.77,12,12,0,0,1-16.59-3.61ZM92,132a19.44,19.44,0,0,0-7.27,1.59,12,12,0,0,1-9.46-22.06,41.61,41.61,0,0,1,39.23,3,12,12,0,1,1-13,20.19A19.21,19.21,0,0,0,92,132Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};