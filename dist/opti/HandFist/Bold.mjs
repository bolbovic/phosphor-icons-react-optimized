var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    d.call(t, e) && p(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && p(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    d.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && l.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const M = s((o, e) => {
  var m = o, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(A, Z({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M200,76H188V64a36,36,0,0,0-60-26.8A36,36,0,0,0,69.27,54.54,36,36,0,0,0,20,88v40a108,108,0,0,0,216,0V112A36,36,0,0,0,200,76ZM140,64a12,12,0,0,1,24,0V76H140ZM92,64a12,12,0,0,1,24,0v40a12,12,0,0,1-24,0ZM44,88a12,12,0,0,1,24,0v16a12,12,0,0,1-24,0Zm168,40A84,84,0,0,1,44.61,138.15,35.93,35.93,0,0,0,80,130.8a35.89,35.89,0,0,0,43.65,3.34A36.23,36.23,0,0,0,130,140.5,51.82,51.82,0,0,0,116,176a12,12,0,0,0,24,0,28,28,0,0,1,28-28,12,12,0,0,0,0-24H152a12,12,0,0,1-12-12V100h60a12,12,0,0,1,12,12Z" }));
});
M.displayName = "Bold";
export {
  M as Bold
};
