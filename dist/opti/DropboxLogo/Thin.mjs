var c = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var r = (a, e, l) => e in a ? c(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, i = (a, e) => {
  for (var l in e || (e = {}))
    o.call(e, l) && r(a, l, e[l]);
  if (t)
    for (var l of t(e))
      Z.call(e, l) && r(a, l, e[l]);
  return a;
};
var p = (a, e) => {
  var l = {};
  for (var m in a)
    o.call(a, m) && e.indexOf(m) < 0 && (l[m] = a[m]);
  if (a != null && t)
    for (var m of t(a))
      e.indexOf(m) < 0 && Z.call(a, m) && (l[m] = a[m]);
  return l;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((m, l) => {
  var L = m, { children: a } = L, e = p(L, ["children"]);
  return /* @__PURE__ */ n.createElement(s, i({ ref: l }, e), a, /* @__PURE__ */ n.createElement("path", { d: "M234.28,152.71,187,120l47.25-32.71a4,4,0,0,0,0-6.58l-52-36a4,4,0,0,0-4.56,0L128,79.14,78.28,44.71a4,4,0,0,0-4.56,0l-52,36a4,4,0,0,0,0,6.58L69,120,21.72,152.71a4,4,0,0,0,0,6.58l52,36a4,4,0,0,0,4.56,0L128,160.86l49.72,34.43a4,4,0,0,0,4.56,0l52-36a4,4,0,0,0,0-6.58ZM128,151.14,83,120l45-31.14L173,120Zm52-98.27L225,84l-45,31.13L135,84Zm-104,0L121,84,76,115.13,31,84Zm0,134.26L31,156l45-31.13L121,156Zm104,0L135,156l45-31.13L225,156Zm-24.82,22.05a4,4,0,0,1-1,5.57l-23.89,16.54a4,4,0,0,1-4.56,0l-23.89-16.54a4,4,0,0,1,4.56-6.58l21.61,15,21.61-15A4,4,0,0,1,155.18,209.18Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
