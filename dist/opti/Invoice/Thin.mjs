var v = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var V = (a, e, H) => e in a ? v(a, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : a[e] = H, i = (a, e) => {
  for (var H in e || (e = {}))
    h.call(e, H) && V(a, H, e[H]);
  if (m)
    for (var H of m(e))
      o.call(e, H) && V(a, H, e[H]);
  return a;
};
var p = (a, e) => {
  var H = {};
  for (var t in a)
    h.call(a, t) && e.indexOf(t) < 0 && (H[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && o.call(a, t) && (H[t] = a[t]);
  return H;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((t, H) => {
  var r = t, { children: a } = r, e = p(r, ["children"]);
  return /* @__PURE__ */ n.createElement(f, i({ ref: H }, e), a, /* @__PURE__ */ n.createElement("path", { d: "M28,124a4,4,0,0,1,0-8H56a12,12,0,0,0,0-24H40a20,20,0,0,1,0-40h4V48a4,4,0,0,1,8,0v4H64a4,4,0,0,1,0,8H40a12,12,0,0,0,0,24H56a20,20,0,0,1,0,40H52v4a4,4,0,0,1-8,0v-4ZM228,56V192a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V152a4,4,0,0,1,8,0v40a4,4,0,0,0,4,4H164V156H80a4,4,0,0,1,0-8h84V108H104a4,4,0,0,1,0-8H220V60H96a4,4,0,0,1,0-8H224A4,4,0,0,1,228,56Zm-56,92h48V108H172Zm48,44V156H172v40h44A4,4,0,0,0,220,192Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
