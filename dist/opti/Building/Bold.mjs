var l = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var o = (a, e, H) => e in a ? l(a, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : a[e] = H, A = (a, e) => {
  for (var H in e || (e = {}))
    r.call(e, H) && o(a, H, e[H]);
  if (t)
    for (var H of t(e))
      Z.call(e, H) && o(a, H, e[H]);
  return a;
};
var p = (a, e) => {
  var H = {};
  for (var m in a)
    r.call(a, m) && e.indexOf(m) < 0 && (H[m] = a[m]);
  if (a != null && t)
    for (var m of t(a))
      e.indexOf(m) < 0 && Z.call(a, m) && (H[m] = a[m]);
  return H;
};
import d, { forwardRef as M } from "react";
import V from "../../lib/OptiBase.mjs";
const c = M((m, H) => {
  var h = m, { children: a } = h, e = p(h, ["children"]);
  return /* @__PURE__ */ d.createElement(V, A({ ref: H }, e), a, /* @__PURE__ */ d.createElement("path", { d: "M232,220H212V36h4a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24h4V220H24a12,12,0,0,0,0,24H232a12,12,0,0,0,0-24ZM68,36H188V220H164V184a12,12,0,0,0-12-12H104a12,12,0,0,0-12,12v36H68Zm72,184H116V196h24ZM84,64A12,12,0,0,1,96,52h12a12,12,0,0,1,0,24H96A12,12,0,0,1,84,64Zm52,0a12,12,0,0,1,12-12h12a12,12,0,0,1,0,24H148A12,12,0,0,1,136,64ZM84,104A12,12,0,0,1,96,92h12a12,12,0,0,1,0,24H96A12,12,0,0,1,84,104Zm52,0a12,12,0,0,1,12-12h12a12,12,0,0,1,0,24H148A12,12,0,0,1,136,104ZM84,144a12,12,0,0,1,12-12h12a12,12,0,0,1,0,24H96A12,12,0,0,1,84,144Zm52,0a12,12,0,0,1,12-12h12a12,12,0,0,1,0,24H148A12,12,0,0,1,136,144Z" }));
});
c.displayName = "Bold";
export {
  c as Bold
};
