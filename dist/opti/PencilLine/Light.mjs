var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, M = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      L.call(t, e) && i(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && L.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const d = l((r, e) => {
  var o = r, { children: a } = o, t = Z(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, M({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M225.91,74.79,181.22,30.1a14,14,0,0,0-19.8,0L38.1,153.41a13.94,13.94,0,0,0-4.1,9.9V208a14,14,0,0,0,14,14H216a6,6,0,0,0,0-12H110.49L225.91,94.59A14,14,0,0,0,225.91,74.79ZM76.49,188,164,100.48,183.52,120,96,207.51ZM68,179.52,48.49,160,136,72.49,155.52,92ZM46,208V174.48L81.52,210H48A2,2,0,0,1,46,208ZM217.42,86.1,192,111.52,144.49,64,169.9,38.59a2,2,0,0,1,2.83,0l44.69,44.68A2,2,0,0,1,217.42,86.1Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
