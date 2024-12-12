var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var o in a)
    l.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && p.call(a, o) && (e[o] = a[o]);
  return e;
};
import i, { forwardRef as A } from "react";
import h from "../../lib/OptiBase.mjs";
const n = A((o, e) => {
  var m = o, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(h, d({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M209.17,102.54,187.39,28.61A12,12,0,0,0,175.89,20H80.11a12,12,0,0,0-11.5,8.61L46.83,102.54a67.45,67.45,0,0,0,18.53,68.72A91.32,91.32,0,0,0,116,195.2V228H88a12,12,0,0,0,0,24h80a12,12,0,0,0,0-24H140V195.2a91.32,91.32,0,0,0,50.65-23.94A67.45,67.45,0,0,0,209.17,102.54ZM89.08,44h77.84l18.38,62.41c-10.88,2.8-28.05,3-51.88-9.12C110.68,85.78,91.92,83,77.24,84.22ZM128,172a67.5,67.5,0,0,1-46.26-18.27,43.55,43.55,0,0,1-12-43.89c18.44-5.33,38.64,1.66,52.87,8.87,11.55,5.85,30.18,13.28,50.26,13.28a74.15,74.15,0,0,0,14.29-1.35,43.2,43.2,0,0,1-12.87,23.09A67.5,67.5,0,0,1,128,172Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
