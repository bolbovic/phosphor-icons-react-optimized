var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      n.call(t, e) && i(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && n.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const s = h((r, e) => {
  var o = r, { children: a } = o, t = V(o, ["children"]);
  return /* @__PURE__ */ c.createElement(l, A({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M160,60H64A12,12,0,0,0,52,72V224a4,4,0,0,0,6.33,3.25L112,188.92l53.69,38.33A3.94,3.94,0,0,0,168,228a4.08,4.08,0,0,0,1.83-.44A4,4,0,0,0,172,224V72A12,12,0,0,0,160,60Zm4,156.23-49.68-35.49a4,4,0,0,0-4.65,0L60,216.23V72a4,4,0,0,1,4-4h96a4,4,0,0,1,4,4ZM204,40V192a4,4,0,0,1-8,0V40a4,4,0,0,0-4-4H88a4,4,0,0,1,0-8H192A12,12,0,0,1,204,40Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
