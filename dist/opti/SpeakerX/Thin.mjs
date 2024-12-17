var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import A, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const H = f((m, e) => {
  var l = m, { children: a } = l, t = n(l, ["children"]);
  return /* @__PURE__ */ A.createElement(s, L({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M153.76,28.41a4,4,0,0,0-4.22.43L78.63,84H32A12,12,0,0,0,20,96v64a12,12,0,0,0,12,12H78.63l70.91,55.16A4.07,4.07,0,0,0,152,228a3.92,3.92,0,0,0,1.76-.41A4,4,0,0,0,156,224V32A4,4,0,0,0,153.76,28.41ZM28,160V96a4,4,0,0,1,4-4H76v72H32A4,4,0,0,1,28,160Zm120,55.82L84,166V90l64-49.78Zm94.83-66.65a4,4,0,0,1-5.66,5.66L216,133.66l-21.17,21.17a4,4,0,0,1-5.66-5.66L210.34,128l-21.17-21.17a4,4,0,0,1,5.66-5.66L216,122.34l21.17-21.17a4,4,0,1,1,5.66,5.66L221.66,128Z" }));
});
H.displayName = "Thin";
export {
  H as Thin
};
