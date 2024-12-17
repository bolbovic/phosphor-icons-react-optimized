var n = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      l.call(t, e) && p(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var V in a)
    H.call(a, V) && t.indexOf(V) < 0 && (e[V] = a[V]);
  if (a != null && o)
    for (var V of o(a))
      t.indexOf(V) < 0 && l.call(a, V) && (e[V] = a[V]);
  return e;
};
import r, { forwardRef as Z } from "react";
import i from "../../lib/OptiBase.mjs";
const v = Z((V, e) => {
  var m = V, { children: a } = m, t = h(m, ["children"]);
  return /* @__PURE__ */ r.createElement(i, c({ ref: e }, t), a, /* @__PURE__ */ r.createElement("path", { d: "M224,152v64H184V128ZM32,216H72V128L32,152Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M228.12,145.14,192,123.47V104a8,8,0,0,0-4-7L136,67.36V48h16a8,8,0,0,0,0-16H136V16a8,8,0,0,0-16,0V32H104a8,8,0,0,0,0,16h16V67.36L68,97.05a8,8,0,0,0-4,7v19.47L27.88,145.14A8,8,0,0,0,24,152v64a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V168a8,8,0,0,1,16,0v48a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V152A8,8,0,0,0,228.12,145.14ZM40,156.53l24-14.4V208H40ZM128,144a24,24,0,0,0-24,24v40H80V108.64l48-27.43,48,27.43V208H152V168A24,24,0,0,0,128,144Zm88,64H192V142.13l24,14.4Z" }));
});
v.displayName = "Duotone";
export {
  v as Duotone
};
