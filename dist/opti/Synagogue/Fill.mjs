var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var l = (a, V, e) => V in a ? h(a, V, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[V] = e, p = (a, V) => {
  for (var e in V || (V = {}))
    o.call(V, e) && l(a, e, V[e]);
  if (r)
    for (var e of r(V))
      i.call(V, e) && l(a, e, V[e]);
  return a;
};
var c = (a, V) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && V.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      V.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const d = s((t, e) => {
  var m = t, { children: a } = m, V = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(A, p({ ref: e }, V), a, /* @__PURE__ */ f.createElement("path", { d: "M208,57.38V32a8,8,0,0,0-16,0V57.38A24,24,0,0,0,176,80v42.21L136,99.36V72a8,8,0,0,0-16,0V99.36L80,122.21V80A24,24,0,0,0,64,57.38V32a8,8,0,0,0-16,0V57.38A24,24,0,0,0,32,80V216a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V176a16,16,0,0,1,32,0v40a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V80A24,24,0,0,0,208,57.38ZM64,208H48V112H64Zm144,0H192V112h16Z" }));
});
d.displayName = "Fill";
export {
  d as Fill
};
