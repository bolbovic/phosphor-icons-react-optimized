var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var A = (a, m, e) => m in a ? c(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, i = (a, m) => {
  for (var e in m || (m = {}))
    o.call(m, e) && A(a, e, m[e]);
  if (r)
    for (var e of r(m))
      Z.call(m, e) && A(a, e, m[e]);
  return a;
};
var p = (a, m) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const H = f((t, e) => {
  var h = t, { children: a } = h, m = p(h, ["children"]);
  return /* @__PURE__ */ n.createElement(s, i({ ref: e }, m), a, /* @__PURE__ */ n.createElement("path", { d: "M184.46,96A36,36,0,0,0,168,28H96A36,36,0,0,0,79.54,96a36,36,0,0,0,1.56,64.76A40,40,0,1,0,140,196V150.59A36,36,0,1,0,184.46,96ZM196,64a28,28,0,0,1-28,28H140V36h28A28,28,0,0,1,196,64Zm-56,36h5.41a36.41,36.41,0,0,0-5.41,5.41ZM68,64A28,28,0,0,1,96,36h36V92H96A28,28,0,0,1,68,64Zm64,132a32,32,0,1,1-32-32h32Zm0-40H96a28,28,0,0,1,0-56h36Zm36,0a28,28,0,1,1,28-28A28,28,0,0,1,168,156Z" }));
});
H.displayName = "Thin";
export {
  H as Thin
};
