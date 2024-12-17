var c = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? c(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, A = (a, m) => {
  for (var e in m || (m = {}))
    V.call(m, e) && o(a, e, m[e]);
  if (t)
    for (var e of t(m))
      p.call(m, e) && o(a, e, m[e]);
  return a;
};
var Z = (a, m) => {
  var e = {};
  for (var r in a)
    V.call(a, r) && m.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      m.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import H, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((r, e) => {
  var l = r, { children: a } = l, m = Z(l, ["children"]);
  return /* @__PURE__ */ H.createElement(i, A({ ref: e }, m), a, /* @__PURE__ */ H.createElement("path", { d: "M128,136a8,8,0,0,1-8,8H72a8,8,0,0,1,0-16h48A8,8,0,0,1,128,136Zm-8-40H72a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm112,65.47V224A8,8,0,0,1,220,231l-24-13.74L172,231A8,8,0,0,1,160,224V200H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216a16,16,0,0,1,16,16V86.53a51.88,51.88,0,0,1,0,74.94ZM160,184V161.47A52,52,0,0,1,216,76V56H40V184Zm56-12a51.88,51.88,0,0,1-40,0v38.22l16-9.16a8,8,0,0,1,7.94,0l16,9.16Zm16-48a36,36,0,1,0-36,36A36,36,0,0,0,232,124Z" }));
});
s.displayName = "Regular";
export {
  s as Regular
};
