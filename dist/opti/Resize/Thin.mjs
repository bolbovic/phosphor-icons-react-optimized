var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var V = (a, m, e) => m in a ? n(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, Z = (a, m) => {
  for (var e in m || (m = {}))
    o.call(m, e) && V(a, e, m[e]);
  if (r)
    for (var e of r(m))
      H.call(m, e) && V(a, e, m[e]);
  return a;
};
var i = (a, m) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && H.call(a, t) && (e[t] = a[t]);
  return e;
};
import p, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((t, e) => {
  var h = t, { children: a } = h, m = i(h, ["children"]);
  return /* @__PURE__ */ p.createElement(f, Z({ ref: e }, m), a, /* @__PURE__ */ p.createElement("path", { d: "M136,116H48a4,4,0,0,0-4,4v88a4,4,0,0,0,4,4h88a4,4,0,0,0,4-4V120A4,4,0,0,0,136,116Zm-4,88H52V124h80Zm80-20v16a12,12,0,0,1-12,12H176a4,4,0,0,1,0-8h24a4,4,0,0,0,4-4V184a4,4,0,0,1,8,0Zm0-72v32a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0Zm0-56V72a4,4,0,0,1-8,0V56a4,4,0,0,0-4-4H184a4,4,0,0,1,0-8h16A12,12,0,0,1,212,56Zm-64-8a4,4,0,0,1-4,4H112a4,4,0,0,1,0-8h32A4,4,0,0,1,148,48ZM44,80V56A12,12,0,0,1,56,44H72a4,4,0,0,1,0,8H56a4,4,0,0,0-4,4V80a4,4,0,0,1-8,0Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
