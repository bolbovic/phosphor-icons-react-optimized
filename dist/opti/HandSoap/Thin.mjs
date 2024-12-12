var c = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (h)
    for (var e of h(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && h)
    for (var r of h(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const A = f((r, e) => {
  var m = r, { children: a } = m, t = V(m, ["children"]);
  return /* @__PURE__ */ n.createElement(s, H({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M180,100.23V88a28,28,0,0,0-28-28H132V28h36a12,12,0,0,1,12,12,4,4,0,0,0,8,0,20,20,0,0,0-20-20H104a4,4,0,0,0,0,8h20V60H104A28,28,0,0,0,76,88v12.23A36,36,0,0,0,44,136v80a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V136A36,36,0,0,0,180,100.23ZM104,68h48a20,20,0,0,1,20,20v12H84V88A20,20,0,0,1,104,68ZM204,216a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V136a28,28,0,0,1,28-28h96a28,28,0,0,1,28,28Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
