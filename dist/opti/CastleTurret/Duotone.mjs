var n = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, e, V) => e in a ? n(a, e, { enumerable: !0, configurable: !0, writable: !0, value: V }) : a[e] = V, A = (a, e) => {
  for (var V in e || (e = {}))
    m.call(e, V) && r(a, V, e[V]);
  if (H)
    for (var V of H(e))
      p.call(e, V) && r(a, V, e[V]);
  return a;
};
var c = (a, e) => {
  var V = {};
  for (var t in a)
    m.call(a, t) && e.indexOf(t) < 0 && (V[t] = a[t]);
  if (a != null && H)
    for (var t of H(a))
      e.indexOf(t) < 0 && p.call(a, t) && (V[t] = a[t]);
  return V;
};
import o, { forwardRef as i } from "react";
import l from "../../lib/OptiBase.mjs";
const d = i((t, V) => {
  var h = t, { children: a } = h, e = c(h, ["children"]);
  return /* @__PURE__ */ o.createElement(l, A({ ref: V }, e), a, /* @__PURE__ */ o.createElement(
    "path",
    {
      d: "M208,48V92.69a8,8,0,0,1-2.34,5.65L192,112V224H152V168a24,24,0,0,0-48,0v56H64V112L50.34,98.34A8,8,0,0,1,48,92.69V48a8,8,0,0,1,8-8H80V72h32V40h32V72h32V40h24A8,8,0,0,1,208,48Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ o.createElement("path", { d: "M216,216H200V115.31L211.31,104A15.86,15.86,0,0,0,216,92.69V48a16,16,0,0,0-16-16H176a8,8,0,0,0-8,8V64H152V40a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8V64H88V40a8,8,0,0,0-8-8H56A16,16,0,0,0,40,48V92.69A15.86,15.86,0,0,0,44.69,104L56,115.31V216H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM69.66,106.34,56,92.69V48H72V72a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8V48h16V72a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8V48h16V92.69l-13.66,13.65A8,8,0,0,0,184,112V216H160V168a32,32,0,0,0-64,0v48H72V112A8,8,0,0,0,69.66,106.34ZM144,216H112V168a16,16,0,0,1,32,0Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
