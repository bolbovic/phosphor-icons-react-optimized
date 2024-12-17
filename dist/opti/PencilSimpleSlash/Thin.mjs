var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import A, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = f((l, e) => {
  var r = l, { children: a } = r, t = n(r, ["children"]);
  return /* @__PURE__ */ A.createElement(s, L({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M51,37.31A4,4,0,0,0,45,42.69L95.81,98.54l-56.3,56.29A12,12,0,0,0,36,163.31V208a12,12,0,0,0,12,12H92.69a11.93,11.93,0,0,0,8.48-3.51l53.36-53.36L205,218.69a4,4,0,1,0,5.92-5.38ZM95.52,210.83A4.06,4.06,0,0,1,92.69,212H48a4,4,0,0,1-4-4V163.31a4,4,0,0,1,1.17-2.82l56-56,47.94,52.74Zm129-134.63L179.8,31.52a12,12,0,0,0-17,0L121.16,73.19a4,4,0,0,0,5.66,5.65L136,69.66,186.35,120,174.5,131.85a4,4,0,1,0,5.65,5.66l44.34-44.34A12,12,0,0,0,224.49,76.2Zm-5.66,11.31L192,114.34,141.66,64l26.83-26.83a4.1,4.1,0,0,1,5.66,0l44.68,44.69A4,4,0,0,1,218.83,87.51Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
