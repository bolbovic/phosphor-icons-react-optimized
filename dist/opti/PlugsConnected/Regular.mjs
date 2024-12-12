var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var m = (a, e, l) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, Z = (a, e) => {
  for (var l in e || (e = {}))
    o.call(e, l) && m(a, l, e[l]);
  if (r)
    for (var l of r(e))
      L.call(e, l) && m(a, l, e[l]);
  return a;
};
var p = (a, e) => {
  var l = {};
  for (var A in a)
    o.call(a, A) && e.indexOf(A) < 0 && (l[A] = a[A]);
  if (a != null && r)
    for (var A of r(a))
      e.indexOf(A) < 0 && L.call(a, A) && (l[A] = a[A]);
  return l;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const M = i((A, l) => {
  var t = A, { children: a } = t, e = p(t, ["children"]);
  return /* @__PURE__ */ c.createElement(s, Z({ ref: l }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M237.66,18.34a8,8,0,0,0-11.32,0l-52.4,52.41-5.37-5.38a32.05,32.05,0,0,0-45.26,0L100,88.69l-6.34-6.35A8,8,0,0,0,82.34,93.66L88.69,100,65.37,123.31a32,32,0,0,0,0,45.26l5.38,5.37-52.41,52.4a8,8,0,0,0,11.32,11.32l52.4-52.41,5.37,5.38a32,32,0,0,0,45.26,0L156,167.31l6.34,6.35a8,8,0,0,0,11.32-11.32L167.31,156l23.32-23.31a32,32,0,0,0,0-45.26l-5.38-5.37,52.41-52.4A8,8,0,0,0,237.66,18.34Zm-116.29,161a16,16,0,0,1-22.62,0L76.69,157.25a16,16,0,0,1,0-22.62L100,111.31,144.69,156Zm57.94-57.94L156,144.69,111.31,100l23.32-23.31a16,16,0,0,1,22.62,0l22.06,22A16,16,0,0,1,179.31,121.37ZM88.57,35A8,8,0,0,1,103.43,29l8,20A8,8,0,0,1,96.57,55ZM24.57,93A8,8,0,0,1,35,88.57l20,8A8,8,0,0,1,49,111.43l-20-8A8,8,0,0,1,24.57,93ZM231.43,163a8,8,0,0,1-10.4,4.46l-20-8A8,8,0,1,1,207,144.57l20,8A8,8,0,0,1,231.43,163Zm-64,58.06A8,8,0,0,1,152.57,227l-8-20A8,8,0,0,1,159.43,201Z" }));
});
M.displayName = "Regular";
export {
  M as Regular
};
