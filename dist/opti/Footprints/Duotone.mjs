var M = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? M(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && r(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && r(a, e, t[e]);
  return a;
};
var C = (a, t) => {
  var e = {};
  for (var c in a)
    h.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && m)
    for (var c of m(a))
      t.indexOf(c) < 0 && p.call(a, c) && (e[c] = a[c]);
  return e;
};
import o, { forwardRef as n } from "react";
import i from "../../lib/OptiBase.mjs";
const v = n((c, e) => {
  var Z = c, { children: a } = Z, t = C(Z, ["children"]);
  return /* @__PURE__ */ o.createElement(i, s({ ref: e }, t), a, /* @__PURE__ */ o.createElement(
    "path",
    {
      d: "M152,192h56v12a28,28,0,0,1-56,0ZM48,180a28,28,0,0,0,56,0V168H48ZM76,24c-24.52,0-51.46,80-25.26,112h50.52C127.46,104,100.52,24,76,24ZM205.26,160c26.2-32-.74-112-25.26-112s-51.46,80-25.26,112Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ o.createElement("path", { d: "M208.06,184H152a8,8,0,0,0-8,8v12a36,36,0,0,0,72.05,0V192A8,8,0,0,0,208.06,184Zm-8,20a20,20,0,0,1-40,0v-4h40ZM104,160h-56a8,8,0,0,0-8,8v12A36,36,0,0,0,112,180V168A8,8,0,0,0,104,160Zm-8,20a20,20,0,0,1-40,0v-4H96ZM76,16C64.36,16,53.07,26.31,44.2,45c-13.93,29.38-18.56,73,.29,96a8,8,0,0,0,6.2,2.93h50.55a8,8,0,0,0,6.2-2.93c18.85-23,14.22-66.65.29-96C98.85,26.31,87.57,16,76,16ZM97.15,128H54.78c-11.4-18.1-7.21-52.7,3.89-76.11C65.14,38.22,72.17,32,76,32s10.82,6.22,17.3,19.89C104.36,75.3,108.55,109.9,97.15,128Zm57.61,40h50.55a8,8,0,0,0,6.2-2.93c18.85-23,14.22-66.65.29-96C202.93,50.31,191.64,40,180,40s-22.89,10.31-31.77,29c-13.93,29.38-18.56,73,.29,96A8,8,0,0,0,154.76,168Zm8-92.11C169.22,62.22,176.25,56,180,56s10.81,6.22,17.29,19.89c11.1,23.41,15.29,58,3.89,76.11H158.85C147.45,133.9,151.64,99.3,162.74,75.89Z" }));
});
v.displayName = "Duotone";
export {
  v as Duotone
};
