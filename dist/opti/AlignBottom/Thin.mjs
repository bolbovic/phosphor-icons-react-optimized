var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? Z(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, H = (a, m) => {
  for (var e in m || (m = {}))
    i.call(m, e) && o(a, e, m[e]);
  if (r)
    for (var e of r(m))
      p.call(m, e) && o(a, e, m[e]);
  return a;
};
var n = (a, m) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import V, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((t, e) => {
  var h = t, { children: a } = h, m = n(h, ["children"]);
  return /* @__PURE__ */ V.createElement(f, H({ ref: e }, m), a, /* @__PURE__ */ V.createElement("path", { d: "M220,216a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,216Zm-80-40V80a12,12,0,0,1,12-12h40a12,12,0,0,1,12,12v96a12,12,0,0,1-12,12H152A12,12,0,0,1,140,176Zm8,0a4,4,0,0,0,4,4h40a4,4,0,0,0,4-4V80a4,4,0,0,0-4-4H152a4,4,0,0,0-4,4Zm-96,0V40A12,12,0,0,1,64,28h40a12,12,0,0,1,12,12V176a12,12,0,0,1-12,12H64A12,12,0,0,1,52,176Zm8,0a4,4,0,0,0,4,4h40a4,4,0,0,0,4-4V40a4,4,0,0,0-4-4H64a4,4,0,0,0-4,4Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
