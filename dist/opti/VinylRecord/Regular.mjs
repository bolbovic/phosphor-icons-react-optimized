var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var l = (a, m, e) => m in a ? d(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, f = (a, m) => {
  for (var e in m || (m = {}))
    p.call(m, e) && l(a, e, m[e]);
  if (r)
    for (var e of r(m))
      Z.call(m, e) && l(a, e, m[e]);
  return a;
};
var s = (a, m) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as i } from "react";
import A from "../../lib/OptiBase.mjs";
const R = i((t, e) => {
  var o = t, { children: a } = o, m = s(o, ["children"]);
  return /* @__PURE__ */ c.createElement(A, f({ ref: e }, m), a, /* @__PURE__ */ c.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm0-144a56.06,56.06,0,0,0-56,56,8,8,0,0,1-16,0,72.08,72.08,0,0,1,72-72,8,8,0,0,1,0,16Zm72,56a72.08,72.08,0,0,1-72,72,8,8,0,0,1,0-16,56.06,56.06,0,0,0,56-56,8,8,0,0,1,16,0Zm-40,0a32,32,0,1,0-32,32A32,32,0,0,0,160,128Zm-48,0a16,16,0,1,1,16,16A16,16,0,0,1,112,128Z" }));
});
R.displayName = "Regular";
export {
  R as Regular,
  R as default
};
