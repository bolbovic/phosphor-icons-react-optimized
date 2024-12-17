var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    L.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      Z.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    L.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && Z.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const M = h((m, e) => {
  var H = m, { children: a } = H, t = p(H, ["children"]);
  return /* @__PURE__ */ c.createElement(s, i({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M216,90H166V40a6,6,0,0,0-6-6H40a6,6,0,0,0-6,6V160a6,6,0,0,0,6,6H90v50a6,6,0,0,0,6,6H216a6,6,0,0,0,6-6V96A6,6,0,0,0,216,90ZM154.48,210,46,101.52v-47L201.52,210ZM54.48,46h47L210,154.48v47ZM210,137.52,174.48,102H210Zm-56-56L118.48,46H154Zm-108,37L81.52,154H46Zm56,56L137.52,210H102Z" }));
});
M.displayName = "Light";
export {
  M as Light
};
