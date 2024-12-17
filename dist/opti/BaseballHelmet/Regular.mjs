var i = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var p = (a, m, e) => m in a ? i(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, c = (a, m) => {
  for (var e in m || (m = {}))
    l.call(m, e) && p(a, e, m[e]);
  if (t)
    for (var e of t(m))
      Z.call(m, e) && p(a, e, m[e]);
  return a;
};
var f = (a, m) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && m.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      m.indexOf(r) < 0 && Z.call(a, r) && (e[r] = a[r]);
  return e;
};
import h, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const R = s((r, e) => {
  var o = r, { children: a } = o, m = f(o, ["children"]);
  return /* @__PURE__ */ h.createElement(A, c({ ref: e }, m), a, /* @__PURE__ */ h.createElement("path", { d: "M88,128a28,28,0,1,0,28,28A28,28,0,0,0,88,128Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,88,168Zm160-48H223.7A104,104,0,0,0,16,128v24a72.08,72.08,0,0,0,72,72h40a72.08,72.08,0,0,0,72-72V136h48a8,8,0,0,0,0-16Zm-64,32a56.06,56.06,0,0,1-50.46,55.72A71.87,71.87,0,0,0,160,152V136h24Zm-32-32a8,8,0,0,0-8,8v24a56,56,0,0,1-112,0V128a88,88,0,0,1,175.64-8Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
