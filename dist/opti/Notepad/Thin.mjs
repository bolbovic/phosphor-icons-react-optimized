var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var H = (a, e, V) => e in a ? c(a, e, { enumerable: !0, configurable: !0, writable: !0, value: V }) : a[e] = V, i = (a, e) => {
  for (var V in e || (e = {}))
    h.call(e, V) && H(a, V, e[V]);
  if (m)
    for (var V of m(e))
      o.call(e, V) && H(a, V, e[V]);
  return a;
};
var p = (a, e) => {
  var V = {};
  for (var t in a)
    h.call(a, t) && e.indexOf(t) < 0 && (V[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && o.call(a, t) && (V[t] = a[t]);
  return V;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = f((t, V) => {
  var r = t, { children: a } = r, e = p(r, ["children"]);
  return /* @__PURE__ */ n.createElement(s, i({ ref: V }, e), a, /* @__PURE__ */ n.createElement("path", { d: "M164,128a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,128Zm-4,28H96a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8ZM212,40V200a28,28,0,0,1-28,28H72a28,28,0,0,1-28-28V40a4,4,0,0,1,4-4H76V24a4,4,0,0,1,8,0V36h40V24a4,4,0,0,1,8,0V36h40V24a4,4,0,0,1,8,0V36h28A4,4,0,0,1,212,40Zm-8,4H180V56a4,4,0,0,1-8,0V44H132V56a4,4,0,0,1-8,0V44H84V56a4,4,0,0,1-8,0V44H52V200a20,20,0,0,0,20,20H184a20,20,0,0,0,20-20Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
