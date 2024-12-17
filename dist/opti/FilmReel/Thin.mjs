var f = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var r = (a, e, m) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : a[e] = m, p = (a, e) => {
  for (var m in e || (e = {}))
    o.call(e, m) && r(a, m, e[m]);
  if (A)
    for (var m of A(e))
      i.call(e, m) && r(a, m, e[m]);
  return a;
};
var n = (a, e) => {
  var m = {};
  for (var t in a)
    o.call(a, t) && e.indexOf(t) < 0 && (m[t] = a[t]);
  if (a != null && A)
    for (var t of A(a))
      e.indexOf(t) < 0 && i.call(a, t) && (m[t] = a[t]);
  return m;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((t, m) => {
  var Z = t, { children: a } = Z, e = n(Z, ["children"]);
  return /* @__PURE__ */ c.createElement(d, p({ ref: m }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M232,220H167.18A100,100,0,1,0,128,228H232a4,4,0,0,0,0-8ZM36,128a92,92,0,1,1,92,92A92.1,92.1,0,0,1,36,128Zm92-28a20,20,0,1,0-20-20A20,20,0,0,0,128,100Zm0-32a12,12,0,1,1-12,12A12,12,0,0,1,128,68Zm20,108a20,20,0,1,0-20,20A20,20,0,0,0,148,176Zm-32,0a12,12,0,1,1,12,12A12,12,0,0,1,116,176Zm60-28a20,20,0,1,0-20-20A20,20,0,0,0,176,148Zm0-32a12,12,0,1,1-12,12A12,12,0,0,1,176,116Zm-96-8a20,20,0,1,0,20,20A20,20,0,0,0,80,108Zm0,32a12,12,0,1,1,12-12A12,12,0,0,1,80,140Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
