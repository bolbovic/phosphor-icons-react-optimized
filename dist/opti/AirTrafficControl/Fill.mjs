var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? f(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, A = (a, l) => {
  for (var e in l || (l = {}))
    i.call(l, e) && o(a, e, l[e]);
  if (r)
    for (var e of r(l))
      p.call(l, e) && o(a, e, l[e]);
  return a;
};
var H = (a, l) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const M = h((t, e) => {
  var m = t, { children: a } = m, l = H(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, A({ ref: e }, l), a, /* @__PURE__ */ c.createElement("path", { d: "M229.11,70.82A16,16,0,0,0,216,64H136V32h16a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16h16V64H40A16,16,0,0,0,25,85.47l26.19,72a16,16,0,0,0,15,10.53H189.82a16,16,0,0,0,15-10.53l26.19-72A16,16,0,0,0,229.11,70.82ZM102.52,151.87a7.87,7.87,0,0,1-1.44.13,8,8,0,0,1-7.86-6.57L83,89.43a8,8,0,0,1,15.75-2.86l10.18,56A8,8,0,0,1,102.52,151.87ZM173,89.43l-10.19,56a8,8,0,0,1-7.86,6.57,7.87,7.87,0,0,1-1.44-.13,8,8,0,0,1-6.44-9.3l10.18-56A8,8,0,0,1,173,89.43ZM160,188v44a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V188a4,4,0,0,1,4-4h56A4,4,0,0,1,160,188Z" }));
});
M.displayName = "Fill";
export {
  M as Fill
};
