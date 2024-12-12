var c = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && h(a, e, t[e]);
  if (l)
    for (var e of l(t))
      i.call(t, e) && h(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const A = f((r, e) => {
  var m = r, { children: a } = m, t = L(m, ["children"]);
  return /* @__PURE__ */ n.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M236,80A60,60,0,0,0,133.59,37.56L63.52,106.83A11.9,11.9,0,0,0,60,115.31v75L29.17,221.17a4,4,0,0,0,5.66,5.66L65.66,196h75a12,12,0,0,0,8.48-3.51l0,0L218,122.83h0l.4-.4A59.63,59.63,0,0,0,236,80ZM139.23,43.23A52,52,0,0,1,213.5,116H145.66l41.17-41.17a4,4,0,1,0-5.66-5.66L116,134.34V66.19ZM68,115.31a4,4,0,0,1,1.16-2.81L108,74.1v68.24l-40,40Zm75.51,71.52a4,4,0,0,1-2.82,1.17h-67l64-64h68Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
