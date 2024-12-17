var s = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as A } from "react";
import d from "../../lib/OptiBase.mjs";
const h = A((r, e) => {
  var m = r, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(d, V({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M240,132a28,28,0,0,1-24,27.71V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V159.71A28,28,0,1,1,72,132v36a8,8,0,0,0,16,0V144h80v24a8,8,0,0,0,16,0V132a28,28,0,0,1,56,0ZM44,88a44.06,44.06,0,0,1,43.81,40h80.38A44.06,44.06,0,0,1,212,88a4,4,0,0,0,4-4V72a40,40,0,0,0-40-40H80A40,40,0,0,0,40,72V84A4,4,0,0,0,44,88Z" }));
});
h.displayName = "Fill";
export {
  h as Fill
};
