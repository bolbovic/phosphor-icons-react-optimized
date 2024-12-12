var f = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var r = (a, H, e) => H in a ? f(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, d = (a, H) => {
  for (var e in H || (H = {}))
    p.call(H, e) && r(a, e, H[e]);
  if (t)
    for (var e of t(H))
      Z.call(H, e) && r(a, e, H[e]);
  return a;
};
var l = (a, H) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && H.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && t)
    for (var m of t(a))
      H.indexOf(m) < 0 && Z.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((m, e) => {
  var o = m, { children: a } = o, H = l(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: e }, H), a, /* @__PURE__ */ c.createElement("path", { d: "M84,64A12,12,0,0,1,96,52H216a12,12,0,0,1,0,24H96A12,12,0,0,1,84,64Zm132,52H96a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm0,64H96a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24ZM56,52H40a12,12,0,0,0,0,24H56a12,12,0,0,0,0-24Zm0,64H40a12,12,0,0,0,0,24H56a12,12,0,0,0,0-24Zm0,64H40a12,12,0,0,0,0,24H56a12,12,0,0,0,0-24Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
