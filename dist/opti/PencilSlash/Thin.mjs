var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var L = (a, l, e) => l in a ? A(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, p = (a, l) => {
  for (var e in l || (l = {}))
    o.call(l, e) && L(a, e, l[e]);
  if (m)
    for (var e of m(l))
      i.call(l, e) && L(a, e, l[e]);
  return a;
};
var Z = (a, l) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      l.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((t, e) => {
  var r = t, { children: a } = r, l = Z(r, ["children"]);
  return /* @__PURE__ */ n.createElement(f, p({ ref: e }, l), a, /* @__PURE__ */ n.createElement("path", { d: "M51,37.31A4,4,0,0,0,45,42.69L95.81,98.54l-56.3,56.29A12,12,0,0,0,36,163.31V208a12,12,0,0,0,12,12H92.69a11.93,11.93,0,0,0,8.48-3.51l53.36-53.36L205,218.69a4,4,0,1,0,5.92-5.38Zm71.52,90.56L68,182.34,45.66,160l55.54-55.54ZM44,208V169.66L86.34,212H48A4,4,0,0,1,44,208Zm52,2.34L73.66,188l54.2-54.21,21.28,23.41ZM224.49,76.2,179.8,31.52a12,12,0,0,0-17,0L121.16,73.19a4,4,0,0,0,5.66,5.65L136,69.66,158.35,92l-10.52,10.52a4,4,0,1,0,5.65,5.66L164,97.66,186.35,120,174.5,131.85a4,4,0,1,0,5.65,5.66l44.34-44.34A12,12,0,0,0,224.49,76.2Zm-5.66,11.31L192,114.34,141.66,64l26.83-26.83a4.1,4.1,0,0,1,5.66,0l44.68,44.69A4,4,0,0,1,218.83,87.51Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
