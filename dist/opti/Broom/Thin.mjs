var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var l in a)
    c.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && i.call(a, l) && (e[l] = a[l]);
  return e;
};
import n, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const d = s((l, e) => {
  var m = l, { children: a } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ n.createElement(L, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M233.75,220.4C209.76,208.75,196,183.82,196,152V134.72a12,12,0,0,0-7.56-11.15l-24.89-9.83a12,12,0,0,1-6.71-15.55l21.33-53a23.88,23.88,0,0,0-31.93-31A24.72,24.72,0,0,0,133.62,27.3l-21,53.1A12,12,0,0,1,97,87.13L71.63,76.84a12,12,0,0,0-13,2.73C38.3,100.45,28,124.82,28,152a107.5,107.5,0,0,0,30.07,74.77A4,4,0,0,0,61,228H232a4,4,0,0,0,1.75-7.6ZM64.34,85.15a3.94,3.94,0,0,1,4.3-.89L94,94.55a20,20,0,0,0,26-11.2l21-53C144.39,22.19,153.61,18,161.58,21a16,16,0,0,1,9.19,21.16L149.41,95.22a20,20,0,0,0,11.18,26l24.9,9.83a4,4,0,0,1,2.51,3.72V152c0,2.36.08,4.69.22,7l-138.5-55.4A110.84,110.84,0,0,1,64.34,85.15ZM113.56,220A91.35,91.35,0,0,1,86.9,175a4,4,0,0,0-7.75,2,100.21,100.21,0,0,0,23.09,43H62.68A99.5,99.5,0,0,1,36,152a89.37,89.37,0,0,1,9.73-41.4L189.13,168c3.22,22,13.23,40.09,28.8,52Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
