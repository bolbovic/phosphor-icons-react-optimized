var v = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var Z = (e, m, t) => m in e ? v(e, m, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[m] = t, o = (e, m) => {
  for (var t in m || (m = {}))
    r.call(m, t) && Z(e, t, m[t]);
  if (V)
    for (var t of V(m))
      h.call(m, t) && Z(e, t, m[t]);
  return e;
};
var i = (e, m) => {
  var t = {};
  for (var H in e)
    r.call(e, H) && m.indexOf(H) < 0 && (t[H] = e[H]);
  if (e != null && V)
    for (var H of V(e))
      m.indexOf(H) < 0 && h.call(e, H) && (t[H] = e[H]);
  return t;
};
import p, { forwardRef as A } from "react";
import M from "../../lib/OptiBase.mjs";
const c = A((H, t) => {
  var a = H, { children: e } = a, m = i(a, ["children"]);
  return /* @__PURE__ */ p.createElement(M, o({ ref: t }, m), e, /* @__PURE__ */ p.createElement("path", { d: "M216,50H40A14,14,0,0,0,26,64V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V64A14,14,0,0,0,216,50ZM102,146V110h52v36Zm52,12v36H102V158ZM38,110H90v36H38Zm64-12V62h52V98Zm64,12h52v36H166Zm52-46V98H166V62h50A2,2,0,0,1,218,64ZM40,62H90V98H38V64A2,2,0,0,1,40,62ZM38,192V158H90v36H40A2,2,0,0,1,38,192Zm178,2H166V158h52v34A2,2,0,0,1,216,194Z" }));
});
c.displayName = "Light";
export {
  c as Light
};
