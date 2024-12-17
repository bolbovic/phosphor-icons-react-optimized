var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && V(a, e, t[e]);
  if (r)
    for (var e of r(t))
      H.call(t, e) && V(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && H.call(a, o) && (e[o] = a[o]);
  return e;
};
import c, { forwardRef as h } from "react";
import i from "../../lib/OptiBase.mjs";
const s = h((o, e) => {
  var m = o, { children: a } = m, t = l(m, ["children"]);
  return /* @__PURE__ */ c.createElement(i, d({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M247.8,66.83,228.49,47.51a12,12,0,0,0-17,17L230.83,83.8A4,4,0,0,1,232,86.63V166a6,6,0,0,1-12,0V128a28,28,0,0,0-28-28H180V56a28,28,0,0,0-28-28H72A28,28,0,0,0,44,56V204H32a12,12,0,0,0,0,24H192a12,12,0,0,0,0-24H180V124h12a4,4,0,0,1,4,4v38a30,30,0,0,0,60,0V86.63A27.81,27.81,0,0,0,247.8,66.83ZM68,204V56a4,4,0,0,1,4-4h80a4,4,0,0,1,4,4V204Zm72-92a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h32A12,12,0,0,1,140,112Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
