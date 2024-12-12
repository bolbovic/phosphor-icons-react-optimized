var A = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (V)
    for (var e of V(t))
      l.call(t, e) && o(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && V)
    for (var r of V(a))
      t.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((r, e) => {
  var m = r, { children: a } = m, t = L(m, ["children"]);
  return /* @__PURE__ */ n.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M235.3,74.5,129.1,44.15a4.09,4.09,0,0,0-1.67-.11L22.3,59.06A12.06,12.06,0,0,0,12,70.94V185.06a12.06,12.06,0,0,0,10.3,11.88l105.13,15a3.64,3.64,0,0,0,.57,0,4.11,4.11,0,0,0,1.1-.15L235.3,181.5A12,12,0,0,0,244,170V86A12,12,0,0,0,235.3,74.5ZM96,124H76V59.47l48-6.86V203.39l-48-6.86V132H96a4,4,0,0,0,0-8ZM20,185.06V70.94a4,4,0,0,1,3.43-4L68,60.61V124H48a4,4,0,0,0,0,8H68v63.39L23.43,189A4,4,0,0,1,20,185.06ZM236,170a4,4,0,0,1-2.9,3.84L132,202.7V53.3L233.1,82.19A4,4,0,0,1,236,86Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
