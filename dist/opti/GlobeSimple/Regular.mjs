var h = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, m, a) => m in e ? h(e, m, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[m] = a, l = (e, m) => {
  for (var a in m || (m = {}))
    Z.call(m, a) && o(e, a, m[a]);
  if (t)
    for (var a of t(m))
      p.call(m, a) && o(e, a, m[a]);
  return e;
};
var A = (e, m) => {
  var a = {};
  for (var r in e)
    Z.call(e, r) && m.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && t)
    for (var r of t(e))
      m.indexOf(r) < 0 && p.call(e, r) && (a[r] = e[r]);
  return a;
};
import f, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const C = i((r, a) => {
  var c = r, { children: e } = c, m = A(c, ["children"]);
  return /* @__PURE__ */ f.createElement(s, l({ ref: a }, m), e, /* @__PURE__ */ f.createElement("path", { d: "M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm87.62,96H175.79C174,83.49,159.94,57.67,148.41,42.4A88.19,88.19,0,0,1,215.63,120ZM96.23,136h63.54c-2.31,41.61-22.23,67.11-31.77,77C118.45,203.1,98.54,177.6,96.23,136Zm0-16C98.54,78.39,118.46,52.89,128,43c9.55,9.93,29.46,35.43,31.77,77Zm11.36-77.6C96.06,57.67,82,83.49,80.21,120H40.37A88.19,88.19,0,0,1,107.59,42.4ZM40.37,136H80.21c1.82,36.51,15.85,62.33,27.38,77.6A88.19,88.19,0,0,1,40.37,136Zm108,77.6c11.53-15.27,25.56-41.09,27.38-77.6h39.84A88.19,88.19,0,0,1,148.41,213.6Z" }));
});
C.displayName = "Regular";
export {
  C as Regular
};
