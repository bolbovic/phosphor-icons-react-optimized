var f = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var r = (a, l, e) => l in a ? f(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, p = (a, l) => {
  for (var e in l || (l = {}))
    c.call(l, e) && r(a, e, l[e]);
  if (t)
    for (var e of t(l))
      Z.call(l, e) && r(a, e, l[e]);
  return a;
};
var H = (a, l) => {
  var e = {};
  for (var m in a)
    c.call(a, m) && l.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && t)
    for (var m of t(a))
      l.indexOf(m) < 0 && Z.call(a, m) && (e[m] = a[m]);
  return e;
};
import d, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((m, e) => {
  var o = m, { children: a } = o, l = H(o, ["children"]);
  return /* @__PURE__ */ d.createElement(s, p({ ref: e }, l), a, /* @__PURE__ */ d.createElement("path", { d: "M240,148H203.89c.07-1.33.11-2.66.11-4a76,76,0,0,0-152,0c0,1.34,0,2.67.11,4H16a12,12,0,0,0,0,24H240a12,12,0,0,0,0-24ZM76,144a52,52,0,0,1,104,0c0,1.34-.07,2.67-.17,4H76.17C76.07,146.67,76,145.34,76,144Zm144,56a12,12,0,0,1-12,12H48a12,12,0,0,1,0-24H208A12,12,0,0,1,220,200ZM12.62,92.21a12,12,0,0,1,15.17-7.59l12,4a12,12,0,1,1-7.58,22.77l-12-4A12,12,0,0,1,12.62,92.21Zm56-48.41a12,12,0,1,1,22.76-7.59l4,12A12,12,0,1,1,72.62,55.8Zm140,60a12,12,0,0,1,7.59-15.18l12-4a12,12,0,0,1,7.58,22.77l-12,4a12,12,0,0,1-15.17-7.59Zm-48-55.59,4-12a12,12,0,1,1,22.76,7.59l-4,12a12,12,0,1,1-22.76-7.59Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
