var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && h(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && h(a, e, t[e]);
  return a;
};
var v = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import A, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const V = f((r, e) => {
  var o = r, { children: a } = o, t = v(o, ["children"]);
  return /* @__PURE__ */ A.createElement(s, n({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M172,77.34V72a12,12,0,0,0-12-12H132V16a4,4,0,0,0-8,0V60H96A12,12,0,0,0,84,72v5.34A107.75,107.75,0,0,0,20,176a4,4,0,0,0,4,4H92v4a36,36,0,0,0,72,0v-4h68a4,4,0,0,0,4-4A107.75,107.75,0,0,0,172,77.34ZM156,184a28,28,0,0,1-56,0v-4h56ZM28.08,172A99.77,99.77,0,0,1,89.54,83.66,4,4,0,0,0,92,80V72a4,4,0,0,1,4-4h64a4,4,0,0,1,4,4v8a4,4,0,0,0,2.46,3.69A99.77,99.77,0,0,1,227.92,172Z" }));
});
V.displayName = "Thin";
export {
  V as Thin
};
