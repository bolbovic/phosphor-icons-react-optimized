var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && A(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && A(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var o in a)
    c.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && p.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as s } from "react";
import C from "../../lib/OptiBase.mjs";
const h = s((o, e) => {
  var m = o, { children: a } = m, t = l(m, ["children"]);
  return /* @__PURE__ */ f.createElement(C, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M227,168a12,12,0,0,0-4.21-5.09C207.25,152.22,204,133.68,204,120c0-16.17,12.68-30.6,20.25-37.76a12,12,0,0,0,0-17.43C210.89,52.17,188.81,44,168,44a76.29,76.29,0,0,0-40,11.37,75.59,75.59,0,0,0-93.58,11A78.64,78.64,0,0,0,12,123.51,131,131,0,0,0,53.43,216,43.81,43.81,0,0,0,83.6,228h87.69a43.87,43.87,0,0,0,32.05-13.85,127.63,127.63,0,0,0,18.4-25.39c1.57-2.88,3-5.71,4.14-8.41C227.47,176.67,229.12,172.87,227,168Zm-41.23,29.82A19.78,19.78,0,0,1,171.29,204H83.6a19.85,19.85,0,0,1-13.7-5.42A107.18,107.18,0,0,1,36,122.88,54.49,54.49,0,0,1,51.5,83.28,50.86,50.86,0,0,1,88,68h.72A51.5,51.5,0,0,1,120.48,79.4a12,12,0,0,0,15,0A51.41,51.41,0,0,1,168,68a67.24,67.24,0,0,1,29.88,7.4C186.26,89.66,180,105.13,180,120c0,23.33,7.47,42.89,21.25,56.19A103.3,103.3,0,0,1,185.76,197.81ZM128.75,13A43.83,43.83,0,0,1,142.17,1.51a12,12,0,0,1,11.64,21,19.84,19.84,0,0,0-6.11,5.24A12,12,0,0,1,128.75,13Z" }));
});
h.displayName = "Bold";
export {
  h as Bold
};