var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const d = s((l, e) => {
  var r = l, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ c.createElement(A, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M168,20a68.08,68.08,0,0,0-68,68,67.19,67.19,0,0,0,.82,10.49L30.34,194.59a11.94,11.94,0,0,0,1.2,15.58l14.29,14.3a11.95,11.95,0,0,0,15.58,1.19l96.11-70.48A68,68,0,1,0,168,20Zm60,68a59.7,59.7,0,0,1-14.87,39.47L128.54,42.87A59.94,59.94,0,0,1,228,88ZM56.68,219.21a4,4,0,0,1-5.2-.4L37.19,204.52a4,4,0,0,1-.4-5.2l66.46-90.62a68.31,68.31,0,0,0,44.05,44.05ZM108,88a59.77,59.77,0,0,1,14.87-39.47l84.6,84.6A60,60,0,0,1,108,88Zm-1.17,61.17a4,4,0,0,1,0,5.65l-8,8a4,4,0,1,1-5.65-5.65l8-8A4,4,0,0,1,106.84,149.16Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
