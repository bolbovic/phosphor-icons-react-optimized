var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import L, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const H = f((l, e) => {
  var m = l, { children: a } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ L.createElement(s, n({ ref: e }, t), a, /* @__PURE__ */ L.createElement("path", { d: "M161.76,28.41a4,4,0,0,0-4.22.43L86.63,84H40A12,12,0,0,0,28,96v64a12,12,0,0,0,12,12H86.63l70.91,55.16A4.07,4.07,0,0,0,160,228a3.92,3.92,0,0,0,1.76-.41A4,4,0,0,0,164,224V32A4,4,0,0,0,161.76,28.41ZM156,215.82l-65.54-51A4.06,4.06,0,0,0,88,164H40a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4H88a4.06,4.06,0,0,0,2.46-.84l65.54-51Zm94.83-66.65a4,4,0,0,1-5.66,5.66L224,133.66l-21.17,21.17a4,4,0,0,1-5.66-5.66L218.34,128l-21.17-21.17a4,4,0,0,1,5.66-5.66L224,122.34l21.17-21.17a4,4,0,1,1,5.66,5.66L229.66,128Z" }));
});
H.displayName = "Thin";
export {
  H as Thin
};
