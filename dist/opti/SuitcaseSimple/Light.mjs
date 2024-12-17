var f = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && o(a, e, t[e]);
  if (H)
    for (var e of H(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    V.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && H)
    for (var r of H(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const M = h((r, e) => {
  var m = r, { children: a } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M216,58H174V48a22,22,0,0,0-22-22H104A22,22,0,0,0,82,48V58H40A14,14,0,0,0,26,72V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V72A14,14,0,0,0,216,58ZM94,48a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10V58H94ZM40,70H216a2,2,0,0,1,2,2v74H38V72A2,2,0,0,1,40,70ZM216,202H40a2,2,0,0,1-2-2V158H218v42A2,2,0,0,1,216,202Z" }));
});
M.displayName = "Light";
export {
  M as Light
};
