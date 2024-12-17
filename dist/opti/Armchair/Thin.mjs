var A = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (V)
    for (var e of V(t))
      i.call(t, e) && m(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && V)
    for (var r of V(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import v, { forwardRef as H } from "react";
import c from "../../lib/OptiBase.mjs";
const f = H((r, e) => {
  var h = r, { children: a } = h, t = n(h, ["children"]);
  return /* @__PURE__ */ v.createElement(c, p({ ref: e }, t), a, /* @__PURE__ */ v.createElement("path", { d: "M212,92.23V72a36,36,0,0,0-36-36H80A36,36,0,0,0,44,72V92.23a36,36,0,0,0,0,71.55V200a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V163.78a36,36,0,0,0,0-71.55ZM80,44h96a28,28,0,0,1,28,28V92.23A36,36,0,0,0,172,128v4H84v-4A36,36,0,0,0,52,92.23V72A28,28,0,0,1,80,44ZM208.3,156H208a4,4,0,0,0-4,4v40a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V160h0a4,4,0,0,0-4-4h-.3A28,28,0,1,1,76,128v40a4,4,0,0,0,8,0V140h88v28a4,4,0,0,0,8,0V128a28,28,0,1,1,28.3,28Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
