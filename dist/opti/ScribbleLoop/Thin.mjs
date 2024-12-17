var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, C = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var c in a)
    i.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && r)
    for (var c of r(a))
      t.indexOf(c) < 0 && p.call(a, c) && (e[c] = a[c]);
  return e;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((c, e) => {
  var m = c, { children: a } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ f.createElement(h, C({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M251,157.32c-1.32-1.46-24.47-26.63-61.79-40.43-1.26-18.56-7.78-35.45-18.66-48.13C156.62,52.56,136.38,44,112,44,62.51,44,30.1,88.58,28.74,90.48a4,4,0,0,0,6.51,4.65C35.56,94.7,66.68,52,112,52c22,0,40.11,7.6,52.45,22,9.11,10.61,14.81,24.62,16.46,40.13A137.84,137.84,0,0,0,140.6,108c-25.1,0-46.09,6.48-60.69,18.75C67.26,137.39,60,152.15,60,167.25a43.64,43.64,0,0,0,12.69,31.22C81.59,207.32,94,212,108.6,212c51.63,0,79.87-44.08,80.78-86.32,34.07,13.58,55.36,36.67,55.65,37a4,4,0,1,0,5.94-5.36Zm-88.4,21.47c-9.37,11.5-26.34,25.21-54,25.21C80.71,204,68,185,68,167.25,68,142.57,90.72,116,140.6,116a129.23,129.23,0,0,1,40.8,6.77v.81C181.4,144,174.54,164.1,162.57,178.79Z" }));
});
l.displayName = "Thin";
export {
  l as Thin
};
