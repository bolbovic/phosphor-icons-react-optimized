var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      V.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var A in a)
    H.call(a, A) && t.indexOf(A) < 0 && (e[A] = a[A]);
  if (a != null && r)
    for (var A of r(a))
      t.indexOf(A) < 0 && V.call(a, A) && (e[A] = a[A]);
  return e;
};
import n, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((A, e) => {
  var m = A, { children: a } = m, t = p(m, ["children"]);
  return /* @__PURE__ */ n.createElement(h, i({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M232,124H219.91A92.13,92.13,0,0,0,132,36.09V24a4,4,0,0,0-8,0V36.09A92.13,92.13,0,0,0,36.09,124H24a4,4,0,0,0,0,8H36.09A92.13,92.13,0,0,0,124,219.91V232a4,4,0,0,0,8,0V219.91A92.13,92.13,0,0,0,219.91,132H232a4,4,0,0,0,0-8ZM132,211.9V200a4,4,0,0,0-8,0v11.9A84.11,84.11,0,0,1,44.1,132H56a4,4,0,0,0,0-8H44.1A84.11,84.11,0,0,1,124,44.1V56a4,4,0,0,0,8,0V44.1A84.11,84.11,0,0,1,211.9,124H200a4,4,0,0,0,0,8h11.9A84.11,84.11,0,0,1,132,211.9ZM128,92a36,36,0,1,0,36,36A36,36,0,0,0,128,92Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,128,156Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
