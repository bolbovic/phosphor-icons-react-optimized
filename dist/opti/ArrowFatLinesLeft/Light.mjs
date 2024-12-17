var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      V.call(t, e) && i(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && V.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var o = m, { children: a } = o, t = l(o, ["children"]);
  return /* @__PURE__ */ c.createElement(Z, h({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M152,74H126V32a6,6,0,0,0-10.24-4.24l-96,96a6,6,0,0,0,0,8.48l96,96A6,6,0,0,0,126,224V182h26a6,6,0,0,0,6-6V80A6,6,0,0,0,152,74Zm-6,96H120a6,6,0,0,0-6,6v33.51L32.49,128,114,46.49V80a6,6,0,0,0,6,6h26Zm76-90v96a6,6,0,0,1-12,0V80a6,6,0,0,1,12,0Zm-32,0v96a6,6,0,0,1-12,0V80a6,6,0,0,1,12,0Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
