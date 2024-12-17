var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var r = (a, e, l) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, L = (a, e) => {
  for (var l in e || (e = {}))
    p.call(e, l) && r(a, l, e[l]);
  if (m)
    for (var l of m(e))
      d.call(e, l) && r(a, l, e[l]);
  return a;
};
var Z = (a, e) => {
  var l = {};
  for (var t in a)
    p.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && d.call(a, t) && (l[t] = a[t]);
  return l;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((t, l) => {
  var o = t, { children: a } = o, e = Z(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, L({ ref: l }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M243.16,68.85a17.4,17.4,0,0,0-15.26-12l-34.52-2.72L180.12,22.66a17.52,17.52,0,0,0-32.24,0L134.62,54.09l-34.51,2.72a17.39,17.39,0,0,0-9.93,30.62l26.17,22.1-8,33a17.46,17.46,0,0,0,26,19L164,143.66l29.59,17.81a17.46,17.46,0,0,0,26-19l-8-33,26.17-22.1A17.3,17.3,0,0,0,243.16,68.85ZM190.5,96a12,12,0,0,0-3.92,12l6,24.91-22.41-13.5a12.06,12.06,0,0,0-12.38,0l-22.41,13.5,6-24.91a12,12,0,0,0-3.93-12L118,79.48l25.83-2a12,12,0,0,0,10.11-7.3L164,46.2l10.11,23.94a12,12,0,0,0,10.11,7.3l25.82,2Zm-158,88.52a12,12,0,0,1-17-17l51.76-51.75a12,12,0,0,1,17,17Zm63.59-8.57a12,12,0,0,1,0,17l-47.59,47.6a12,12,0,0,1-17-17l47.6-47.59A12,12,0,0,1,96.08,175.92Zm62.44,9.56a12,12,0,0,1,0,17l-38,38a12,12,0,0,1-17-17l38-38A12,12,0,0,1,158.52,185.48Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
