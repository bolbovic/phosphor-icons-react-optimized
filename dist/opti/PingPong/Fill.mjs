var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? d(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, c = (a, l) => {
  for (var e in l || (l = {}))
    i.call(l, e) && o(a, e, l[e]);
  if (r)
    for (var e of r(l))
      p.call(l, e) && o(a, e, l[e]);
  return a;
};
var f = (a, l) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import s, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const E = n((t, e) => {
  var m = t, { children: a } = m, l = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(A, c({ ref: e }, l), a, /* @__PURE__ */ s.createElement("path", { d: "M240,196a16,16,0,0,0-6.65-11.7l-38-27.15,17-16.95a39.67,39.67,0,0,0,11-35.79,99.52,99.52,0,0,0-35.4-57.89A101.93,101.93,0,0,0,122.58,24,100.29,100.29,0,0,0,24,122.58a102.12,102.12,0,0,0,22.55,65.28,99.52,99.52,0,0,0,57.89,35.4,39.68,39.68,0,0,0,35.79-11l16.95-17,27.15,38A16,16,0,0,0,196,240c.44,0,.88.05,1.32.05a16,16,0,0,0,11.31-4.69l26.64-26.64A16,16,0,0,0,240,196Zm-42.6,28-32.63-45.69a8,8,0,0,0-5.85-3.32q-.33,0-.66,0a8,8,0,0,0-5.66,2.34l-23.63,23.63a23.68,23.68,0,0,1-21.36,6.63,80.3,80.3,0,0,1-12.3-3.5l108.8-108.8a80.63,80.63,0,0,1,3.5,12.3,23.67,23.67,0,0,1-6.63,21.36L177.3,152.55a8,8,0,0,0,1,12.17L224,197.36Z" }));
});
E.displayName = "Fill";
export {
  E as Fill
};
