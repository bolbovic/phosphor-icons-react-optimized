var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import V, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((l, e) => {
  var m = l, { children: a } = m, t = L(m, ["children"]);
  return /* @__PURE__ */ V.createElement(s, H({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM136,200a8,8,0,0,1-16,0V160a8,8,0,0,1,16,0Zm48-80H147.31l26.35,26.34a8,8,0,0,1-11.32,11.32L128,123.31,93.66,157.66a8,8,0,0,1-11.32-11.32L108.69,120H72a8,8,0,0,1,0-16h36.69L82.34,77.66A8,8,0,0,1,93.66,66.34L120,92.69V56a8,8,0,0,1,16,0V92.69l26.34-26.35a8,8,0,0,1,11.32,11.32L147.31,104H184a8,8,0,0,1,0,16Z" }));
});
d.displayName = "Fill";
export {
  d as Fill
};
