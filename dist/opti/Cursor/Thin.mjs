var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? h(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, n = (a, l) => {
  for (var e in l || (l = {}))
    i.call(l, e) && o(a, e, l[e]);
  if (r)
    for (var e of r(l))
      p.call(l, e) && o(a, e, l[e]);
  return a;
};
var c = (a, l) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const d = s((t, e) => {
  var m = t, { children: a } = m, l = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(L, n({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M165.17,135.51a4,4,0,0,1,1.17-6.46l46.31-17.79.16-.06a12,12,0,0,0-1.05-22.33L51.67,36.6A12,12,0,0,0,36.6,51.67L88.87,211.76A11.86,11.86,0,0,0,99.67,220h.58a11.86,11.86,0,0,0,11-7.19l.06-.16,17.79-46.31a4,4,0,0,1,6.47-1.17l51.31,51.32a12,12,0,0,0,17,0l12.69-12.69a12,12,0,0,0,0-17Zm45.66,62.63-12.69,12.69a4,4,0,0,1-5.66,0l-51.31-51.31a12,12,0,0,0-8.48-3.52,12.13,12.13,0,0,0-2.24.21,12,12,0,0,0-8.77,7l-.06.16-17.79,46.31a4,4,0,0,1-7.36-.42L44.2,49.19a4,4,0,0,1,5-5L209.27,96.47a4,4,0,0,1,.42,7.36l-46.31,17.78-.16.07a12,12,0,0,0-3.71,19.49l51.32,51.31A4,4,0,0,1,210.83,198.14Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
