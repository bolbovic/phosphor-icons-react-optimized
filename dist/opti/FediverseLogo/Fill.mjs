var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, e, l) => e in a ? Z(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, p = (a, e) => {
  for (var l in e || (e = {}))
    A.call(e, l) && o(a, l, e[l]);
  if (r)
    for (var l of r(e))
      i.call(e, l) && o(a, l, e[l]);
  return a;
};
var L = (a, e) => {
  var l = {};
  for (var t in a)
    A.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      e.indexOf(t) < 0 && i.call(a, t) && (l[t] = a[t]);
  return l;
};
import M, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((t, l) => {
  var m = t, { children: a } = m, e = L(m, ["children"]);
  return /* @__PURE__ */ M.createElement(f, p({ ref: l }, e), a, /* @__PURE__ */ M.createElement("path", { d: "M212,96a27.84,27.84,0,0,0-10.51,2L171,59.94A28,28,0,1,0,120,44a28.65,28.65,0,0,0,.15,2.94L73.68,66.3a28,28,0,1,0-28.6,44.83l1.85,46.38a28,28,0,1,0,32.74,41.42L128,212.47a28,28,0,1,0,49.13-18.79l27.21-42.75A28,28,0,1,0,212,96ZM71.19,104.36,113.72,129,72.26,161.22a28,28,0,0,0-9.34-4.35l-1.85-46.38A28,28,0,0,0,71.19,104.36ZM149.57,72a27.8,27.8,0,0,0,8.94-2L189,108.06a27.86,27.86,0,0,0-4.18,9.22l-46.57,2.22ZM82.09,173.85,124,141.26l15.94,47.83a28.2,28.2,0,0,0-7.6,8L84,183.53A28,28,0,0,0,82.09,173.85ZM156,184l-.89,0-16.18-48.53,46.65-2.22a27.94,27.94,0,0,0,5.28,9l-27.21,42.75A28,28,0,0,0,156,184ZM126.32,61.7A28.44,28.44,0,0,0,134,68.24l-11.3,47.45L79.23,90.52A28,28,0,0,0,80,84a28.65,28.65,0,0,0-.15-2.94Z" }));
});
s.displayName = "Fill";
export {
  s as Fill
};
