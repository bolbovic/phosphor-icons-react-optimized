var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var c in a)
    H.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && r)
    for (var c of r(a))
      t.indexOf(c) < 0 && i.call(a, c) && (e[c] = a[c]);
  return e;
};
import h, { forwardRef as A } from "react";
import M from "../../lib/OptiBase.mjs";
const f = A((c, e) => {
  var m = c, { children: a } = m, t = Z(m, ["children"]);
  return /* @__PURE__ */ h.createElement(M, p({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M204.51,62c8.22-14.61,8.21-23.23,6.75-27.9a10.82,10.82,0,0,0-4.94-6.51,4,4,0,0,1-2-5.27,4,4,0,0,1,5.3-2c.66.29,6.52,3.09,9.16,11,3,9,.53,20.66-7.29,34.57-8.22,14.61-8.21,23.24-6.75,27.91a10.74,10.74,0,0,0,4.94,6.5A4,4,0,0,1,208,108a4.09,4.09,0,0,1-1.63-.35c-.66-.3-6.52-3.09-9.16-11C194.23,87.59,196.69,76,204.51,62ZM157.22,96.61c2.64,8,8.5,10.75,9.16,11A4.09,4.09,0,0,0,168,108a4,4,0,0,0,1.67-7.64,10.74,10.74,0,0,1-4.94-6.5c-1.46-4.67-1.47-13.3,6.75-27.91,7.82-13.91,10.28-25.54,7.29-34.57-2.64-7.95-8.5-10.75-9.16-11a4,4,0,0,0-5.3,2,4,4,0,0,0,2,5.27,10.82,10.82,0,0,1,4.94,6.51c1.46,4.67,1.47,13.29-6.75,27.9C156.69,76,154.23,87.59,157.22,96.61ZM211,213.31a4,4,0,1,1-5.92,5.38L177.14,188H32a12,12,0,0,1-12-12V144a12,12,0,0,1,12-12h94.23L45,42.69A4,4,0,0,1,51,37.31ZM32,180H84V140H32a4,4,0,0,0-4,4v32A4,4,0,0,0,32,180Zm137.87,0L133.5,140H92v40ZM224,132H178.52a4,4,0,1,0,0,8H224a4,4,0,0,1,4,4v32a4,4,0,0,1-4,4h-1.84a4,4,0,1,0,0,8H224a12,12,0,0,0,12-12V144A12,12,0,0,0,224,132Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};