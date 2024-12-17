var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import A, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((r, e) => {
  var o = r, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ A.createElement(s, h({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M243.58,214.21l-56-112a4,4,0,0,0-7.16,0L157.55,148A92.05,92.05,0,0,1,102,127.36,99.68,99.68,0,0,0,131.91,60H160a4,4,0,0,0,0-8H100V32a4,4,0,0,0-8,0V52H32a4,4,0,0,0,0,8h91.91A91.8,91.8,0,0,1,96,122.05,92,92,0,0,1,73.23,86.67a4,4,0,1,0-7.54,2.66,99.59,99.59,0,0,0,24.3,38A91.59,91.59,0,0,1,32,148a4,4,0,0,0,0,8,99.54,99.54,0,0,0,64-23.21,100.09,100.09,0,0,0,57.66,23l-29.22,58.43a4,4,0,1,0,7.16,3.58L146.47,188h75.06l14.89,29.79A4,4,0,0,0,240,220a4.12,4.12,0,0,0,1.79-.42A4,4,0,0,0,243.58,214.21ZM150.47,180,184,112.94,217.53,180Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
