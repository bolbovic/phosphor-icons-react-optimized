var v = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var r = (a, m, e) => m in a ? v(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    Z.call(m, e) && r(a, e, m[e]);
  if (V)
    for (var e of V(m))
      H.call(m, e) && r(a, e, m[e]);
  return a;
};
var d = (a, m) => {
  var e = {};
  for (var t in a)
    Z.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && V)
    for (var t of V(a))
      m.indexOf(t) < 0 && H.call(a, t) && (e[t] = a[t]);
  return e;
};
import l, { forwardRef as A } from "react";
import c from "../../lib/OptiBase.mjs";
const f = A((t, e) => {
  var o = t, { children: a } = o, m = d(o, ["children"]);
  return /* @__PURE__ */ l.createElement(c, p({ ref: e }, m), a, /* @__PURE__ */ l.createElement("path", { d: "M184,28H72A36,36,0,0,0,36,64V208a20,20,0,0,0,20,20H84a20,20,0,0,0,20-20V192h48v16a20,20,0,0,0,20,20h28a20,20,0,0,0,20-20V64A36,36,0,0,0,184,28ZM60,168V112H196v56ZM72,52H184a12,12,0,0,1,12,12V88H60V64A12,12,0,0,1,72,52Zm8,152H60V192H80Zm96,0V192h20v12Zm-68-64a16,16,0,1,1-16-16A16,16,0,0,1,108,140Zm72,0a16,16,0,1,1-16-16A16,16,0,0,1,180,140Zm76-60v24a12,12,0,0,1-24,0V80a12,12,0,0,1,24,0ZM24,80v24a12,12,0,0,1-24,0V80a12,12,0,0,1,24,0Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
