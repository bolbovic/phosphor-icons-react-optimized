var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var r = (a, e, l) => e in a ? i(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, o = (a, e) => {
  for (var l in e || (e = {}))
    V.call(e, l) && r(a, l, e[l]);
  if (m)
    for (var l of m(e))
      h.call(e, l) && r(a, l, e[l]);
  return a;
};
var H = (a, e) => {
  var l = {};
  for (var t in a)
    V.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && h.call(a, t) && (l[t] = a[t]);
  return l;
};
import M, { forwardRef as p } from "react";
import n from "../../lib/OptiBase.mjs";
const v = p((t, l) => {
  var Z = t, { children: a } = Z, e = H(Z, ["children"]);
  return /* @__PURE__ */ M.createElement(n, o({ ref: l }, e), a, /* @__PURE__ */ M.createElement("path", { d: "M216,92H164V40a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V160a4,4,0,0,0,4,4H92v52a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4V96A4,4,0,0,0,216,92ZM161.66,212l-48-48h44.68l48,48ZM44,49.66l48,48v44.68l-48-48ZM94.34,44l48,48H97.66l-48-48ZM100,156V100h56v56Zm64,2.34V113.66l48,48v44.68ZM212,100v50.34l-48-48V100Zm-56-8h-2.34l-48-48H156ZM44,156V105.66l48,48V156Zm56,8h2.34l48,48H100Z" }));
});
v.displayName = "Thin";
export {
  v as Thin
};
