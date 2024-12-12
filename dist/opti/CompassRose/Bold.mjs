var c = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var o = (a, e, m) => e in a ? c(a, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : a[e] = m, p = (a, e) => {
  for (var m in e || (e = {}))
    r.call(e, m) && o(a, m, e[m]);
  if (l)
    for (var m of l(e))
      Z.call(e, m) && o(a, m, e[m]);
  return a;
};
var A = (a, e) => {
  var m = {};
  for (var L in a)
    r.call(a, L) && e.indexOf(L) < 0 && (m[L] = a[L]);
  if (a != null && l)
    for (var L of l(a))
      e.indexOf(L) < 0 && Z.call(a, L) && (m[L] = a[L]);
  return m;
};
import d, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((L, m) => {
  var t = L, { children: a } = t, e = A(t, ["children"]);
  return /* @__PURE__ */ d.createElement(i, p({ ref: m }, e), a, /* @__PURE__ */ d.createElement("path", { d: "M247,116.39l-20.47-5.34A100.27,100.27,0,0,0,145,29.44L139.61,9a12,12,0,0,0-23.22,0l-5.34,20.47a100.27,100.27,0,0,0-81.61,81.61L9,116.39a12,12,0,0,0,0,23.22L29.44,145a100.27,100.27,0,0,0,81.61,81.61L116.39,247a12,12,0,0,0,23.22,0L145,226.56A100.27,100.27,0,0,0,226.56,145L247,139.61a12,12,0,0,0,0-23.22Zm-46.88-12.23-38.31-10-10-38.31A76.32,76.32,0,0,1,200.15,104.16Zm-82.8-3.78L128,59.54l10.65,40.84L128,111ZM128,145l10.65,10.65L128,196.46l-10.65-40.84Zm-27.62-27.62L111,128l-10.65,10.65L59.54,128Zm55.24,21.3L145,128l10.65-10.65L196.46,128Zm-51.46-82.8-10,38.31-38.31,10A76.32,76.32,0,0,1,104.16,55.85Zm-48.31,96,38.31,10,10,38.31A76.32,76.32,0,0,1,55.85,151.84Zm96,48.31,10-38.31,38.31-10A76.32,76.32,0,0,1,151.84,200.15Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
