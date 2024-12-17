var s = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var L = (a, m, e) => m in a ? s(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, i = (a, m) => {
  for (var e in m || (m = {}))
    Z.call(m, e) && L(a, e, m[e]);
  if (l)
    for (var e of l(m))
      o.call(m, e) && L(a, e, m[e]);
  return a;
};
var p = (a, m) => {
  var e = {};
  for (var t in a)
    Z.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      m.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const V = c((t, e) => {
  var r = t, { children: a } = r, m = p(r, ["children"]);
  return /* @__PURE__ */ n.createElement(f, i({ ref: e }, m), a, /* @__PURE__ */ n.createElement("path", { d: "M234,92.55s-.05,0-.09-.07l-104-56a4,4,0,0,0-3.8,0l-104,56-.11.08A4,4,0,0,0,20,96v64a4,4,0,0,0,2,3.45.71.71,0,0,0,.09.07l104,56a4,4,0,0,0,3.8,0l104-56a.27.27,0,0,0,.08-.07,4,4,0,0,0,2-3.45V96A4,4,0,0,0,234,92.55Zm-6,60.75L181,128l47-25.3Zm-55.43-29.84L132,101.61V46.7L223.56,96Zm-44.57,24L91.87,128,128,108.54,164.13,128ZM124,46.7v54.91L83.43,123.46,32.44,96Zm-96,56L75,128,28,153.3Zm55.43,29.84L124,154.39V209.3L32.44,160ZM132,209.3V154.39l40.57-21.85,51,27.46Z" }));
});
V.displayName = "Thin";
export {
  V as Thin
};
