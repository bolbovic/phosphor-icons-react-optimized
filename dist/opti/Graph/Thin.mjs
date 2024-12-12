var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && l(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((m, e) => {
  var A = m, { children: a } = A, t = Z(A, ["children"]);
  return /* @__PURE__ */ n.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M200,156a27.87,27.87,0,0,0-19.4,7.84l-28.28-22A27.78,27.78,0,0,0,156,128a28.09,28.09,0,0,0-.45-5L175,116.55a28.07,28.07,0,1,0-2.53-7.58L153,115.45A28,28,0,0,0,128,100a27.68,27.68,0,0,0-7.6,1.06l-9.5-21.37A28,28,0,1,0,96,84a27.68,27.68,0,0,0,7.6-1.06l9.5,21.37a27.95,27.95,0,0,0-8.46,39.1L74,170.61a28,28,0,1,0,5.32,6l30.6-27.2a27.92,27.92,0,0,0,37.44-1.23l28.28,22A28,28,0,1,0,200,156Zm0-72a20,20,0,1,1-20,20A20,20,0,0,1,200,84ZM76,56A20,20,0,1,1,96,76,20,20,0,0,1,76,56ZM56,212a20,20,0,1,1,20-20A20,20,0,0,1,56,212Zm72-64a20,20,0,1,1,20-20A20,20,0,0,1,128,148Zm72,56a20,20,0,1,1,20-20A20,20,0,0,1,200,204Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
