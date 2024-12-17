var f = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var r = (a, e, m) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : a[e] = m, i = (a, e) => {
  for (var m in e || (e = {}))
    l.call(e, m) && r(a, m, e[m]);
  if (t)
    for (var m of t(e))
      o.call(e, m) && r(a, m, e[m]);
  return a;
};
var p = (a, e) => {
  var m = {};
  for (var A in a)
    l.call(a, A) && e.indexOf(A) < 0 && (m[A] = a[A]);
  if (a != null && t)
    for (var A of t(a))
      e.indexOf(A) < 0 && o.call(a, A) && (m[A] = a[A]);
  return m;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const n = s((A, m) => {
  var Z = A, { children: a } = Z, e = p(Z, ["children"]);
  return /* @__PURE__ */ c.createElement(d, i({ ref: m }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM80,164a12,12,0,1,1,12-12A12,12,0,0,1,80,164Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,80,124Zm0-40A12,12,0,1,1,92,72,12,12,0,0,1,80,84Zm48,120a12,12,0,1,1,12-12A12,12,0,0,1,128,204Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,128,164Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,128,124Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,128,84Zm48,80a12,12,0,1,1,12-12A12,12,0,0,1,176,164Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,176,124Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,176,84Z" }));
});
n.displayName = "Fill";
export {
  n as Fill
};
