var c = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var l = (a, m, e) => m in a ? c(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    o.call(m, e) && l(a, e, m[e]);
  if (t)
    for (var e of t(m))
      A.call(m, e) && l(a, e, m[e]);
  return a;
};
var v = (a, m) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && m.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      m.indexOf(r) < 0 && A.call(a, r) && (e[r] = a[r]);
  return e;
};
import Z, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((r, e) => {
  var V = r, { children: a } = V, m = v(V, ["children"]);
  return /* @__PURE__ */ Z.createElement(i, p({ ref: e }, m), a, /* @__PURE__ */ Z.createElement("path", { d: "M48,152v56a8,8,0,0,1-16,0V152a8,8,0,0,1,16,0Zm72-8a8,8,0,0,0-8,8v31L86.51,147.35A8,8,0,0,0,72,152v56a8,8,0,0,0,16,0V177l25.49,35.69A8,8,0,0,0,120,216a7.91,7.91,0,0,0,2.44-.38A8,8,0,0,0,128,208V152A8,8,0,0,0,120,144Zm40,0a8,8,0,0,0-8,8v56a8,8,0,0,0,16,0V152A8,8,0,0,0,160,144Zm56-56V224a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31Z" }));
});
s.displayName = "Regular";
export {
  s as Regular
};
