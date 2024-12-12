var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      o.call(t, e) && l(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    Z.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && o.call(a, m) && (e[m] = a[m]);
  return e;
};
import A, { forwardRef as h } from "react";
import n from "../../lib/OptiBase.mjs";
const M = h((m, e) => {
  var V = m, { children: a } = V, t = p(V, ["children"]);
  return /* @__PURE__ */ A.createElement(n, i({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M228,48V88a4,4,0,0,1-8,0V52H184a4,4,0,0,1,0-8h40A4,4,0,0,1,228,48ZM72,204H36V168a4,4,0,0,0-8,0v40a4,4,0,0,0,4,4H72a4,4,0,0,0,0-8Zm152-40a4,4,0,0,0-4,4v36H184a4,4,0,0,0,0,8h40a4,4,0,0,0,4-4V168A4,4,0,0,0,224,164ZM32,92a4,4,0,0,0,4-4V52H72a4,4,0,0,0,0-8H32a4,4,0,0,0-4,4V88A4,4,0,0,0,32,92Zm154,71.47-56,32a4,4,0,0,1-4,0l-56-32A4,4,0,0,1,68,160V96a4,4,0,0,1,2-3.47l56-32a4,4,0,0,1,4,0l56,32A4,4,0,0,1,188,96v64A4,4,0,0,1,186,163.47ZM80.06,96,128,123.39,175.94,96,128,68.61ZM76,157.68l48,27.43V130.32L76,102.89Zm104,0V102.89l-48,27.43v54.79Z" }));
});
M.displayName = "Thin";
export {
  M as Thin
};
