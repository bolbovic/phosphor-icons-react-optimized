var l = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && c(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && c(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var A in a)
    o.call(a, A) && t.indexOf(A) < 0 && (e[A] = a[A]);
  if (a != null && m)
    for (var A of m(a))
      t.indexOf(A) < 0 && i.call(a, A) && (e[A] = a[A]);
  return e;
};
import f, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = s((A, e) => {
  var r = A, { children: a } = r, t = L(r, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M52.44,36A6,6,0,0,0,43.56,44L55.72,57.41A85.34,85.34,0,0,0,42,104c0,32.64,12.12,44.33,21.85,53.71C71.76,165.34,78,171.36,78,188a50.06,50.06,0,0,0,50,50c14.34,0,26.66-6.12,36.63-18.18a6,6,0,0,0-9.26-7.64C147.69,221.48,138.74,226,128,226a38,38,0,0,1-38-38c0-21.74-9.06-30.48-17.82-38.92C62.83,140.06,54,131.55,54,104A73.4,73.4,0,0,1,64.12,66.65L84.49,89.06A46,46,0,0,0,82,104a6,6,0,0,0,12,0,36.39,36.39,0,0,1,.26-4.19l45.15,49.66A39.33,39.33,0,0,0,138,160a22,22,0,0,0,29.71,20.6L203.56,220a6,6,0,0,0,8.88-8.08Zm97.64,125.25,7.78,8.55A10,10,0,0,1,150.08,161.21ZM81.83,38.38a6,6,0,0,1,2.07-8.22A86,86,0,0,1,214,104a6,6,0,0,1-12,0A74,74,0,0,0,90.06,40.45,6,6,0,0,1,81.83,38.38Zm76.83,78.87A27.9,27.9,0,0,0,162,104a34,34,0,0,0-45-32.17,6,6,0,0,1-3.89-11.35A46,46,0,0,1,174,104a40,40,0,0,1-4.68,18.76,6,6,0,1,1-10.66-5.51Z" }));
});
d.displayName = "Light";
export {
  d as Light
};