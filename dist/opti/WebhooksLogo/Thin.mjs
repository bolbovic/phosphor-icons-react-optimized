var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const d = h((r, e) => {
  var o = r, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M180.7,172H107.81a44,44,0,1,1-79-30.41,4,4,0,0,1,6.4,4.81A35.67,35.67,0,0,0,28,168a36,36,0,0,0,72,0,4,4,0,0,1,4-4h76.7a12,12,0,1,1,0,8ZM64,180a12,12,0,0,0,9.33-19.54l37.11-60.3a4,4,0,0,0-1.31-5.51A36,36,0,1,1,161,49.58a4,4,0,1,0,7.33-3.19,44,44,0,1,0-66.71,52.83l-35.1,57.05A11.58,11.58,0,0,0,64,156a12,12,0,0,0,0,24Zm128-56a44,44,0,0,0-19.56,4.58l-35.11-57A12,12,0,1,0,128,76a12.24,12.24,0,0,0,2.52-.27L167.63,136a4,4,0,0,0,5.5,1.31A36,36,0,1,1,192,204a4,4,0,0,0,0,8,44,44,0,0,0,0-88Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
