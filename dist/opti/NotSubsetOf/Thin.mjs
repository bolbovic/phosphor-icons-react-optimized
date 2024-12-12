var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      h.call(t, e) && i(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && h.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const L = l((r, e) => {
  var o = r, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M210.69,37a4,4,0,0,0-5.65.27L199,44H128A84,84,0,0,0,68.63,187.36L45,213.31A4,4,0,1,0,51,218.69l23.58-25.94A83.64,83.64,0,0,0,128,212h72a4,4,0,0,0,0-8H128a75.66,75.66,0,0,1-48.07-17.18L211,42.69A4,4,0,0,0,210.69,37ZM52,128a76.08,76.08,0,0,1,76-76h63.69L74,181.43A75.75,75.75,0,0,1,52,128Z" }));
});
L.displayName = "Thin";
export {
  L as Thin
};
