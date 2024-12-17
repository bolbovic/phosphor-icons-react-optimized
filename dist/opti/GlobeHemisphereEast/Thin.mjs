var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var A = (a, e, l) => e in a ? c(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, p = (a, e) => {
  for (var l in e || (e = {}))
    o.call(e, l) && A(a, l, e[l]);
  if (m)
    for (var l of m(e))
      i.call(e, l) && A(a, l, e[l]);
  return a;
};
var L = (a, e) => {
  var l = {};
  for (var t in a)
    o.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && i.call(a, t) && (l[t] = a[t]);
  return l;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = f((t, l) => {
  var r = t, { children: a } = r, e = L(r, ["children"]);
  return /* @__PURE__ */ n.createElement(s, p({ ref: l }, e), a, /* @__PURE__ */ n.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,8a91.48,91.48,0,0,1,52,16.15V74a4,4,0,0,1-1,2.61l-22.17,25.76a4,4,0,0,1-2.49,1.35L122.9,108a3.94,3.94,0,0,1-2.88-.72l-.16-.11L100.13,94.22A12,12,0,0,0,83.2,97.33l-21,31.3a11.93,11.93,0,0,0-2,6.6L60,171.46a4,4,0,0,1-1.8,3.33l-6.65,4.36A92,92,0,0,1,128,36ZM56.32,185.6l6.29-4.13a12,12,0,0,0,5.41-10l.21-36.23a4,4,0,0,1,.67-2.2l20.95-31.3a4,4,0,0,1,5.67-1l.15.11,19.74,12.91a12,12,0,0,0,8.56,2.11l31.47-4.26a12,12,0,0,0,7.49-4.06L185.1,81.81A12,12,0,0,0,188,74V58.31A91.91,91.91,0,0,1,213.5,162l-20.57-18.82a12,12,0,0,0-12.7-2.22l-30.45,12.66a12.06,12.06,0,0,0-7.27,9.33l-2.38,16.19A12,12,0,0,0,149,192.46l21.45,5.63a4,4,0,0,1,1.82,1l5.94,6A91.85,91.85,0,0,1,56.32,185.6Zm128.43,14.76-6.86-6.88a12,12,0,0,0-5.45-3.13L151,184.72a4,4,0,0,1-3-4.45l2.39-16.2a4,4,0,0,1,2.42-3.11l30.45-12.65a4,4,0,0,1,4.24.74L210,169.62A92.43,92.43,0,0,1,184.75,200.36Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
