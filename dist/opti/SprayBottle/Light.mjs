var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && V(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && V(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    h.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import l, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const H = f((r, e) => {
  var o = r, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ l.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M200,78a6,6,0,0,0,6-6,54.06,54.06,0,0,0-54-54H80A14,14,0,0,0,66,32V80a26,26,0,0,1-26,26,6,6,0,0,0,0,12A38,38,0,0,0,78,80V78h36v26.62a25.87,25.87,0,0,1-9.76,20.3l-16,12.79A37.81,37.81,0,0,0,74,167.38V224a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V211.47A268.92,268.92,0,0,0,170.57,78ZM78,32a2,2,0,0,1,2-2h72a42.06,42.06,0,0,1,41.57,36H78ZM194,211.47V224a2,2,0,0,1-2,2H88a2,2,0,0,1-2-2V167.38a25.87,25.87,0,0,1,9.76-20.3l16-12.79A37.81,37.81,0,0,0,126,104.62V78h30.64A256.84,256.84,0,0,1,194,211.47Z" }));
});
H.displayName = "Light";
export {
  H as Light
};