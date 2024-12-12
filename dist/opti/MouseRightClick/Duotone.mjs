var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var c = (e, a, t) => a in e ? i(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, A = (e, a) => {
  for (var t in a || (a = {}))
    h.call(a, t) && c(e, t, a[t]);
  if (m)
    for (var t of m(a))
      n.call(a, t) && c(e, t, a[t]);
  return e;
};
var H = (e, a) => {
  var t = {};
  for (var o in e)
    h.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && m)
    for (var o of m(e))
      a.indexOf(o) < 0 && n.call(e, o) && (t[o] = e[o]);
  return t;
};
import r, { forwardRef as v } from "react";
import V from "../../lib/OptiBase.mjs";
const Z = v((o, t) => {
  var p = o, { children: e } = p, a = H(p, ["children"]);
  return /* @__PURE__ */ r.createElement(V, A({ ref: t }, a), e, /* @__PURE__ */ r.createElement("path", { d: "M200,80v32H128V24h16A56,56,0,0,1,200,80Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm48,64v24H136V32h8A48.05,48.05,0,0,1,192,80ZM112,32h8v72H64V80A48.05,48.05,0,0,1,112,32Zm32,192H112a48.05,48.05,0,0,1-48-48V120H192v56A48.05,48.05,0,0,1,144,224Z" }));
});
Z.displayName = "Duotone";
export {
  Z as Duotone
};
