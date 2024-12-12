var n = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      h.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var H in a)
    A.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && m)
    for (var H of m(a))
      t.indexOf(H) < 0 && h.call(a, H) && (e[H] = a[H]);
  return e;
};
import V, { forwardRef as v } from "react";
import Z from "../../lib/OptiBase.mjs";
const c = v((H, e) => {
  var r = H, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ V.createElement(Z, i({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M224,164H212v-8a24,24,0,0,0-48,0v8H152a4,4,0,0,0-4,4v40a4,4,0,0,0,4,4h72a4,4,0,0,0,4-4V168A4,4,0,0,0,224,164Zm-52-8a16,16,0,0,1,32,0v8H172Zm48,48H156V172h64ZM216,76H129.66L101.17,47.51A12,12,0,0,0,92.69,44H40A12,12,0,0,0,28,56V200.62A11.4,11.4,0,0,0,39.38,212h73.18a4,4,0,0,0,0-8H39.38A3.39,3.39,0,0,1,36,200.62V84H216a4,4,0,0,1,4,4v16a4,4,0,0,0,8,0V88A12,12,0,0,0,216,76ZM40,52H92.69a4,4,0,0,1,2.82,1.17L118.34,76H36V56A4,4,0,0,1,40,52Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
