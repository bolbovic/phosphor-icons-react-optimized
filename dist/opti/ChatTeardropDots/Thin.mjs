var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (a, m, e) => m in a ? h(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, Z = (a, m) => {
  for (var e in m || (m = {}))
    p.call(m, e) && i(a, e, m[e]);
  if (r)
    for (var e of r(m))
      n.call(m, e) && i(a, e, m[e]);
  return a;
};
var c = (a, m) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && n.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const d = s((t, e) => {
  var o = t, { children: a } = o, m = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(A, Z({ ref: e }, m), a, /* @__PURE__ */ f.createElement("path", { d: "M140,128a8,8,0,1,1-8-8A8,8,0,0,1,140,128Zm-52-8a8,8,0,1,0,8,8A8,8,0,0,0,88,120Zm88,0a8,8,0,1,0,8,8A8,8,0,0,0,176,120Zm52,4a96.11,96.11,0,0,1-96,96H48a12,12,0,0,1-12-12V124a96,96,0,0,1,192,0Zm-8,0a88,88,0,0,0-176,0v84a4,4,0,0,0,4,4h84A88.1,88.1,0,0,0,220,124Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
