var s = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, l, e) => l in a ? s(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, c = (a, l) => {
  for (var e in l || (l = {}))
    o.call(l, e) && m(a, e, l[e]);
  if (t)
    for (var e of t(l))
      p.call(l, e) && m(a, e, l[e]);
  return a;
};
var f = (a, l) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && l.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      l.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import i, { forwardRef as R } from "react";
import d from "../../lib/OptiBase.mjs";
const n = R((r, e) => {
  var L = r, { children: a } = L, l = f(L, ["children"]);
  return /* @__PURE__ */ i.createElement(d, c({ ref: e }, l), a, /* @__PURE__ */ i.createElement("path", { d: "M180.8,169.6,125.33,128l23.47-17.6a8,8,0,0,0-9.6-12.8L120,112V48l19.2,14.4a8,8,0,1,0,9.6-12.8l-32-24A8,8,0,0,0,104,32v80L52.8,73.6a8,8,0,0,0-9.6,12.8L98.67,128,43.2,169.6a8,8,0,1,0,9.6,12.8L104,144v80a8,8,0,0,0,12.8,6.4l64-48a8,8,0,0,0,0-12.8ZM120,208V144l42.67,32ZM237.66,98.34a8,8,0,0,1-11.32,11.32L208,91.31l-18.34,18.35a8,8,0,0,1-11.32-11.32L196.69,80,178.34,61.66a8,8,0,0,1,11.32-11.32L208,68.69l18.34-18.35a8,8,0,0,1,11.32,11.32L219.31,80Z" }));
});
n.displayName = "Regular";
export {
  n as Regular
};