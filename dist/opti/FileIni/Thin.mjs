var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? n(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, A = (a, m) => {
  for (var e in m || (m = {}))
    i.call(m, e) && o(a, e, m[e]);
  if (r)
    for (var e of r(m))
      p.call(m, e) && o(a, e, m[e]);
  return a;
};
var h = (a, m) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import l, { forwardRef as v } from "react";
import Z from "../../lib/OptiBase.mjs";
const c = v((t, e) => {
  var V = t, { children: a } = V, m = h(V, ["children"]);
  return /* @__PURE__ */ l.createElement(Z, A({ ref: e }, m), a, /* @__PURE__ */ l.createElement("path", { d: "M44,152v56a4,4,0,0,1-8,0V152a4,4,0,0,1,8,0Zm76-4a4,4,0,0,0-4,4v43.52L83.25,149.68A4,4,0,0,0,76,152v56a4,4,0,0,0,8,0V164.48l32.75,45.84A4,4,0,0,0,124,208V152A4,4,0,0,0,120,148Zm40,0a4,4,0,0,0-4,4v56a4,4,0,0,0,8,0V152A4,4,0,0,0,160,148Zm52-60V224a4,4,0,0,1-8,0V92H152a4,4,0,0,1-4-4V36H56a4,4,0,0,0-4,4v72a4,4,0,0,1-8,0V40A12,12,0,0,1,56,28h96a4,4,0,0,1,2.83,1.17l56,56A4,4,0,0,1,212,88Zm-56-4h42.34L156,41.65Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
