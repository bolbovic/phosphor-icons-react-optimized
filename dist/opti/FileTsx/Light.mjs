var V = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && l(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && l(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var c in a)
    o.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && m)
    for (var c of m(a))
      t.indexOf(c) < 0 && i.call(a, c) && (e[c] = a[c]);
  return e;
};
import H, { forwardRef as Z } from "react";
import f from "../../lib/OptiBase.mjs";
const h = Z((c, e) => {
  var r = c, { children: a } = r, t = L(r, ["children"]);
  return /* @__PURE__ */ H.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M212.88,155.48,195.37,180l17.51,24.51a6,6,0,1,1-9.76,7L188,190.31l-15.12,21.16a6,6,0,1,1-9.76-7L180.63,180l-17.51-24.51a6,6,0,0,1,9.76-7L188,169.67l15.12-21.17a6,6,0,1,1,9.76,7Zm-89.83,17.74c-10.86-3.13-13.41-4.69-13-7.91a6.59,6.59,0,0,1,2.88-5.08c5.6-3.79,17.66-1.83,21.45-.84a6,6,0,0,0,3.06-11.6c-2-.53-20.1-5-31.21,2.48a18.61,18.61,0,0,0-8.08,13.54c-1.8,14.19,12.26,18.25,21.57,20.94,12.12,3.5,14.78,5.33,14.2,9.76a6.85,6.85,0,0,1-3,5.34c-5.61,3.73-17.48,1.64-21.19.62A6,6,0,0,0,106.48,212a59.41,59.41,0,0,0,14.68,2c5.49,0,11.54-.95,16.36-4.14a18.89,18.89,0,0,0,8.31-13.81C147.84,180.39,132.92,176.08,123.05,173.22ZM80,146H40a6,6,0,0,0,0,12H54v50a6,6,0,0,0,12,0V158H80a6,6,0,0,0,0-12ZM214,88v24a6,6,0,1,1-12,0V94H152a6,6,0,0,1-6-6V38H56a2,2,0,0,0-2,2v72a6,6,0,1,1-12,0V40A14,14,0,0,1,56,26h96a6,6,0,0,1,4.25,1.76l56,56A6,6,0,0,1,214,88Zm-20.49-6L158,46.48V82Z" }));
});
h.displayName = "Light";
export {
  h as Light
};