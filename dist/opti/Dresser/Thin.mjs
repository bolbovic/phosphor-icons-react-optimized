var n = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      h.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var H in a)
    Z.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && m)
    for (var H of m(a))
      t.indexOf(H) < 0 && h.call(a, H) && (e[H] = a[H]);
  return e;
};
import V, { forwardRef as A } from "react";
import M from "../../lib/OptiBase.mjs";
const c = A((H, e) => {
  var r = H, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ V.createElement(M, i({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M140,192a4,4,0,0,1-4,4H120a4,4,0,0,1,0-8h16A4,4,0,0,1,140,192ZM120,68h16a4,4,0,0,0,0-8H120a4,4,0,0,0,0,8Zm16,56H120a4,4,0,0,0,0,8h16a4,4,0,0,0,0-8Zm76-84V216a12,12,0,0,1-12,12H56a12,12,0,0,1-12-12V40A12,12,0,0,1,56,28H200A12,12,0,0,1,212,40ZM52,156H204V100H52ZM52,40V92H204V40a4,4,0,0,0-4-4H56A4,4,0,0,0,52,40ZM204,216V164H52v52a4,4,0,0,0,4,4H200A4,4,0,0,0,204,216Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
