var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var H in a)
    i.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && r)
    for (var H of r(a))
      t.indexOf(H) < 0 && p.call(a, H) && (e[H] = a[H]);
  return e;
};
import c, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const M = s((H, e) => {
  var m = H, { children: a } = m, t = V(m, ["children"]);
  return /* @__PURE__ */ c.createElement(A, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M208,52H48A20,20,0,0,0,28,72V184a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V72A20,20,0,0,0,208,52ZM36,92H220v24H160a4,4,0,0,0-4,4,28,28,0,0,1-56,0,4,4,0,0,0-4-4H36ZM48,60H208a12,12,0,0,1,12,12V84H36V72A12,12,0,0,1,48,60ZM208,196H48a12,12,0,0,1-12-12V124H92.22a36,36,0,0,0,71.56,0H220v60A12,12,0,0,1,208,196Z" }));
});
M.displayName = "Thin";
export {
  M as Thin
};
