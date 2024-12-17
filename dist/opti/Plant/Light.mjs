var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, C = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var c in a)
    i.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && r)
    for (var c of r(a))
      t.indexOf(c) < 0 && p.call(a, c) && (e[c] = a[c]);
  return e;
};
import l, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((c, e) => {
  var m = c, { children: a } = m, t = L(m, ["children"]);
  return /* @__PURE__ */ l.createElement(d, C({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M245.63,48A6,6,0,0,0,240,42.37c-51-3-91.88,12.42-109.35,41.26-11.63,19.21-11.38,42.68.53,65a69.42,69.42,0,0,0-15.48,30.59L95.9,159.41c8.15-16.1,8.1-32.95-.32-46.85C82.77,91.41,53,80.07,15.9,82.27a6,6,0,0,0-5.63,5.64C8.09,125,19.41,154.77,40.56,167.58A43.75,43.75,0,0,0,63.44,174a53.17,53.17,0,0,0,24-6L114,194.48V224a6,6,0,0,0,12,0V194.51A57.55,57.55,0,0,1,139.76,157c11.21,5.93,22.72,8.91,33.82,8.91a58.9,58.9,0,0,0,30.79-8.57C233.21,139.89,248.63,99,245.63,48ZM46.78,157.31C30.47,147.44,21.39,124,22,94c30-.65,53.41,8.44,63.28,24.75,5.68,9.37,6.16,20.38,1.54,31.59L60.24,123.75a6,6,0,0,0-8.49,8.49l26.62,26.61C67.16,163.47,56.15,163,46.78,157.31Zm151.38-10.22c-14.74,8.92-32.14,9.18-49.67.9l55.76-55.75a6,6,0,0,0-8.49-8.49L140,139.51c-8.28-17.53-8-34.93.9-49.66,14.52-24,49.06-37.18,93-35.75C235.33,98,222.14,132.56,198.16,147.09Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
