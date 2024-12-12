var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import A, { forwardRef as s } from "react";
import M from "../../lib/OptiBase.mjs";
const V = s((m, e) => {
  var c = m, { children: a } = c, t = n(c, ["children"]);
  return /* @__PURE__ */ A.createElement(M, Z({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M124,156.29V48a4,4,0,0,0-8,0V156.29a28,28,0,1,0,8,0ZM120,204a20,20,0,1,1,20-20A20,20,0,0,1,120,204Zm36-68V48a36,36,0,0,0-72,0v88a60,60,0,1,0,72,0ZM120,236a52,52,0,0,1-29.71-94.68A4,4,0,0,0,92,138V48a28,28,0,0,1,56,0v90a4,4,0,0,0,1.71,3.28A52,52,0,0,1,120,236ZM180.65,78.59a4,4,0,0,1,1.17-5.54c13.24-8.63,23.07-4.43,31.75-.73,8.15,3.48,14.58,6.22,24.25-.07a4,4,0,1,1,4.36,6.7C236.43,82.7,231.32,84,226.67,84c-6.06,0-11.33-2.25-16.24-4.34-8.15-3.47-14.58-6.22-24.25.07A4,4,0,0,1,180.65,78.59Zm62.7,26.82a4,4,0,0,1-1.17,5.54c-5.75,3.75-10.86,5.07-15.51,5.07-6.06,0-11.33-2.25-16.24-4.34-8.15-3.47-14.58-6.22-24.25.07a4,4,0,1,1-4.36-6.7c13.24-8.63,23.07-4.43,31.75-.73,8.15,3.48,14.58,6.22,24.25-.07A4,4,0,0,1,243.35,105.41Z" }));
});
V.displayName = "Thin";
export {
  V as Thin
};
