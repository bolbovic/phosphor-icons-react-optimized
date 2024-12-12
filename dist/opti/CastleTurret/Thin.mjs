var n = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var h = (a, e, V) => e in a ? n(a, e, { enumerable: !0, configurable: !0, writable: !0, value: V }) : a[e] = V, i = (a, e) => {
  for (var V in e || (e = {}))
    m.call(e, V) && h(a, V, e[V]);
  if (t)
    for (var V of t(e))
      o.call(e, V) && h(a, V, e[V]);
  return a;
};
var p = (a, e) => {
  var V = {};
  for (var H in a)
    m.call(a, H) && e.indexOf(H) < 0 && (V[H] = a[H]);
  if (a != null && t)
    for (var H of t(a))
      e.indexOf(H) < 0 && o.call(a, H) && (V[H] = a[H]);
  return V;
};
import l, { forwardRef as A } from "react";
import c from "../../lib/OptiBase.mjs";
const f = A((H, V) => {
  var r = H, { children: a } = r, e = p(r, ["children"]);
  return /* @__PURE__ */ l.createElement(c, i({ ref: V }, e), a, /* @__PURE__ */ l.createElement("path", { d: "M216,220H196V113.66l12.49-12.49A11.93,11.93,0,0,0,212,92.69V48a12,12,0,0,0-12-12H176a4,4,0,0,0-4,4V68H148V40a4,4,0,0,0-4-4H112a4,4,0,0,0-4,4V68H84V40a4,4,0,0,0-4-4H56A12,12,0,0,0,44,48V92.69a11.93,11.93,0,0,0,3.51,8.48L60,113.66V220H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8ZM66.83,109.17,53.17,95.51A4,4,0,0,1,52,92.69V48a4,4,0,0,1,4-4H76V72a4,4,0,0,0,4,4h32a4,4,0,0,0,4-4V44h24V72a4,4,0,0,0,4,4h32a4,4,0,0,0,4-4V44h20a4,4,0,0,1,4,4V92.69a4,4,0,0,1-1.17,2.82l-13.66,13.66A4,4,0,0,0,188,112V220H156V168a28,28,0,0,0-56,0v52H68V112A4,4,0,0,0,66.83,109.17ZM148,220H108V168a20,20,0,0,1,40,0Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
