var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var c in a)
    A.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && m)
    for (var c of m(a))
      t.indexOf(c) < 0 && i.call(a, c) && (e[c] = a[c]);
  return e;
};
import n, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const M = l((c, e) => {
  var r = c, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ n.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M171.17,84.83a76,76,0,1,0-86.34,86.34,76,76,0,1,0,86.34-86.34ZM28,96A68,68,0,0,1,162.93,84.07c-1,0-2-.07-2.93-.07a76.08,76.08,0,0,0-76,76c0,1,0,2,.07,2.93A68.1,68.1,0,0,1,28,96Zm136,0a67.59,67.59,0,0,1-7.45,30.89L129.11,99.45A67.59,67.59,0,0,1,160,92c1.3,0,2.6,0,3.88.12C164,93.4,164,94.7,164,96ZM92,160a67.59,67.59,0,0,1,7.45-30.89l27.44,27.44A67.59,67.59,0,0,1,96,164c-1.3,0-2.6-.05-3.88-.12C92.05,162.6,92,161.3,92,160Zm42-7.64L103.64,122A68.74,68.74,0,0,1,122,103.64L152.36,134A68.74,68.74,0,0,1,134,152.36ZM160,228a68.1,68.1,0,0,1-66.93-56.07c1,0,2,.07,2.93.07a76.08,76.08,0,0,0,76-76c0-1,0-2-.07-2.93A68,68,0,0,1,160,228Z" }));
});
M.displayName = "Thin";
export {
  M as Thin
};
