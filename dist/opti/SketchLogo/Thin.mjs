var L = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (e, t, a) => t in e ? L(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, p = (e, t) => {
  for (var a in t || (t = {}))
    Z.call(t, a) && o(e, a, t[a]);
  if (m)
    for (var a of m(t))
      i.call(t, a) && o(e, a, t[a]);
  return e;
};
var n = (e, t) => {
  var a = {};
  for (var l in e)
    Z.call(e, l) && t.indexOf(l) < 0 && (a[l] = e[l]);
  if (e != null && m)
    for (var l of m(e))
      t.indexOf(l) < 0 && i.call(e, l) && (a[l] = e[l]);
  return a;
};
import H, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const h = c((l, a) => {
  var r = l, { children: e } = r, t = n(r, ["children"]);
  return /* @__PURE__ */ H.createElement(f, p({ ref: a }, t), e, /* @__PURE__ */ H.createElement("path", { d: "M243,101.37l-56-64A4,4,0,0,0,184,36H72a4,4,0,0,0-3,1.37l-56,64a4,4,0,0,0,.09,5.36l112,120a4,4,0,0,0,5.84,0l112-120A4,4,0,0,0,243,101.37ZM77.29,108l39.07,97.66L25.2,108Zm92.8,0L128,213.23,85.91,108ZM88,100l40-53.33L168,100Zm90.71,8H230.8l-91.16,97.66Zm52.47-8H178L136,44h46.18ZM73.82,44H120L78,100H24.82Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
