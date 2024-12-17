var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      A.call(t, e) && i(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import L, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((m, e) => {
  var o = m, { children: a } = o, t = l(o, ["children"]);
  return /* @__PURE__ */ L.createElement(s, Z({ ref: e }, t), a, /* @__PURE__ */ L.createElement("path", { d: "M212.44,212,52.44,36A6,6,0,0,0,43.56,44L61.31,63.56A78,78,0,0,0,122,181.75V202H32a6,6,0,0,0,0,12H198.07l5.49,6a6,6,0,0,0,8.88-8.08Zm-91.67-83a26.05,26.05,0,0,1-18.31-20.15ZM62,104a65.6,65.6,0,0,1,7.78-31.12L90.85,96.06A38,38,0,0,0,128,142a37.59,37.59,0,0,0,4.38-.26l21.06,23.17A66,66,0,0,1,62,104Zm72,98V181.76a78.27,78.27,0,0,0,27.93-7.51L187.16,202ZM87.26,44.32a6,6,0,0,1,2.26-8.18A78,78,0,0,1,191.89,148.75a6,6,0,1,1-9.82-6.89A66,66,0,0,0,95.44,46.57,6,6,0,0,1,87.26,44.32Zm65.47,67.73a26,26,0,0,0-30.4-33.43,6,6,0,1,1-2.6-11.72,38,38,0,0,1,44.41,48.86,6,6,0,0,1-11.41-3.71Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
