var V = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var p = (e, m, a) => m in e ? V(e, m, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[m] = a, c = (e, m) => {
  for (var a in m || (m = {}))
    A.call(m, a) && p(e, a, m[a]);
  if (t)
    for (var a of t(m))
      Z.call(m, a) && p(e, a, m[a]);
  return e;
};
var l = (e, m) => {
  var a = {};
  for (var r in e)
    A.call(e, r) && m.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && t)
    for (var r of t(e))
      m.indexOf(r) < 0 && Z.call(e, r) && (a[r] = e[r]);
  return a;
};
import H, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((r, a) => {
  var o = r, { children: e } = o, m = l(o, ["children"]);
  return /* @__PURE__ */ H.createElement(i, c({ ref: a }, m), e, /* @__PURE__ */ H.createElement("path", { d: "M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm48,64v24H136V32h8A48.05,48.05,0,0,1,192,80Zm-76.69,24-46-46A48.49,48.49,0,0,1,80.51,43.82L120,83.31V104ZM64,80c0-1.51.08-3,.22-4.47L92.69,104H64Zm56-48V60.69L94.59,35.28A47.73,47.73,0,0,1,112,32Zm24,192H112a48.05,48.05,0,0,1-48-48V120H192v56A48.05,48.05,0,0,1,144,224Z" }));
});
s.displayName = "Regular";
export {
  s as Regular
};
