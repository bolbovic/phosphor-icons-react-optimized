var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, M = (e, t) => {
  for (var a in t || (t = {}))
    c.call(t, a) && p(e, a, t[a]);
  if (r)
    for (var a of r(t))
      n.call(t, a) && p(e, a, t[a]);
  return e;
};
var Z = (e, t) => {
  var a = {};
  for (var o in e)
    c.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && n.call(e, o) && (a[o] = e[o]);
  return a;
};
import l, { forwardRef as A } from "react";
import H from "../../lib/OptiBase.mjs";
const L = A((o, a) => {
  var m = o, { children: e } = m, t = Z(m, ["children"]);
  return /* @__PURE__ */ l.createElement(H, M({ ref: a }, t), e, /* @__PURE__ */ l.createElement(
    "path",
    {
      d: "M200,216H56a8,8,0,0,1-5.66-13.66L77.87,176H178.13l27.51,26.34A8,8,0,0,1,200,216Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ l.createElement("path", { d: "M211.18,196.56,139.57,128l71.61-68.56a1.59,1.59,0,0,1,.13-.13A16,16,0,0,0,200,32H56A16,16,0,0,0,44.69,59.31a1.59,1.59,0,0,1,.13.13L116.43,128,44.82,196.56a1.59,1.59,0,0,1-.13.13A16,16,0,0,0,56,224H200a16,16,0,0,0,11.32-27.31A1.59,1.59,0,0,1,211.18,196.56ZM56,48h0v0ZM158.21,168H97.79L128,139.08ZM200,48l-72,68.92L56,48ZM56,208l25.06-24h93.84L200,208Z" }));
});
L.displayName = "Duotone";
export {
  L as Duotone
};
