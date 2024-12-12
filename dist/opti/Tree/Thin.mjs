var f = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (c)
    for (var e of c(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && c)
    for (var r of c(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var m = r, { children: a } = m, t = l(m, ["children"]);
  return /* @__PURE__ */ n.createElement(V, A({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M195,65.59a72,72,0,0,0-134,0,67.72,67.72,0,0,0-41,62.22c-.1,36,30.24,67.26,66.25,68.17A68.24,68.24,0,0,0,124,185.66V232a4,4,0,0,0,8,0V185.67A68.09,68.09,0,0,0,168,196l1.72,0c36-.91,66.34-32.13,66.24-68.17A67.73,67.73,0,0,0,195,65.59ZM169.55,188A60.15,60.15,0,0,1,132,176v-45.5l45.79-22.89a4,4,0,1,0-3.58-7.16L132,121.53V88a4,4,0,0,0-8,0v57.53L81.79,124.42a4,4,0,1,0-3.58,7.16L124,154.47V176a60,60,0,0,1-37.55,12c-31.77-.8-58.54-28.35-58.45-60.15a59.77,59.77,0,0,1,37.62-55.5A4,4,0,0,0,67.88,70a64,64,0,0,1,120.24,0,4,4,0,0,0,2.26,2.33A59.79,59.79,0,0,1,228,127.83C228.09,159.63,201.32,187.18,169.55,188Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
