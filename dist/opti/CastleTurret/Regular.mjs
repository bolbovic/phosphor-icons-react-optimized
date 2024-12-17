var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (a, e, V) => e in a ? c(a, e, { enumerable: !0, configurable: !0, writable: !0, value: V }) : a[e] = V, p = (a, e) => {
  for (var V in e || (e = {}))
    o.call(e, V) && m(a, V, e[V]);
  if (r)
    for (var V of r(e))
      l.call(e, V) && m(a, V, e[V]);
  return a;
};
var h = (a, e) => {
  var V = {};
  for (var H in a)
    o.call(a, H) && e.indexOf(H) < 0 && (V[H] = a[H]);
  if (a != null && r)
    for (var H of r(a))
      e.indexOf(H) < 0 && l.call(a, H) && (V[H] = a[H]);
  return V;
};
import A, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((H, V) => {
  var t = H, { children: a } = t, e = h(t, ["children"]);
  return /* @__PURE__ */ A.createElement(i, p({ ref: V }, e), a, /* @__PURE__ */ A.createElement("path", { d: "M216,216H200V115.31L211.31,104A15.86,15.86,0,0,0,216,92.69V48a16,16,0,0,0-16-16H176a8,8,0,0,0-8,8V64H152V40a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8V64H88V40a8,8,0,0,0-8-8H56A16,16,0,0,0,40,48V92.69A15.86,15.86,0,0,0,44.69,104L56,115.31V216H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM69.66,106.34,56,92.69V48H72V72a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8V48h16V72a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8V48h16V92.69l-13.66,13.65A8,8,0,0,0,184,112V216H160V168a32,32,0,0,0-64,0v48H72V112A8,8,0,0,0,69.66,106.34ZM144,216H112V168a16,16,0,0,1,32,0Z" }));
});
s.displayName = "Regular";
export {
  s as Regular
};
