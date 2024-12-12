var p = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var r = (e, H, m) => H in e ? p(e, H, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[H] = m, h = (e, H) => {
  for (var m in H || (H = {}))
    v.call(H, m) && r(e, m, H[m]);
  if (t)
    for (var m of t(H))
      V.call(H, m) && r(e, m, H[m]);
  return e;
};
var o = (e, H) => {
  var m = {};
  for (var a in e)
    v.call(e, a) && H.indexOf(a) < 0 && (m[a] = e[a]);
  if (e != null && t)
    for (var a of t(e))
      H.indexOf(a) < 0 && V.call(e, a) && (m[a] = e[a]);
  return m;
};
import i, { forwardRef as A } from "react";
import n from "../../lib/OptiBase.mjs";
const M = A((a, m) => {
  var Z = a, { children: e } = Z, H = o(Z, ["children"]);
  return /* @__PURE__ */ i.createElement(n, h({ ref: m }, H), e, /* @__PURE__ */ i.createElement("path", { d: "M216,52H40A12,12,0,0,0,28,64V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V64A12,12,0,0,0,216,52ZM100,148V108h56v40Zm56,8v40H100V156ZM36,108H92v40H36Zm64-8V60h56v40Zm64,8h56v40H164Zm56-44v36H164V60h52A4,4,0,0,1,220,64ZM40,60H92v40H36V64A4,4,0,0,1,40,60ZM36,192V156H92v40H40A4,4,0,0,1,36,192Zm180,4H164V156h56v36A4,4,0,0,1,216,196Z" }));
});
M.displayName = "Thin";
export {
  M as Thin
};
