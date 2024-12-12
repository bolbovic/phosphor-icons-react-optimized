var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, e, l) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, d = (a, e) => {
  for (var l in e || (e = {}))
    A.call(e, l) && r(a, l, e[l]);
  if (m)
    for (var l of m(e))
      p.call(e, l) && r(a, l, e[l]);
  return a;
};
var Z = (a, e) => {
  var l = {};
  for (var t in a)
    A.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && p.call(a, t) && (l[t] = a[t]);
  return l;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const L = i((t, l) => {
  var o = t, { children: a } = o, e = Z(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: l }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm84,108a83.64,83.64,0,0,1-4.47,27L167,130a19.65,19.65,0,0,0-7.8-2.78l-22.82-3.08A20.14,20.14,0,0,0,117.72,132h-4.07l-2.71-5.6a19.88,19.88,0,0,0-13.8-10.84L94.46,115l4-7h14.39a20,20,0,0,0,9.66-2.49l12.25-6.76a20.57,20.57,0,0,0,3.74-2.68l26.92-24.33A20,20,0,0,0,172,56.49,84,84,0,0,1,212,128ZM140.76,45l6.2,11.1L122.75,78l-10.93,6H96.14A20.05,20.05,0,0,0,78.78,94.06l-4.49,7.85L67.68,84.28l9.91-23.42A83.91,83.91,0,0,1,140.76,45ZM44,128a83.52,83.52,0,0,1,4.4-26.77l7.74,20.65a19.89,19.89,0,0,0,14.52,12.53l19.53,4.2,3,6.1a20.11,20.11,0,0,0,13.55,10.77l-5,11.12a20,20,0,0,0,3.58,21.71l.21.22,18.16,18.7-.89,4.59A84.09,84.09,0,0,1,44,128Zm103.65,81.66a20.11,20.11,0,0,0-5-17.3l-.21-.22-17.72-18.25,11.37-25.52,19,2.56,41.43,25.48A84.2,84.2,0,0,1,147.65,209.66Z" }));
});
L.displayName = "Bold";
export {
  L as Bold
};
