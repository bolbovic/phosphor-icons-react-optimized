var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    r.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var V in a)
    r.call(a, V) && t.indexOf(V) < 0 && (e[V] = a[V]);
  if (a != null && l)
    for (var V of l(a))
      t.indexOf(V) < 0 && p.call(a, V) && (e[V] = a[V]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const A = i((V, e) => {
  var m = V, { children: a } = m, t = Z(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M253.76,93A12,12,0,0,0,237,90.24l-9,6.44V80a12,12,0,0,0-12-12H40A12,12,0,0,0,28,80V96.68l-9-6.44A12,12,0,1,0,5,109.76l23,16.42V184a36,36,0,0,0,36,36H192a36,36,0,0,0,36-36V126.18l23-16.42A12,12,0,0,0,253.76,93ZM204,184a12,12,0,0,1-12,12H64a12,12,0,0,1-12-12V92H204ZM76,40V16a12,12,0,0,1,24,0V40a12,12,0,0,1-24,0Zm40,0V16a12,12,0,0,1,24,0V40a12,12,0,0,1-24,0Zm40,0V16a12,12,0,0,1,24,0V40a12,12,0,0,1-24,0Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
