var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    V.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const Z = s((m, e) => {
  var h = m, { children: a } = h, t = A(h, ["children"]);
  return /* @__PURE__ */ c.createElement(H, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M238,96a6,6,0,0,1-6,6H214v18a6,6,0,0,1-12,0V102H184a6,6,0,0,1,0-12h18V72a6,6,0,0,1,12,0V90h18A6,6,0,0,1,238,96ZM144,54h10V64a6,6,0,0,0,12,0V54h10a6,6,0,0,0,0-12H166V32a6,6,0,0,0-12,0V42H144a6,6,0,0,0,0,12Zm71.25,100.28a6,6,0,0,1,1.07,6A94,94,0,1,1,95.76,39.68a6,6,0,0,1,7.94,6.79A90.11,90.11,0,0,0,192,154a90.9,90.9,0,0,0,17.53-1.7A6,6,0,0,1,215.25,154.28Zm-14.37,11.34q-4.42.38-8.88.38A102.12,102.12,0,0,1,90,64q0-4.45.38-8.88a82,82,0,1,0,110.5,110.5Z" }));
});
Z.displayName = "Light";
export {
  Z as Light
};
