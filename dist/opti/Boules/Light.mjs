var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && i(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var o = m, { children: a } = o, t = Z(o, ["children"]);
  return /* @__PURE__ */ c.createElement(A, L({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm59.22,34.29L60.29,187.22a90.21,90.21,0,0,1-12.53-18.49l121-121A90.21,90.21,0,0,1,187.22,60.29Zm8.49,8.49a90.21,90.21,0,0,1,12.53,18.49l-121,121a90.21,90.21,0,0,1-18.49-12.53ZM128,38a89.67,89.67,0,0,1,28.79,4.72L42.72,156.79A90,90,0,0,1,128,38Zm0,180a89.67,89.67,0,0,1-28.79-4.72L213.28,99.21A90,90,0,0,1,128,218Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
