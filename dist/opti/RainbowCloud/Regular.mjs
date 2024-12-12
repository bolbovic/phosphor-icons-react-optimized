var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && c(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import A, { forwardRef as d } from "react";
import i from "../../lib/OptiBase.mjs";
const R = d((r, e) => {
  var o = r, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ A.createElement(i, s({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M200,112a48.18,48.18,0,0,0-44.66,30.4,31,31,0,0,0-3.34-.18c-17.65,0-32,14.76-32,32.89S134.35,208,152,208h48a48,48,0,0,0,0-96Zm0,80H152c-8.82,0-16-7.58-16-16.89s7.18-16.89,16-16.89a15,15,0,0,1,5.78,1.14,8,8,0,0,0,10.87-5.81A32,32,0,1,1,200,192ZM24,160v16a8,8,0,0,1-16,0V160A104,104,0,0,1,184.5,85.44a8,8,0,0,1-11.15,11.47A88,88,0,0,0,24,160Zm32,0v16a8,8,0,0,1-16,0V160a72,72,0,0,1,114.6-58,8,8,0,1,1-9.47,12.89A56,56,0,0,0,56,160Zm61.57-23.35A24,24,0,0,0,88,160v16a8,8,0,0,1-16,0V160a40,40,0,0,1,49.27-38.92,8,8,0,1,1-3.7,15.57Z" }));
});
R.displayName = "Regular";
export {
  R as Regular,
  R as default
};
