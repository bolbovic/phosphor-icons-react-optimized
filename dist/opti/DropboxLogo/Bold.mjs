var f = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, e, l) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, L = (a, e) => {
  for (var l in e || (e = {}))
    Z.call(e, l) && r(a, l, e[l]);
  if (t)
    for (var l of t(e))
      p.call(e, l) && r(a, l, e[l]);
  return a;
};
var d = (a, e) => {
  var l = {};
  for (var m in a)
    Z.call(a, m) && e.indexOf(m) < 0 && (l[m] = a[m]);
  if (a != null && t)
    for (var m of t(a))
      e.indexOf(m) < 0 && p.call(a, m) && (l[m] = a[m]);
  return l;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((m, l) => {
  var o = m, { children: a } = o, e = d(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, L({ ref: l }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M238.83,146.13,201.08,120l37.75-26.13a12,12,0,0,0,0-19.74l-52-36a12,12,0,0,0-13.66,0L128,69.41,82.83,38.13a12,12,0,0,0-13.66,0l-52,36a12,12,0,0,0,0,19.74L54.92,120,17.17,146.13a12,12,0,0,0,0,19.74l52,36a12,12,0,0,0,13.66,0L128,170.59l45.17,31.28a12,12,0,0,0,13.66,0l52-36a12,12,0,0,0,0-19.74ZM128,141.41,97.08,120,128,98.59,158.92,120ZM180,62.6,210.92,84,180,105.4,149.08,84Zm-104,0L106.92,84,76,105.4,45.08,84Zm0,114.8L45.08,156,76,134.6,106.92,156Zm104,0L149.08,156,180,134.6,210.92,156Zm-25.27,32.09a12,12,0,0,1-3,16.7l-16.86,11.68a12,12,0,0,1-13.66,0l-16.86-11.68A12,12,0,1,1,118,206.46l10,6.94,10-6.94A12,12,0,0,1,154.73,209.49Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
