var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const A = h((m, e) => {
  var H = m, { children: a } = H, t = n(H, ["children"]);
  return /* @__PURE__ */ c.createElement(s, Z({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M108.16,122.74A34,34,0,0,0,90,60H32a4,4,0,0,0-4,4V192a4,4,0,0,0,4,4H94a38,38,0,0,0,14.16-73.26ZM36,68H90a26,26,0,0,1,0,52H36ZM94,188H36V128H94a30,30,0,0,1,0,60ZM164,80a4,4,0,0,1,4-4h64a4,4,0,0,1,0,8H168A4,4,0,0,1,164,80Zm36,28a44,44,0,1,0,35.2,70.41,4,4,0,0,0-6.4-4.81A36,36,0,0,1,164.22,156H240a4,4,0,0,0,4-4A44.05,44.05,0,0,0,200,108Zm-35.78,40a36,36,0,0,1,71.56,0Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
