var L = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? L(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && r(a, e, t[e]);
  if (l)
    for (var e of l(t))
      o.call(t, e) && r(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var m in a)
    H.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && l)
    for (var m of l(a))
      t.indexOf(m) < 0 && o.call(a, m) && (e[m] = a[m]);
  return e;
};
import p, { forwardRef as v } from "react";
import M from "../../lib/OptiBase.mjs";
const c = v((m, e) => {
  var Z = m, { children: a } = Z, t = i(Z, ["children"]);
  return /* @__PURE__ */ p.createElement(M, h({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M216,90H166V40a6,6,0,0,0-6-6H40a6,6,0,0,0-6,6V160a6,6,0,0,0,6,6H90v50a6,6,0,0,0,6,6H216a6,6,0,0,0,6-6V96A6,6,0,0,0,216,90ZM162.48,210l-44-44h39l44,44ZM46,54.48l44,44v39l-44-44ZM93.52,46l44,44h-39l-44-44ZM102,154V102h52v52Zm64,3.52v-39l44,44v39Zm44-12L166.48,102H210Zm-56-56L110.48,46H154Zm-108,21L89.52,154H46Zm56,56L145.52,210H102Z" }));
});
c.displayName = "Light";
export {
  c as Light
};
