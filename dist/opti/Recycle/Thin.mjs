var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, e, l) => e in a ? s(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, n = (a, e) => {
  for (var l in e || (e = {}))
    i.call(e, l) && o(a, l, e[l]);
  if (r)
    for (var l of r(e))
      p.call(e, l) && o(a, l, e[l]);
  return a;
};
var c = (a, e) => {
  var l = {};
  for (var t in a)
    i.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      e.indexOf(t) < 0 && p.call(a, t) && (l[t] = a[t]);
  return l;
};
import f, { forwardRef as A } from "react";
import H from "../../lib/OptiBase.mjs";
const L = A((t, l) => {
  var m = t, { children: a } = m, e = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(H, n({ ref: l }, e), a, /* @__PURE__ */ f.createElement("path", { d: "M92,208a4,4,0,0,1-4,4H40a20,20,0,0,1-17.31-30l39.14-67.62-23.43,6.27a4,4,0,1,1-2.07-7.72l32.77-8.77A4,4,0,0,1,74,107l8.79,32.77a4,4,0,0,1-2.82,4.9,3.77,3.77,0,0,1-1,.14,4,4,0,0,1-3.86-3l-6.3-23.47L29.65,186A12,12,0,0,0,40,204H88A4,4,0,0,1,92,208Zm141.28-26-23.14-40a4,4,0,0,0-6.93,4l23.14,40A12,12,0,0,1,216,204H137.66l17.17-17.17a4,4,0,0,0-5.66-5.66l-24,24a4,4,0,0,0,0,5.66l24,24a4,4,0,0,0,5.66-5.66L137.66,212H216a20,20,0,0,0,17.31-30ZM138.38,34l39.14,67.62-23.43-6.28a4,4,0,0,0-2.07,7.73l32.78,8.78a3.65,3.65,0,0,0,1,.14,4,4,0,0,0,3.86-3l8.79-32.79a4,4,0,1,0-7.72-2.07l-6.3,23.47L145.31,30a20,20,0,0,0-34.62,0L87.53,70a4,4,0,0,0,6.93,4l23.15-40a12,12,0,0,1,20.77,0Z" }));
});
L.displayName = "Thin";
export {
  L as Thin
};
