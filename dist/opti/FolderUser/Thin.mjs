var s = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (A)
    for (var e of A(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && A)
    for (var r of A(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const M = f((r, e) => {
  var m = r, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ n.createElement(h, H({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M207.5,199.3a28,28,0,1,0-31,0A36.24,36.24,0,0,0,156.13,223a4,4,0,0,0,2.84,4.89,3.7,3.7,0,0,0,1,.14,4,4,0,0,0,3.87-3c3.29-12.38,14.85-21,28.13-21s24.84,8.65,28.13,21a4,4,0,1,0,7.73-2.05A36.22,36.22,0,0,0,207.5,199.3ZM172,176a20,20,0,1,1,20,20A20,20,0,0,1,172,176ZM216,76H129.66L101.17,47.51A12,12,0,0,0,92.69,44H40A12,12,0,0,0,28,56V200.61A11.4,11.4,0,0,0,39.38,212h81.18a4,4,0,0,0,0-8H39.38A3.39,3.39,0,0,1,36,200.61V84H216a4,4,0,0,1,4,4v32a4,4,0,0,0,8,0V88A12,12,0,0,0,216,76ZM40,52H92.69a4,4,0,0,1,2.82,1.17L118.34,76H36V56A4,4,0,0,1,40,52Z" }));
});
M.displayName = "Thin";
export {
  M as Thin
};
