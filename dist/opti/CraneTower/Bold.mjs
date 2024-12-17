var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, H, e) => H in a ? f(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, V = (a, H) => {
  for (var e in H || (H = {}))
    l.call(H, e) && r(a, e, H[e]);
  if (m)
    for (var e of m(H))
      p.call(H, e) && r(a, e, H[e]);
  return a;
};
var d = (a, H) => {
  var e = {};
  for (var t in a)
    l.call(a, t) && H.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      H.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as h } from "react";
import i from "../../lib/OptiBase.mjs";
const s = h((t, e) => {
  var o = t, { children: a } = o, H = d(o, ["children"]);
  return /* @__PURE__ */ c.createElement(i, V({ ref: e }, H), a, /* @__PURE__ */ c.createElement("path", { d: "M240,76H111.42L90.73,34.63A12,12,0,0,0,80,28H48A12,12,0,0,0,36,40V76H24a12,12,0,0,0,0,24H36V204H24a12,12,0,0,0,0,24H128a12,12,0,0,0,0-24H116V100h88v80H192v-4a12,12,0,0,0-24,0v8a20,20,0,0,0,20,20h20a20,20,0,0,0,20-20V100h12a12,12,0,0,0,0-24ZM60,52H72.58l12,24H60Zm0,152V164H92v40Zm32-64H60V100H92Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
