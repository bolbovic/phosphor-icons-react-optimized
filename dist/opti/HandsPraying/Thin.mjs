var Z = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var L = (a, l, e) => l in a ? Z(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, p = (a, l) => {
  for (var e in l || (l = {}))
    o.call(l, e) && L(a, e, l[e]);
  if (t)
    for (var e of t(l))
      i.call(l, e) && L(a, e, l[e]);
  return a;
};
var A = (a, l) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && l.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && t)
    for (var m of t(a))
      l.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var r = m, { children: a } = r, l = A(r, ["children"]);
  return /* @__PURE__ */ n.createElement(f, p({ ref: e }, l), a, /* @__PURE__ */ n.createElement("path", { d: "M232.49,182.83l-37-37L158.79,24.62A17.77,17.77,0,0,0,128,18.56a17.77,17.77,0,0,0-30.79,6.06L60.46,145.88l-36.95,37a12,12,0,0,0,0,17L56.2,232.49a12,12,0,0,0,17,0l48.28-48.29a36,36,0,0,0,6.55-8.94,36,36,0,0,0,6.55,8.94l48.28,48.29a12,12,0,0,0,17,0l32.69-32.69A12,12,0,0,0,232.49,182.83Zm-165,44a4,4,0,0,1-5.66,0L29.17,194.15a4,4,0,0,1,0-5.66L44.68,173,83,211.32Zm48.29-48.28L88.68,205.66,50.34,167.32l16.48-16.49a3.92,3.92,0,0,0,1-1.67l37-122.22A9.78,9.78,0,0,1,124,29.78v129A27.81,27.81,0,0,1,115.8,178.55Zm16.2-19.8v-129a9.78,9.78,0,0,1,19.14-2.84l37,122.22a3.92,3.92,0,0,0,1,1.67l17.38,17.38-39.18,37.51L140.2,178.55A27.81,27.81,0,0,1,132,158.75Zm94.83,35.4-32.68,32.68a4,4,0,0,1-5.66,0L173,211.38l39.18-37.51,14.61,14.62A4,4,0,0,1,226.83,194.15Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
