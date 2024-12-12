var f = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, V, e) => V in a ? f(a, V, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[V] = e, H = (a, V) => {
  for (var e in V || (V = {}))
    o.call(V, e) && m(a, e, V[e]);
  if (t)
    for (var e of t(V))
      p.call(V, e) && m(a, e, V[e]);
  return a;
};
var h = (a, V) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && V.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      V.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const v = i((r, e) => {
  var l = r, { children: a } = l, V = h(l, ["children"]);
  return /* @__PURE__ */ c.createElement(s, H({ ref: e }, V), a, /* @__PURE__ */ c.createElement("path", { d: "M228.12,145.14,192,123.47V104a8,8,0,0,0-4-7L136,67.36V48h16a8,8,0,0,0,0-16H136V16a8,8,0,0,0-16,0V32H104a8,8,0,0,0,0,16h16V67.36L68,97.05a8,8,0,0,0-4,7v19.47L27.88,145.14A8,8,0,0,0,24,152v64a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V168a8,8,0,0,1,16,0v48a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V152A8,8,0,0,0,228.12,145.14ZM40,156.53l24-14.4V208H40ZM128,144a24,24,0,0,0-24,24v40H80V108.64l48-27.43,48,27.43V208H152V168A24,24,0,0,0,128,144Zm88,64H192V142.13l24,14.4Z" }));
});
v.displayName = "Regular";
export {
  v as Regular
};
