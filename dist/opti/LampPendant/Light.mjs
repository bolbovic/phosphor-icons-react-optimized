var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, v = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && h(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && h(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var o = r, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ c.createElement(V, v({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M174,76.05V72a14,14,0,0,0-14-14H134V16a6,6,0,0,0-12,0V58H96A14,14,0,0,0,82,72v4A109.76,109.76,0,0,0,18,176a6,6,0,0,0,6,6H90v2a38,38,0,0,0,76,0v-2h66a6,6,0,0,0,6-6A109.76,109.76,0,0,0,174,76.05ZM154,184a26,26,0,0,1-52,0v-2h52ZM30.18,170A97.76,97.76,0,0,1,90.31,85.51,6,6,0,0,0,94,80V72a2,2,0,0,1,2-2h64a2,2,0,0,1,2,2v8a6,6,0,0,0,3.69,5.54A97.76,97.76,0,0,1,225.82,170Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
