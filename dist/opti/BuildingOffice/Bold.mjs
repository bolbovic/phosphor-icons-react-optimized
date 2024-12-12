var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var r = (a, H, e) => H in a ? d(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, Z = (a, H) => {
  for (var e in H || (H = {}))
    h.call(H, e) && r(a, e, H[e]);
  if (m)
    for (var e of m(H))
      V.call(H, e) && r(a, e, H[e]);
  return a;
};
var A = (a, H) => {
  var e = {};
  for (var t in a)
    h.call(a, t) && H.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      H.indexOf(t) < 0 && V.call(a, t) && (e[t] = a[t]);
  return e;
};
import p, { forwardRef as l } from "react";
import M from "../../lib/OptiBase.mjs";
const c = l((t, e) => {
  var o = t, { children: a } = o, H = A(o, ["children"]);
  return /* @__PURE__ */ p.createElement(M, Z({ ref: e }, H), a, /* @__PURE__ */ p.createElement("path", { d: "M244,204H232V99.3A12,12,0,0,0,228,76H188V51.3A12,12,0,0,0,184,28H40a12,12,0,0,0-4,23.3V204H24a12,12,0,0,0,0,24H244a12,12,0,0,0,0-24ZM208,100V204H188V100ZM60,52H164V204H148V160a12,12,0,0,0-12-12H88a12,12,0,0,0-12,12v44H60Zm64,152H100V172h24ZM72,80A12,12,0,0,1,84,68h8a12,12,0,0,1,0,24H84A12,12,0,0,1,72,80Zm48,0a12,12,0,0,1,12-12h8a12,12,0,0,1,0,24h-8A12,12,0,0,1,120,80ZM72,120a12,12,0,0,1,12-12h8a12,12,0,0,1,0,24H84A12,12,0,0,1,72,120Zm48,0a12,12,0,0,1,12-12h8a12,12,0,0,1,0,24h-8A12,12,0,0,1,120,120Z" }));
});
c.displayName = "Bold";
export {
  c as Bold
};
