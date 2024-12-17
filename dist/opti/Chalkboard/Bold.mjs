var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    m.call(t, e) && V(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && V(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var H in a)
    m.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && o)
    for (var H of o(a))
      t.indexOf(H) < 0 && p.call(a, H) && (e[H] = a[H]);
  return e;
};
import c, { forwardRef as h } from "react";
import i from "../../lib/OptiBase.mjs";
const s = h((H, e) => {
  var r = H, { children: a } = r, t = l(r, ["children"]);
  return /* @__PURE__ */ c.createElement(i, d({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M240,188h-4V56a20,20,0,0,0-20-20H40A20,20,0,0,0,20,56V188H16a12,12,0,0,0,0,24H240a12,12,0,0,0,0-24ZM44,60H212V188H196V160a12,12,0,0,0-12-12H120a12,12,0,0,0-12,12v28H84V100h88v20a12,12,0,0,0,24,0V88a12,12,0,0,0-12-12H72A12,12,0,0,0,60,88V188H44ZM172,188H132V172h40Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
