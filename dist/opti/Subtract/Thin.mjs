var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && c(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((m, e) => {
  var o = m, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M171.17,84.82a76,76,0,1,0-86.35,86.35,76,76,0,1,0,86.35-86.35ZM228,160a68.63,68.63,0,0,1-1.27,13.07l-57.34-57.34A76,76,0,0,0,172,96c0-1,0-2-.07-2.94A67.79,67.79,0,0,1,228,160Zm-81.19-7.54,58.33,58.34A68.14,68.14,0,0,1,182,224.33l-57.78-57.78A76.35,76.35,0,0,0,146.81,152.46Zm5.65-5.65a76.35,76.35,0,0,0,14.09-22.6L224.33,182a68.14,68.14,0,0,1-13.53,23.15ZM28,96a68,68,0,1,1,68,68A68.07,68.07,0,0,1,28,96Zm65.06,75.93c1,0,2,.07,2.94.07a76,76,0,0,0,19.73-2.61l57.34,57.34A68.63,68.63,0,0,1,160,228,67.79,67.79,0,0,1,93.06,171.93Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
