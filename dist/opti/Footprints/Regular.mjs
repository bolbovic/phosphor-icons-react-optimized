var l = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var Z = (a, m, e) => m in a ? l(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, C = (a, m) => {
  for (var e in m || (m = {}))
    o.call(m, e) && Z(a, e, m[e]);
  if (t)
    for (var e of t(m))
      s.call(m, e) && Z(a, e, m[e]);
  return a;
};
var p = (a, m) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && m.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      m.indexOf(r) < 0 && s.call(a, r) && (e[r] = a[r]);
  return e;
};
import h, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const v = f((r, e) => {
  var c = r, { children: a } = c, m = p(c, ["children"]);
  return /* @__PURE__ */ h.createElement(i, C({ ref: e }, m), a, /* @__PURE__ */ h.createElement("path", { d: "M208.06,184H152a8,8,0,0,0-8,8v12a36,36,0,0,0,72.05,0V192A8,8,0,0,0,208.06,184Zm-8,20a20,20,0,0,1-40,0v-4h40ZM104,160h-56a8,8,0,0,0-8,8v12A36,36,0,0,0,112,180V168A8,8,0,0,0,104,160Zm-8,20a20,20,0,0,1-40,0v-4H96ZM76,16C64.36,16,53.07,26.31,44.2,45c-13.93,29.38-18.56,73,.29,96a8,8,0,0,0,6.2,2.93h50.55a8,8,0,0,0,6.2-2.93c18.85-23,14.22-66.65.29-96C98.85,26.31,87.57,16,76,16ZM97.15,128H54.78c-11.4-18.1-7.21-52.7,3.89-76.11C65.14,38.22,72.17,32,76,32s10.82,6.22,17.3,19.89C104.36,75.3,108.55,109.9,97.15,128Zm57.61,40h50.55a8,8,0,0,0,6.2-2.93c18.85-23,14.22-66.65.29-96C202.93,50.31,191.64,40,180,40s-22.89,10.31-31.77,29c-13.93,29.38-18.56,73,.29,96A8.05,8.05,0,0,0,154.76,168Zm8-92.11C169.22,62.22,176.25,56,180,56s10.82,6.22,17.29,19.89c11.1,23.41,15.29,58,3.9,76.11H158.85C147.45,133.9,151.64,99.3,162.74,75.89Z" }));
});
v.displayName = "Regular";
export {
  v as Regular
};
