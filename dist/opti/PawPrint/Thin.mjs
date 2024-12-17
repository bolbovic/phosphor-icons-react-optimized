var c = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var r = (a, m, e) => m in a ? c(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    o.call(m, e) && r(a, e, m[e]);
  if (A)
    for (var e of A(m))
      i.call(m, e) && r(a, e, m[e]);
  return a;
};
var n = (a, m) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && A)
    for (var t of A(a))
      m.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import M, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((t, e) => {
  var Z = t, { children: a } = Z, m = n(Z, ["children"]);
  return /* @__PURE__ */ M.createElement(s, p({ ref: e }, m), a, /* @__PURE__ */ M.createElement("path", { d: "M212,84a24,24,0,1,0,24,24A24,24,0,0,0,212,84Zm0,40a16,16,0,1,1,16-16A16,16,0,0,1,212,124ZM68,108a24,24,0,1,0-24,24A24,24,0,0,0,68,108ZM44,124a16,16,0,1,1,16-16A16,16,0,0,1,44,124ZM92,84A24,24,0,1,0,68,60,24,24,0,0,0,92,84Zm0-40A16,16,0,1,1,76,60,16,16,0,0,1,92,44Zm72,40a24,24,0,1,0-24-24A24,24,0,0,0,164,84Zm0-40a16,16,0,1,1-16,16A16,16,0,0,1,164,44Zm21.18,108.36a39.32,39.32,0,0,1-18.77-23.52,40,40,0,0,0-76.82,0,39.3,39.3,0,0,1-18.73,23.51A36,36,0,0,0,102,217.17a68.14,68.14,0,0,1,51.95,0,36,36,0,0,0,31.23-64.79ZM168,212a27.8,27.8,0,0,1-11-2.23,76.16,76.16,0,0,0-58.11,0A27.72,27.72,0,0,1,88,212a28,28,0,0,1-13.29-52.65,47.23,47.23,0,0,0,22.56-28.29,32,32,0,0,1,61.46,0,47.26,47.26,0,0,0,22.6,28.3A28,28,0,0,1,168,212Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
