var v = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? v(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && o(a, e, t[e]);
  if (V)
    for (var e of V(t))
      h.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    H.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && V)
    for (var m of V(a))
      t.indexOf(m) < 0 && h.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as A } from "react";
import c from "../../lib/OptiBase.mjs";
const f = A((m, e) => {
  var r = m, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(c, i({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M102,88v96a6,6,0,0,1-12,0V88a6,6,0,0,1,12,0Zm26-6a6,6,0,0,0-6,6v96a6,6,0,0,0,12,0V88A6,6,0,0,0,128,82Zm32,0a6,6,0,0,0-6,6v96a6,6,0,0,0,12,0V88A6,6,0,0,0,160,82Zm46-18V208a14,14,0,0,1-14,14H174v18a6,6,0,0,1-12,0V222H94v18a6,6,0,0,1-12,0V222H64a14,14,0,0,1-14-14V64A14,14,0,0,1,64,50H90V24A22,22,0,0,1,112,2h32a22,22,0,0,1,22,22V50h26A14,14,0,0,1,206,64ZM102,50h52V24a10,10,0,0,0-10-10H112a10,10,0,0,0-10,10Zm92,14a2,2,0,0,0-2-2H64a2,2,0,0,0-2,2V208a2,2,0,0,0,2,2H192a2,2,0,0,0,2-2Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
