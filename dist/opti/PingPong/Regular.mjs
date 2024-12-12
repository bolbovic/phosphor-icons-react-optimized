var s = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? s(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, c = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && o(a, e, l[e]);
  if (t)
    for (var e of t(l))
      A.call(l, e) && o(a, e, l[e]);
  return a;
};
var f = (a, l) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && l.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      l.indexOf(r) < 0 && A.call(a, r) && (e[r] = a[r]);
  return e;
};
import i, { forwardRef as R } from "react";
import d from "../../lib/OptiBase.mjs";
const n = R((r, e) => {
  var m = r, { children: a } = m, l = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(d, c({ ref: e }, l), a, /* @__PURE__ */ i.createElement("path", { d: "M240,196a16,16,0,0,0-6.65-11.7l-38-27.15,17-16.95a39.67,39.67,0,0,0,11-35.79,99.52,99.52,0,0,0-35.4-57.89A101.93,101.93,0,0,0,122.58,24,100.29,100.29,0,0,0,24,122.58a102.12,102.12,0,0,0,22.55,65.28,99.52,99.52,0,0,0,57.89,35.4,39.68,39.68,0,0,0,35.79-11l16.95-17,27.15,38A16,16,0,0,0,196,240c.44,0,.88.05,1.32.05a16,16,0,0,0,11.31-4.69l26.64-26.64A16,16,0,0,0,240,196ZM59,177.83a86.09,86.09,0,0,1-19-55A84.27,84.27,0,0,1,122.8,40a86.28,86.28,0,0,1,55,19A85.08,85.08,0,0,1,196.58,80.1L80.1,196.58A85.08,85.08,0,0,1,59,177.83ZM197.35,224l-32.63-45.69a8,8,0,0,0-5.85-3.32q-.33,0-.66,0a8,8,0,0,0-5.66,2.34l-23.63,23.63a23.68,23.68,0,0,1-21.36,6.63,80.3,80.3,0,0,1-12.3-3.5l108.8-108.8a80.63,80.63,0,0,1,3.5,12.3,23.67,23.67,0,0,1-6.63,21.36L177.3,152.55a8,8,0,0,0,1,12.17L224,197.35Z" }));
});
n.displayName = "Regular";
export {
  n as Regular
};
