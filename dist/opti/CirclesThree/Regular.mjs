var i = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var p = (a, m, e) => m in a ? i(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, l = (a, m) => {
  for (var e in m || (m = {}))
    A.call(m, e) && p(a, e, m[e]);
  if (t)
    for (var e of t(m))
      Z.call(m, e) && p(a, e, m[e]);
  return a;
};
var c = (a, m) => {
  var e = {};
  for (var r in a)
    A.call(a, r) && m.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      m.indexOf(r) < 0 && Z.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import R from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var o = r, { children: a } = o, m = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(R, l({ ref: e }, m), a, /* @__PURE__ */ f.createElement("path", { d: "M172,76a44,44,0,1,0-44,44A44.05,44.05,0,0,0,172,76Zm-44,28a28,28,0,1,1,28-28A28,28,0,0,1,128,104Zm60,24a44,44,0,1,0,44,44A44.05,44.05,0,0,0,188,128Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,188,200ZM68,128a44,44,0,1,0,44,44A44.05,44.05,0,0,0,68,128Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,68,200Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
