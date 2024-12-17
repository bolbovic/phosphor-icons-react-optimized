var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var Z = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    o.call(m, e) && Z(a, e, m[e]);
  if (r)
    for (var e of r(m))
      i.call(m, e) && Z(a, e, m[e]);
  return a;
};
var n = (a, m) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((t, e) => {
  var A = t, { children: a } = A, m = n(A, ["children"]);
  return /* @__PURE__ */ c.createElement(d, p({ ref: e }, m), a, /* @__PURE__ */ c.createElement("path", { d: "M68,60a8,8,0,1,1-8-8A8,8,0,0,1,68,60Zm60-8a8,8,0,1,0,8,8A8,8,0,0,0,128,52Zm68,16a8,8,0,1,0-8-8A8,8,0,0,0,196,68ZM60,120a8,8,0,1,0,8,8A8,8,0,0,0,60,120Zm68,0a8,8,0,1,0,8,8A8,8,0,0,0,128,120Zm68,0a8,8,0,1,0,8,8A8,8,0,0,0,196,120ZM60,188a8,8,0,1,0,8,8A8,8,0,0,0,60,188Zm68,0a8,8,0,1,0,8,8A8,8,0,0,0,128,188Zm68,0a8,8,0,1,0,8,8A8,8,0,0,0,196,188Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
