var A = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var Z = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && Z(a, e, t[e]);
  if (o)
    for (var e of o(t))
      l.call(t, e) && Z(a, e, t[e]);
  return a;
};
var v = (a, t) => {
  var e = {};
  for (var m in a)
    c.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import r, { forwardRef as V } from "react";
import i from "../../lib/OptiBase.mjs";
const d = V((m, e) => {
  var p = m, { children: a } = p, t = v(p, ["children"]);
  return /* @__PURE__ */ r.createElement(i, n({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M32,136h72v28a36,36,0,0,1-72,0Zm120,0v28a36,36,0,0,0,72,0V136Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M200,40a8,8,0,0,0,0,16,16,16,0,0,1,16,16v56H40V72A16,16,0,0,1,56,56a8,8,0,0,0,0-16A32,32,0,0,0,24,72v92a44,44,0,0,0,88,0V144h32v20a44,44,0,0,0,88,0V72A32,32,0,0,0,200,40Zm12.63,137.31L179.31,144H216v20A27.8,27.8,0,0,1,212.63,177.31ZM40,164V147.31l41.31,41.32A28,28,0,0,1,40,164Zm56,0a27.8,27.8,0,0,1-3.37,13.31L59.31,144H96Zm64,0V147.31l41.31,41.32A28,28,0,0,1,160,164Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
