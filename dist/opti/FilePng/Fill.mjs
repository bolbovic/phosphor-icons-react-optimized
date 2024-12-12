var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      o.call(t, e) && m(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var l in a)
    c.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && o.call(a, l) && (e[l] = a[l]);
  return e;
};
import s, { forwardRef as Z } from "react";
import v from "../../lib/OptiBase.mjs";
const M = Z((l, e) => {
  var A = l, { children: a } = A, t = p(A, ["children"]);
  return /* @__PURE__ */ s.createElement(v, i({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M44,120H212a4,4,0,0,0,4-4V88a8,8,0,0,0-2.34-5.66l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v76A4,4,0,0,0,44,120ZM152,44l44,44H152ZM60,144H44a8,8,0,0,0-8,8v55.72A8.17,8.17,0,0,0,43.47,216,8,8,0,0,0,52,208v-8h7.4c15.24,0,28.14-11.92,28.59-27.15A28,28,0,0,0,60,144Zm-.35,40H52V160h8a12,12,0,0,1,12,13.16A12.25,12.25,0,0,1,59.65,184ZM224,200.87a8,8,0,0,1-2.26,5.57A30.07,30.07,0,0,1,200,216c-17.64,0-32-16.15-32-36s14.36-36,32-36a29.36,29.36,0,0,1,16.09,4.86,8.21,8.21,0,0,1,3,10.64,8,8,0,0,1-11.55,2.88A13.21,13.21,0,0,0,200,160c-8.82,0-16,9-16,20s7.18,20,16,20a13.57,13.57,0,0,0,8-2.72V192a8,8,0,0,1-8-8.53,8.17,8.17,0,0,1,8.25-7.47H216a8,8,0,0,1,8,8ZM156,152v55.76a8.22,8.22,0,0,1-4.12,7.24,8,8,0,0,1-10.39-2.35L116,177v30.76a8.17,8.17,0,0,1-7.47,8.26,8,8,0,0,1-8.53-8V152.31a8.27,8.27,0,0,1,4.53-7.52,8,8,0,0,1,10,2.56L140,183V152.27a8.17,8.17,0,0,1,7.47-8.25A8,8,0,0,1,156,152Z" }));
});
M.displayName = "Fill";
export {
  M as Fill
};
