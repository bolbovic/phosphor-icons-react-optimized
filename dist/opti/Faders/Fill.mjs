var Z = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var l = (a, V, e) => V in a ? Z(a, V, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[V] = e, i = (a, V) => {
  for (var e in V || (V = {}))
    o.call(V, e) && l(a, e, V[e]);
  if (t)
    for (var e of t(V))
      H.call(V, e) && l(a, e, V[e]);
  return a;
};
var p = (a, V) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && V.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && t)
    for (var m of t(a))
      V.indexOf(m) < 0 && H.call(a, m) && (e[m] = a[m]);
  return e;
};
import v, { forwardRef as A } from "react";
import c from "../../lib/OptiBase.mjs";
const f = A((m, e) => {
  var r = m, { children: a } = r, V = p(r, ["children"]);
  return /* @__PURE__ */ v.createElement(c, i({ ref: e }, V), a, /* @__PURE__ */ v.createElement("path", { d: "M136,120v96a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm64,72a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V200A8,8,0,0,0,200,192Zm24-48H208V40a8,8,0,0,0-16,0V144H176a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,224,144ZM56,160a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V168A8,8,0,0,0,56,160Zm24-48H64V40a8,8,0,0,0-16,0v72H32a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H80a8,8,0,0,0,8-8V120A8,8,0,0,0,80,112Zm72-48H136V40a8,8,0,0,0-16,0V64H104a8,8,0,0,0-8,8V88a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V72A8,8,0,0,0,152,64Z" }));
});
f.displayName = "Fill";
export {
  f as Fill
};
