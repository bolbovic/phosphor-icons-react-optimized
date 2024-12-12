var i = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, M = Object.prototype.propertyIsEnumerable;
var o = (e, r, a) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, Z = (e, r) => {
  for (var a in r || (r = {}))
    p.call(r, a) && o(e, a, r[a]);
  if (l)
    for (var a of l(r))
      M.call(r, a) && o(e, a, r[a]);
  return e;
};
var c = (e, r) => {
  var a = {};
  for (var t in e)
    p.call(e, t) && r.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && l)
    for (var t of l(e))
      r.indexOf(t) < 0 && M.call(e, t) && (a[t] = e[t]);
  return a;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const L = s((t, a) => {
  var m = t, { children: e } = m, r = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(A, Z({ ref: a }, r), e, /* @__PURE__ */ f.createElement("path", { d: "M211.18,196.56,139.57,128l71.61-68.56a1.59,1.59,0,0,1,.13-.13A16,16,0,0,0,200,32H56A16,16,0,0,0,44.7,59.31l.12.13L116.43,128,44.82,196.56l-.12.13A16,16,0,0,0,56,224H200a16,16,0,0,0,11.32-27.31A1.59,1.59,0,0,1,211.18,196.56ZM56,48h0v0ZM158.21,168H97.79L128,139.08ZM200,48l-72,68.92L56,48ZM56,208l25.06-24h93.84L200,208Z" }));
});
L.displayName = "Regular";
export {
  L as Regular
};
