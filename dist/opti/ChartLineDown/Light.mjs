var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const d = s((l, e) => {
  var m = l, { children: a } = m, t = L(m, ["children"]);
  return /* @__PURE__ */ c.createElement(V, h({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M230,208a6,6,0,0,1-6,6H32a6,6,0,0,1-6-6V48a6,6,0,0,1,12,0V61.52l58,58,27.76-27.75a6,6,0,0,1,8.48,0L194,153.52V128a6,6,0,0,1,12,0v40a5.62,5.62,0,0,1-.11,1.1v.06a7.46,7.46,0,0,1-.31,1.05l0,.07a6.13,6.13,0,0,1-.52,1l0,.06a6.25,6.25,0,0,1-1.68,1.68l-.06,0a6.13,6.13,0,0,1-1,.52l-.07,0a7.46,7.46,0,0,1-1.05.31h-.06a5.62,5.62,0,0,1-1.1.11H160a6,6,0,0,1,0-12h25.52L128,104.49l-27.76,27.75a6,6,0,0,1-8.48,0L38,78.48V202H224A6,6,0,0,1,230,208Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
