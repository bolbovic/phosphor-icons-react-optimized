var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var H = (a, m, e) => m in a ? A(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, i = (a, m) => {
  for (var e in m || (m = {}))
    h.call(m, e) && H(a, e, m[e]);
  if (r)
    for (var e of r(m))
      o.call(m, e) && H(a, e, m[e]);
  return a;
};
var p = (a, m) => {
  var e = {};
  for (var t in a)
    h.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import n, { forwardRef as V } from "react";
import c from "../../lib/OptiBase.mjs";
const f = V((t, e) => {
  var Z = t, { children: a } = Z, m = p(Z, ["children"]);
  return /* @__PURE__ */ n.createElement(c, i({ ref: e }, m), a, /* @__PURE__ */ n.createElement("path", { d: "M214.4,128A28,28,0,1,0,180,84.43V56a28,28,0,0,0-52-14.4A28,28,0,1,0,84.43,76H56a28,28,0,0,0-14.4,52A28,28,0,1,0,76,171.57V200a28,28,0,0,0,52,14.41A28,28,0,1,0,171.57,180H200a28,28,0,0,0,14.4-52ZM76,152a20,20,0,1,1-20-20H76Zm48,48a20,20,0,0,1-40,0V152a20,20,0,0,1,20-20h20Zm0-76H56a20,20,0,0,1,0-40h48a20,20,0,0,1,20,20Zm0-48H104a20,20,0,1,1,20-20Zm56,28a20,20,0,1,1,20,20H180ZM132,56a20,20,0,0,1,40,0v48a20,20,0,0,1-20,20H132Zm40,144a20,20,0,0,1-40,0V180h20A20,20,0,0,1,172,200Zm28-28H152a20,20,0,0,1-20-20V132h68a20,20,0,0,1,0,40Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
