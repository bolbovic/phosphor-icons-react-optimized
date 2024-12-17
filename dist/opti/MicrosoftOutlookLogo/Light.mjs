var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      h.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    Z.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && h.call(a, m) && (e[m] = a[m]);
  return e;
};
import v, { forwardRef as V } from "react";
import l from "../../lib/OptiBase.mjs";
const c = V((m, e) => {
  var H = m, { children: a } = H, t = p(H, ["children"]);
  return /* @__PURE__ */ v.createElement(l, i({ ref: e }, t), a, /* @__PURE__ */ v.createElement("path", { d: "M118,128a30,30,0,1,0-30,30A30,30,0,0,0,118,128Zm-48,0a18,18,0,1,1,18,18A18,18,0,0,1,70,128Zm154-22H206V40a6,6,0,0,0-6-6H104a6,6,0,0,0-6,6V66H40A14,14,0,0,0,26,80v96a14,14,0,0,0,14,14H74v18a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V112A6,6,0,0,0,224,106Zm-61.75,58L218,123.73v80.54ZM110,46h84v80.27L152,156.6l-2-1.45V80a14,14,0,0,0-14-14H110ZM38,176V80a2,2,0,0,1,2-2h96a2,2,0,0,1,2,2v96a2,2,0,0,1-2,2H40A2,2,0,0,1,38,176Zm48,32V190h50a14,14,0,0,0,14-14v-6l55.44,40H88A2,2,0,0,1,86,208Z" }));
});
c.displayName = "Light";
export {
  c as Light
};
