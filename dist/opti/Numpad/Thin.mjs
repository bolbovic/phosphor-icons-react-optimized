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
  return /* @__PURE__ */ c.createElement(d, p({ ref: m }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M76,48A12,12,0,1,1,64,36,12,12,0,0,1,76,48Zm52-12a12,12,0,1,0,12,12A12,12,0,0,0,128,36Zm64,24a12,12,0,1,0-12-12A12,12,0,0,0,192,60ZM64,92a12,12,0,1,0,12,12A12,12,0,0,0,64,92Zm64,0a12,12,0,1,0,12,12A12,12,0,0,0,128,92Zm64,0a12,12,0,1,0,12,12A12,12,0,0,0,192,92ZM64,148a12,12,0,1,0,12,12A12,12,0,0,0,64,148Zm64,0a12,12,0,1,0,12,12A12,12,0,0,0,128,148Zm0,56a12,12,0,1,0,12,12A12,12,0,0,0,128,204Zm64-56a12,12,0,1,0,12,12A12,12,0,0,0,192,148Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
