var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var L = (a, l, e) => l in a ? c(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, p = (a, l) => {
  for (var e in l || (l = {}))
    o.call(l, e) && L(a, e, l[e]);
  if (m)
    for (var e of m(l))
      i.call(l, e) && L(a, e, l[e]);
  return a;
};
var n = (a, l) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      l.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import H, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((t, e) => {
  var r = t, { children: a } = r, l = n(r, ["children"]);
  return /* @__PURE__ */ H.createElement(h, p({ ref: e }, l), a, /* @__PURE__ */ H.createElement("path", { d: "M216,84H128a4,4,0,0,1-2.4-.8L95.73,60.8a4,4,0,0,0-2.4-.8H40a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4h80a4,4,0,0,1,0,8H40a12,12,0,0,1-12-12V64A12,12,0,0,1,40,52H93.33a12.05,12.05,0,0,1,7.2,2.4L129.33,76H216a12,12,0,0,1,12,12v32a4,4,0,0,1-8,0V88A4,4,0,0,0,216,84Zm18.55,80.7-24.46,20.19L217.55,215a4,4,0,0,1-1.49,4.17,4.05,4.05,0,0,1-2.39.79,4,4,0,0,1-2-.55L184,203.18l-27.64,16.27a4,4,0,0,1-5.91-4.41l7.46-30.15L133.45,164.7a4,4,0,0,1,2.24-7.08l32.24-2.49,12.4-28.72a4,4,0,0,1,7.34,0l12.4,28.72,32.24,2.49a4,4,0,0,1,2.24,7.08Zm-12.74.14L197,162.92a4,4,0,0,1-3.36-2.4L184,138.1l-9.68,22.42a4,4,0,0,1-3.36,2.4l-24.77,1.92L165,180.32a4,4,0,0,1,1.33,4.05l-5.78,23.36L182,195.09a4,4,0,0,1,4.06,0l21.47,12.64-5.78-23.36a4,4,0,0,1,1.33-4.05Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};