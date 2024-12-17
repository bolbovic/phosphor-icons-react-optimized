var v = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? v(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && p(a, e, t[e]);
  if (m)
    for (var e of m(t))
      Z.call(t, e) && p(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var o in a)
    H.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && Z.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as A } from "react";
import i from "../../lib/OptiBase.mjs";
const M = A((o, e) => {
  var V = o, { children: a } = V, t = n(V, ["children"]);
  return /* @__PURE__ */ r.createElement(i, c({ ref: e }, t), a, /* @__PURE__ */ r.createElement("path", { d: "M208,72V184H48V72Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M88,144V128a8,8,0,0,1,16,0v16a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V120a8,8,0,0,0-16,0v24A8,8,0,0,0,128,152Zm32,0a8,8,0,0,0,8-8V112a8,8,0,0,0-16,0v32A8,8,0,0,0,160,152Zm56-72v96h8a8,8,0,0,1,0,16H136v17.38a24,24,0,1,1-16,0V192H32a8,8,0,0,1,0-16h8V80A16,16,0,0,1,24,64V48A16,16,0,0,1,40,32H216a16,16,0,0,1,16,16V64A16,16,0,0,1,216,80ZM136,232a8,8,0,1,0-8,8A8,8,0,0,0,136,232ZM40,64H216V48H40ZM200,80H56v96H200Z" }));
});
M.displayName = "Duotone";
export {
  M as Duotone
};
