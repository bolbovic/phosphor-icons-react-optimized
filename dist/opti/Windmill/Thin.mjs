var A = Object.defineProperty;
var L = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var r = (a, e, l) => e in a ? A(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, p = (a, e) => {
  for (var l in e || (e = {}))
    o.call(e, l) && r(a, l, e[l]);
  if (L)
    for (var l of L(e))
      i.call(e, l) && r(a, l, e[l]);
  return a;
};
var Z = (a, e) => {
  var l = {};
  for (var t in a)
    o.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && L)
    for (var t of L(a))
      e.indexOf(t) < 0 && i.call(a, t) && (l[t] = a[t]);
  return l;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((t, l) => {
  var m = t, { children: a } = m, e = Z(m, ["children"]);
  return /* @__PURE__ */ n.createElement(f, p({ ref: l }, e), a, /* @__PURE__ */ n.createElement("path", { d: "M224,228H179.47l-8-55.78,10.4,6.12a12,12,0,0,0,16.45-4.25l12-20.34a12,12,0,0,0-4.26-16.43l-38.46-22.64L210.34,42.1a12,12,0,0,0-4.25-16.44l-20.34-12a12,12,0,0,0-16.44,4.25L146.68,56.38,74.1,13.66a12,12,0,0,0-16.45,4.25l-12,20.34a12,12,0,0,0,4.26,16.44L88.38,77.33,45.66,149.91a12,12,0,0,0,4.25,16.44l20.34,12a12,12,0,0,0,13.5-.91L76.53,228H32a4,4,0,0,0,0,8H224a4,4,0,0,0,0-8Zm-20.13-81.34a3.93,3.93,0,0,1-.43,3l-12,20.34a4,4,0,0,1-5.49,1.42l-72.58-42.72,16-27.25L202,144.21A4,4,0,0,1,203.87,146.66ZM176.21,22a4,4,0,0,1,5.48-1.42l20.34,12A4,4,0,0,1,203.44,38l-42.71,72.58-27.25-16ZM52.13,45.35a3.92,3.92,0,0,1,.43-3L64.55,22A4,4,0,0,1,70,20.56l72.58,42.72-16,27.25L54,47.79A4,4,0,0,1,52.13,45.35ZM77.34,171.87a4,4,0,0,1-3-.42L54,159.46a4,4,0,0,1-1.41-5.5L95.27,81.38l27.25,16L79.79,170A4,4,0,0,1,77.34,171.87Zm16.78-10.41,15.2-25.84L162.68,167l8.71,61H84.61Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
