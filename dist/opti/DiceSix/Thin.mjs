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
import H from "../../lib/OptiBase.mjs";
const d = s((t, e) => {
  var A = t, { children: a } = A, m = n(A, ["children"]);
  return /* @__PURE__ */ c.createElement(H, p({ ref: e }, m), a, /* @__PURE__ */ c.createElement("path", { d: "M192,36H64A28,28,0,0,0,36,64V192a28,28,0,0,0,28,28H192a28,28,0,0,0,28-28V64A28,28,0,0,0,192,36Zm20,156a20,20,0,0,1-20,20H64a20,20,0,0,1-20-20V64A20,20,0,0,1,64,44H192a20,20,0,0,1,20,20ZM100,84a8,8,0,1,1-8-8A8,8,0,0,1,100,84Zm72,0a8,8,0,1,1-8-8A8,8,0,0,1,172,84Zm-72,44a8,8,0,1,1-8-8A8,8,0,0,1,100,128Zm72,0a8,8,0,1,1-8-8A8,8,0,0,1,172,128Zm-72,44a8,8,0,1,1-8-8A8,8,0,0,1,100,172Zm72,0a8,8,0,1,1-8-8A8,8,0,0,1,172,172Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
