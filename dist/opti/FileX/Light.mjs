var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const H = s((r, e) => {
  var l = r, { children: a } = l, t = h(l, ["children"]);
  return /* @__PURE__ */ c.createElement(A, L({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V88A6,6,0,0,0,212.24,83.76ZM158,46.48,193.52,82H158ZM202,216a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50Zm-45.76-92.24a6,6,0,0,1,0,8.48L136.49,152l19.75,19.76a6,6,0,1,1-8.48,8.48L128,160.49l-19.76,19.75a6,6,0,0,1-8.48-8.48L119.51,152,99.76,132.24a6,6,0,1,1,8.48-8.48L128,143.51l19.76-19.75A6,6,0,0,1,156.24,123.76Z" }));
});
H.displayName = "Light";
export {
  H as Light
};
