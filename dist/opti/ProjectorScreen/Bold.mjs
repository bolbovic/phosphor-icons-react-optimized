var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && V(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && V(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import c, { forwardRef as h } from "react";
import i from "../../lib/OptiBase.mjs";
const s = h((o, e) => {
  var m = o, { children: a } = m, t = H(m, ["children"]);
  return /* @__PURE__ */ c.createElement(i, l({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M236,72V48a20,20,0,0,0-20-20H40A20,20,0,0,0,20,48V72A20,20,0,0,0,36,91.6V164H32a12,12,0,0,0,0,24h84v23.22a24,24,0,1,0,24,0V188h84a12,12,0,0,0,0-24h-4V91.6A20,20,0,0,0,236,72ZM44,52H212V68H44ZM60,164V92H196v72Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
