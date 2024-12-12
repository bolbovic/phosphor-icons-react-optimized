var Z = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var o = (a, e, V) => e in a ? Z(a, e, { enumerable: !0, configurable: !0, writable: !0, value: V }) : a[e] = V, l = (a, e) => {
  for (var V in e || (e = {}))
    v.call(e, V) && o(a, V, e[V]);
  if (t)
    for (var V of t(e))
      A.call(e, V) && o(a, V, e[V]);
  return a;
};
var p = (a, e) => {
  var V = {};
  for (var r in a)
    v.call(a, r) && e.indexOf(r) < 0 && (V[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      e.indexOf(r) < 0 && A.call(a, r) && (V[r] = a[r]);
  return V;
};
import H, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const h = c((r, V) => {
  var m = r, { children: a } = m, e = p(m, ["children"]);
  return /* @__PURE__ */ H.createElement(f, l({ ref: V }, e), a, /* @__PURE__ */ H.createElement("path", { d: "M208,57.38V32a8,8,0,0,0-16,0V57.38A24,24,0,0,0,176,80v42.21L136,99.36V72a8,8,0,0,0-16,0V99.36L80,122.21V80A24,24,0,0,0,64,57.38V32a8,8,0,0,0-16,0V57.38A24,24,0,0,0,32,80V216a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8V176a8,8,0,0,1,16,0v40a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8V80A24,24,0,0,0,208,57.38ZM200,72a8,8,0,0,1,8,8v24H192V80A8,8,0,0,1,200,72ZM56,72a8,8,0,0,1,8,8v24H48V80A8,8,0,0,1,56,72Zm-8,48H64v88H48Zm80,32a24,24,0,0,0-24,24v32H80V140.64l48-27.43,48,27.43V208H152V176A24,24,0,0,0,128,152Zm64,56V120h16v88Z" }));
});
h.displayName = "Regular";
export {
  h as Regular
};
