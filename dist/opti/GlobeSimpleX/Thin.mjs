var n = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && c(a, e, t[e]);
  if (m)
    for (var e of m(t))
      o.call(t, e) && c(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var h in a)
    l.call(a, h) && t.indexOf(h) < 0 && (e[h] = a[h]);
  if (a != null && m)
    for (var h of m(a))
      t.indexOf(h) < 0 && o.call(a, h) && (e[h] = a[h]);
  return e;
};
import Z, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const A = f((h, e) => {
  var r = h, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, i({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M218.83,170.83,197.66,192l21.17,21.17a4,4,0,0,1-5.66,5.66L192,197.66l-21.17,21.17a4,4,0,0,1-5.66-5.66L186.34,192l-21.17-21.17a4,4,0,0,1,5.66-5.66L192,186.34l21.17-21.17a4,4,0,0,1,5.66,5.66ZM228,128a4,4,0,0,1-4,4H92.08c1.61,58.53,38.05,88.58,38.42,88.88h0A4,4,0,0,1,128,228a100,100,0,0,1,0-200h0A100.11,100.11,0,0,1,228,128ZM138.46,36.6c11.74,12.88,32.33,41.85,33.48,87.4h48A92.14,92.14,0,0,0,138.46,36.6ZM92.07,124h71.86C162.57,74.52,136.32,45.4,128,37.39,119.68,45.39,93.43,74.52,92.07,124Zm-56,0h48c1.15-45.55,21.74-74.52,33.48-87.4A92.14,92.14,0,0,0,36.09,124Zm48,8h-48a92.14,92.14,0,0,0,81.45,87.4C105.8,206.52,85.21,177.55,84.06,132Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};