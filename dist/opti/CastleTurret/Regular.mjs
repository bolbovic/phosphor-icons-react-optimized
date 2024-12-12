var s = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var l = (a, e, V) => e in a ? s(a, e, { enumerable: !0, configurable: !0, writable: !0, value: V }) : a[e] = V, p = (a, e) => {
  for (var V in e || (e = {}))
    m.call(e, V) && l(a, V, e[V]);
  if (H)
    for (var V of H(e))
      o.call(e, V) && l(a, V, e[V]);
  return a;
};
var f = (a, e) => {
  var V = {};
  for (var t in a)
    m.call(a, t) && e.indexOf(t) < 0 && (V[t] = a[t]);
  if (a != null && H)
    for (var t of H(a))
      e.indexOf(t) < 0 && o.call(a, t) && (V[t] = a[t]);
  return V;
};
import h, { forwardRef as A } from "react";
import c from "../../lib/OptiBase.mjs";
const d = A((t, V) => {
  var r = t, { children: a } = r, e = f(r, ["children"]);
  return /* @__PURE__ */ h.createElement(c, p({ ref: V }, e), a, /* @__PURE__ */ h.createElement("path", { d: "M216,216H200V115.31L211.31,104A15.86,15.86,0,0,0,216,92.69V48a16,16,0,0,0-16-16H176a8,8,0,0,0-8,8V64H152V40a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8V64H88V40a8,8,0,0,0-8-8H56A16,16,0,0,0,40,48V92.69A15.86,15.86,0,0,0,44.69,104L56,115.31V216H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM69.66,106.34,56,92.69V48H72V72a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8V48h16V72a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8V48h16V92.69l-13.66,13.65A8,8,0,0,0,184,112V216H160V168a32,32,0,0,0-64,0v48H72V112A8,8,0,0,0,69.66,106.34ZM144,216H112V168a16,16,0,0,1,32,0Z" }));
});
d.displayName = "Regular";
export {
  d as Regular,
  d as default
};
