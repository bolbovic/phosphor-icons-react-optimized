var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && A(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && A(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const M = f((m, e) => {
  var o = m, { children: a } = o, t = Z(o, ["children"]);
  return /* @__PURE__ */ n.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M211,213.31,51,37.31A4,4,0,0,0,45,42.69L63.8,63.32A76,76,0,0,0,124,179.89V204H32a4,4,0,0,0,0,8H199l6.08,6.69a4,4,0,1,0,5.92-5.38ZM100,103.18l26.14,28.75A28,28,0,0,1,100,104C100,103.73,100,103.45,100,103.18ZM60,104a67.62,67.62,0,0,1,9.4-34.52L93,95.48a36,36,0,0,0,40.13,44.14l23.63,26A68,68,0,0,1,60,104Zm72,100V179.89a76.09,76.09,0,0,0,30.39-8.11L191.69,204ZM89,43.33a4,4,0,0,1,1.5-5.45A76,76,0,0,1,190.26,147.6a4,4,0,1,1-6.55-4.59A68,68,0,0,0,94.46,44.83,4,4,0,0,1,89,43.33Zm65.63,69.34a28,28,0,0,0-32.73-36,4,4,0,0,1-1.74-7.81,36,36,0,0,1,42.08,46.28,4,4,0,0,1-3.8,2.77,4.12,4.12,0,0,1-1.24-.2A4,4,0,0,1,154.63,112.67Z" }));
});
M.displayName = "Thin";
export {
  M as Thin
};
