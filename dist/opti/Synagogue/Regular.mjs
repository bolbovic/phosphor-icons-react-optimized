var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var l = (a, V, e) => V in a ? Z(a, V, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[V] = e, A = (a, V) => {
  for (var e in V || (V = {}))
    o.call(V, e) && l(a, e, V[e]);
  if (r)
    for (var e of r(V))
      v.call(V, e) && l(a, e, V[e]);
  return a;
};
var p = (a, V) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && V.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      V.indexOf(t) < 0 && v.call(a, t) && (e[t] = a[t]);
  return e;
};
import H, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const c = f((t, e) => {
  var m = t, { children: a } = m, V = p(m, ["children"]);
  return /* @__PURE__ */ H.createElement(s, A({ ref: e }, V), a, /* @__PURE__ */ H.createElement("path", { d: "M208,57.38V32a8,8,0,0,0-16,0V57.38A24,24,0,0,0,176,80v42.21L136,99.36V72a8,8,0,0,0-16,0V99.36L80,122.21V80A24,24,0,0,0,64,57.38V32a8,8,0,0,0-16,0V57.38A24,24,0,0,0,32,80V216a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8V176a8,8,0,0,1,16,0v40a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8V80A24,24,0,0,0,208,57.38ZM200,72a8,8,0,0,1,8,8v24H192V80A8,8,0,0,1,200,72ZM56,72a8,8,0,0,1,8,8v24H48V80A8,8,0,0,1,56,72Zm-8,48H64v88H48Zm80,32a24,24,0,0,0-24,24v32H80V140.64l48-27.43,48,27.43V208H152V176A24,24,0,0,0,128,152Zm64,56V120h16v88Z" }));
});
c.displayName = "Regular";
export {
  c as Regular,
  c as default
};
