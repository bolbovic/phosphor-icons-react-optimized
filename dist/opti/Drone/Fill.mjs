var c = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? c(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, A = (a, m) => {
  for (var e in m || (m = {}))
    i.call(m, e) && o(a, e, m[e]);
  if (l)
    for (var e of l(m))
      p.call(m, e) && o(a, e, m[e]);
  return a;
};
var L = (a, m) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      m.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((t, e) => {
  var r = t, { children: a } = r, m = L(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, A({ ref: e }, m), a, /* @__PURE__ */ Z.createElement("path", { d: "M189.66,77.66,160,107.31v41.38l29.66,29.65a8,8,0,0,1-11.32,11.32L148.69,160H107.31L77.66,189.66a8,8,0,0,1-11.32-11.32L96,148.69V107.31L66.34,77.66A8,8,0,0,1,77.66,66.34L107.31,96h41.38l29.65-29.66a8,8,0,0,1,11.32,11.32Zm-46.28-6.12a8,8,0,0,0,10.21-4.87,28,28,0,1,1,35.74,35.74A8,8,0,0,0,192,118a7.86,7.86,0,0,0,2.67-.46,44,44,0,1,0-56.16-56.16A8,8,0,0,0,143.38,71.54Zm51.29,67a8,8,0,0,0-5.34,15.08,28,28,0,1,1-35.74,35.74,8,8,0,0,0-15.08,5.34,44,44,0,1,0,56.16-56.16Zm-82,46a8,8,0,0,0-10.21,4.87,28,28,0,1,1-35.74-35.74,8,8,0,0,0-5.34-15.08,44,44,0,1,0,56.16,56.16A8,8,0,0,0,112.62,184.46Zm-51.29-67A7.86,7.86,0,0,0,64,118a8,8,0,0,0,2.67-15.54,28,28,0,1,1,35.74-35.74,8,8,0,1,0,15.08-5.34,44,44,0,1,0-56.16,56.16Z" }));
});
d.displayName = "Fill";
export {
  d as Fill
};
