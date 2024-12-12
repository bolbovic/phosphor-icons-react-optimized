var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    A.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as s } from "react";
import M from "../../lib/OptiBase.mjs";
const V = s((m, e) => {
  var c = m, { children: a } = c, t = Z(c, ["children"]);
  return /* @__PURE__ */ n.createElement(M, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M208,60a83.5,83.5,0,0,0-33.88,7.16c-13-30.78-43-46.08-44.33-46.74a4,4,0,0,0-3.58,0c-1.32.66-31.3,16-44.33,46.74A83.5,83.5,0,0,0,48,60a4,4,0,0,0-4,4v80a84,84,0,0,0,168,0V64A4,4,0,0,0,208,60ZM124,219.9A76.11,76.11,0,0,1,52,144V124.1A76.11,76.11,0,0,1,124,200Zm0-55.63A84.12,84.12,0,0,0,52,116.1v-48A76.11,76.11,0,0,1,124,144ZM89.05,70.75c10.07-24.22,32.46-38.47,39-42.19,6.49,3.72,28.88,18,38.95,42.19A84.43,84.43,0,0,0,128,118.41,84.43,84.43,0,0,0,89.05,70.75ZM204,144a76.11,76.11,0,0,1-72,75.9V200a76.11,76.11,0,0,1,72-75.9Zm0-27.9a84.12,84.12,0,0,0-72,48.17V144a76.11,76.11,0,0,1,72-75.9Z" }));
});
V.displayName = "Thin";
export {
  V as Thin
};
