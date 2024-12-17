var Z = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var s = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && s(a, e, t[e]);
  if (c)
    for (var e of c(t))
      i.call(t, e) && s(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && c)
    for (var m of c(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import C, { forwardRef as f } from "react";
import A from "../../lib/OptiBase.mjs";
const d = f((m, e) => {
  var r = m, { children: a } = r, t = n(r, ["children"]);
  return /* @__PURE__ */ C.createElement(A, p({ ref: e }, t), a, /* @__PURE__ */ C.createElement("path", { d: "M187,125.33a4,4,0,1,1-6,5.33c-3.4-3.8-10.72-6.66-17-6.66s-13.62,2.86-17,6.66a4,4,0,0,1-3,1.34,4,4,0,0,1-3-6.67c4.92-5.5,14.37-9.33,23-9.33S182.06,119.83,187,125.33Zm-78,5.33a4,4,0,1,0,6-5.33c-4.92-5.5-14.37-9.33-23-9.33s-18.06,3.83-23,9.33A4,4,0,0,0,72,132a4,4,0,0,0,3-1.34c3.4-3.8,10.72-6.66,17-6.66S105.62,126.86,109,130.66Zm50.3,34.74a40.89,40.89,0,0,1-62.64,0,4,4,0,0,0-6.09,5.2,48.92,48.92,0,0,0,74.82,0,4,4,0,0,0-6.09-5.2ZM220,48v55.78c0,35-9.4,68-26.48,92.92C176.13,222.05,152.86,236,128,236s-48.13-13.95-65.52-39.29C45.4,171.83,36,138.83,36,103.79V48a12,12,0,0,1,16.34-11.2C66.66,42.38,95.53,51.7,128,51.7s61.34-9.32,75.66-14.88A12,12,0,0,1,220,48Zm-8,0a4,4,0,0,0-5.44-3.74C191.72,50,161.77,59.7,128,59.7S64.28,50,49.44,44.27A4.14,4.14,0,0,0,48,44a3.87,3.87,0,0,0-2.23.7A4,4,0,0,0,44,48v55.77C44,172.28,81.68,228,128,228s84-55.72,84-124.21Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
