var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var c in a)
    i.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && m)
    for (var c of m(a))
      t.indexOf(c) < 0 && p.call(a, c) && (e[c] = a[c]);
  return e;
};
import Z, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const d = s((c, e) => {
  var r = c, { children: a } = r, t = n(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(A, H({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M224,132H32a12,12,0,0,0-12,12v32a12,12,0,0,0,12,12H224a12,12,0,0,0,12-12V144A12,12,0,0,0,224,132ZM28,176V144a4,4,0,0,1,4-4H84v40H32A4,4,0,0,1,28,176Zm200,0a4,4,0,0,1-4,4H92V140H224a4,4,0,0,1,4,4ZM204.51,62c8.22-14.61,8.21-23.23,6.75-27.9a10.82,10.82,0,0,0-4.94-6.51,4,4,0,0,1-2-5.26,4,4,0,0,1,5.3-2c.66.29,6.52,3.09,9.16,11,3,9,.53,20.66-7.29,34.57-8.22,14.61-8.21,23.24-6.75,27.91a10.74,10.74,0,0,0,4.94,6.5A4,4,0,0,1,208,108a4.09,4.09,0,0,1-1.63-.35c-.66-.3-6.52-3.09-9.16-11C194.23,87.59,196.69,76,204.51,62Zm-40,0c8.22-14.61,8.21-23.23,6.75-27.9a10.82,10.82,0,0,0-4.94-6.51,4,4,0,0,1-2-5.26,4,4,0,0,1,5.3-2c.66.29,6.52,3.09,9.16,11,3,9,.53,20.66-7.29,34.57-8.22,14.61-8.21,23.24-6.75,27.91a10.74,10.74,0,0,0,4.94,6.5A4,4,0,0,1,168,108a4.09,4.09,0,0,1-1.63-.35c-.66-.3-6.52-3.09-9.16-11C154.23,87.59,156.69,76,164.51,62Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};