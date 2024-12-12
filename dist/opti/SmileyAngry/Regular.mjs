var i = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? i(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, Z = (a, m) => {
  for (var e in m || (m = {}))
    p.call(m, e) && o(a, e, m[e]);
  if (t)
    for (var e of t(m))
      s.call(m, e) && o(a, e, m[e]);
  return a;
};
var c = (a, m) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && m.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      m.indexOf(r) < 0 && s.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as A } from "react";
import R from "../../lib/OptiBase.mjs";
const d = A((r, e) => {
  var l = r, { children: a } = l, m = c(l, ["children"]);
  return /* @__PURE__ */ f.createElement(R, Z({ ref: e }, m), a, /* @__PURE__ */ f.createElement("path", { d: "M92,152a12,12,0,1,1,12-12A12,12,0,0,1,92,152Zm72-24a12,12,0,1,0,12,12A12,12,0,0,0,164,128Zm68,0A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128ZM171.56,81.34,128,110.39l-43.56-29a8,8,0,1,0-8.88,13.32l48,32a8,8,0,0,0,8.88,0l48-32a8,8,0,0,0-8.88-13.32Zm-15.13,96C148,171.73,139.94,168,128,168s-20,3.73-28.43,9.34a8,8,0,0,0,8.86,13.32C114.93,186.34,120,184,128,184s13.07,2.34,19.57,6.66a8,8,0,1,0,8.86-13.32Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
