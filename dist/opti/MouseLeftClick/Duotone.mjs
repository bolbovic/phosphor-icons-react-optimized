var V = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var c = (e, a, t) => a in e ? V(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, A = (e, a) => {
  for (var t in a || (a = {}))
    Z.call(a, t) && c(e, t, a[t]);
  if (o)
    for (var t of o(a))
      n.call(a, t) && c(e, t, a[t]);
  return e;
};
var H = (e, a) => {
  var t = {};
  for (var m in e)
    Z.call(e, m) && a.indexOf(m) < 0 && (t[m] = e[m]);
  if (e != null && o)
    for (var m of o(e))
      a.indexOf(m) < 0 && n.call(e, m) && (t[m] = e[m]);
  return t;
};
import r, { forwardRef as i } from "react";
import d from "../../lib/OptiBase.mjs";
const f = i((m, t) => {
  var p = m, { children: e } = p, a = H(p, ["children"]);
  return /* @__PURE__ */ r.createElement(d, A({ ref: t }, a), e, /* @__PURE__ */ r.createElement("path", { d: "M128,24v88H56V80a56,56,0,0,1,56-56Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm48,64v24H136V32h8A48.05,48.05,0,0,1,192,80Zm-76.69,24-46-46A48.49,48.49,0,0,1,80.51,43.82L120,83.31V104ZM64,80c0-1.51.08-3,.22-4.47L92.69,104H64Zm56-48V60.69L94.59,35.28A47.73,47.73,0,0,1,112,32Zm24,192H112a48.05,48.05,0,0,1-48-48V120H192v56A48.05,48.05,0,0,1,144,224Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
