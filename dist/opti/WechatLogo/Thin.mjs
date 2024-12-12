var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? c(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    A.call(m, e) && o(a, e, m[e]);
  if (r)
    for (var e of r(m))
      i.call(m, e) && o(a, e, m[e]);
  return a;
};
var n = (a, m) => {
  var e = {};
  for (var t in a)
    A.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((t, e) => {
  var l = t, { children: a } = l, m = n(l, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, p({ ref: e }, m), a, /* @__PURE__ */ Z.createElement("path", { d: "M140,140a8,8,0,1,1-8-8A8,8,0,0,1,140,140Zm48-8a8,8,0,1,0,8,8A8,8,0,0,0,188,132Zm47.5,80.6a12,12,0,0,1-14.9,14.9l-26.21-7.71A76,76,0,0,1,89.24,179.68a75,75,0,0,1-27.63-7.89L35.4,179.5a12,12,0,0,1-14.9-14.9l7.71-26.21A76,76,0,1,1,166.79,76.32a76,76,0,0,1,61,110.07Zm-149-41.28A76,76,0,0,1,158,76.05a68,68,0,1,0-122,60,4.07,4.07,0,0,1,.31,3l-8.17,27.76a4,4,0,0,0,5,5l27.76-8.17a4.07,4.07,0,0,1,3,.31A66.93,66.93,0,0,0,86.5,171.32Zm141.33,43.54-8.17-27.76a4.07,4.07,0,0,1,.31-3A68,68,0,1,0,192.08,212a4.07,4.07,0,0,1,1.89-.47,4,4,0,0,1,1.13.16l27.76,8.17a4,4,0,0,0,5-5Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
