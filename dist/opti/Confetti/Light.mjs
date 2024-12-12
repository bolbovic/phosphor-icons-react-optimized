var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      c.call(t, e) && l(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && c.call(a, m) && (e[m] = a[m]);
  return e;
};
import L, { forwardRef as A } from "react";
import M from "../../lib/OptiBase.mjs";
const f = A((m, e) => {
  var Z = m, { children: a } = Z, t = p(Z, ["children"]);
  return /* @__PURE__ */ L.createElement(M, i({ ref: e }, t), a, /* @__PURE__ */ L.createElement("path", { d: "M110.08,54a13.8,13.8,0,0,0-22.73,5.05L34.85,203.47A13.82,13.82,0,0,0,47.76,222a14,14,0,0,0,4.77-.85l144.38-52.5a13.8,13.8,0,0,0,5-22.73ZM48.43,209.87a1.79,1.79,0,0,1-2.3-2.3L61.31,165.8,90.2,194.68Zm54.21-19.71-36.8-36.81L80.51,113,143,175.49ZM194,156.07a1.74,1.74,0,0,1-1.14,1.3L155.44,171,85,100.55,98.63,63.19a1.72,1.72,0,0,1,1.3-1.14,1.58,1.58,0,0,1,.41,0,1.72,1.72,0,0,1,1.25.53l91.88,91.88A1.73,1.73,0,0,1,194,156.07ZM162,72a35.52,35.52,0,0,1,3.63-14.68C170.57,47.44,179.93,42,192,42c7.47,0,12.53-2.74,15.48-8.38A24.18,24.18,0,0,0,210,24,6,6,0,0,1,216,18h0a6,6,0,0,1,6,6c0,10.38-6.27,30-30,30-7.47,0-12.53,2.74-15.48,8.38A24,24,0,0,0,174,72a6,6,0,0,1-6,6h0A6,6,0,0,1,162,72ZM138,40V16a6,6,0,0,1,12,0V40a6,6,0,0,1-12,0Zm98.24,83.76a6,6,0,1,1-8.48,8.48l-16-16a6,6,0,0,1,8.48-8.48Zm5.66-46.07-24,8a6,6,0,1,1-3.8-11.38l24-8a6,6,0,0,1,3.8,11.38Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
