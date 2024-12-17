var s = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? s(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, c = (a, m) => {
  for (var e in m || (m = {}))
    p.call(m, e) && o(a, e, m[e]);
  if (t)
    for (var e of t(m))
      Z.call(m, e) && o(a, e, m[e]);
  return a;
};
var f = (a, m) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && m.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      m.indexOf(r) < 0 && Z.call(a, r) && (e[r] = a[r]);
  return e;
};
import i, { forwardRef as H } from "react";
import R from "../../lib/OptiBase.mjs";
const d = H((r, e) => {
  var l = r, { children: a } = l, m = f(l, ["children"]);
  return /* @__PURE__ */ i.createElement(R, c({ ref: e }, m), a, /* @__PURE__ */ i.createElement("path", { d: "M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm104,56H40a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Zm0,64H40a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Zm112-24a8,8,0,0,1-3.76,6.78l-64,40A8,8,0,0,1,168,200V120a8,8,0,0,1,12.24-6.78l64,40A8,8,0,0,1,248,160Zm-23.09,0L184,134.43v51.14Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
