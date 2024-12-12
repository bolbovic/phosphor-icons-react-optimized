var f = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? f(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, L = (a, l) => {
  for (var e in l || (l = {}))
    H.call(l, e) && o(a, e, l[e]);
  if (t)
    for (var e of t(l))
      p.call(l, e) && o(a, e, l[e]);
  return a;
};
var Z = (a, l) => {
  var e = {};
  for (var r in a)
    H.call(a, r) && l.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      l.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const R = i((r, e) => {
  var m = r, { children: a } = m, l = Z(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, L({ ref: e }, l), a, /* @__PURE__ */ c.createElement("path", { d: "M235.34,116.72,139.28,20.66a16,16,0,0,0-22.56,0L20.66,116.72a16,16,0,0,0,0,22.56l96.06,96.06a16,16,0,0,0,22.56,0l96.06-96.06A16,16,0,0,0,235.34,116.72ZM128,32,184,88H160a8,8,0,0,0-5.66,2.34L128,116.68,101.66,90.34A8,8,0,0,0,96,88H72ZM56,104H92.68l24,24-24,24H56L32,128Zm72,120L72,168H96a8,8,0,0,0,5.66-2.34L128,139.31l26.34,26.35A8,8,0,0,0,160,168h24Zm72-72H163.32l-24-24,24-24H200l24,24Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
