var M = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var r = (a, e, A) => e in a ? M(a, e, { enumerable: !0, configurable: !0, writable: !0, value: A }) : a[e] = A, p = (a, e) => {
  for (var A in e || (e = {}))
    c.call(e, A) && r(a, A, e[A]);
  if (m)
    for (var A of m(e))
      Z.call(e, A) && r(a, A, e[A]);
  return a;
};
var d = (a, e) => {
  var A = {};
  for (var t in a)
    c.call(a, t) && e.indexOf(t) < 0 && (A[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && Z.call(a, t) && (A[t] = a[t]);
  return A;
};
import l, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((t, A) => {
  var o = t, { children: a } = o, e = d(o, ["children"]);
  return /* @__PURE__ */ l.createElement(i, p({ ref: A }, e), a, /* @__PURE__ */ l.createElement("path", { d: "M200,93.66c0-.55,0-1.1,0-1.66A72,72,0,0,0,56,92c0,.56,0,1.11,0,1.66a72,72,0,1,0,72,124.65A72,72,0,1,0,200,93.66Zm-41.28,35.22A71.73,71.73,0,0,0,148,110.77a47.69,47.69,0,0,1,25-1.92A48.21,48.21,0,0,1,158.68,128.88ZM128,187.7a47.81,47.81,0,0,1-11.47-24.62,72,72,0,0,0,22.94,0A47.81,47.81,0,0,1,128,187.7ZM83.06,108.85a47.69,47.69,0,0,1,25,1.92,71.73,71.73,0,0,0-10.72,18.11A48.21,48.21,0,0,1,83.06,108.85ZM128,140a47.88,47.88,0,0,1-8.94-.85A48,48,0,0,1,128,124.3a48,48,0,0,1,8.94,14.85A47.88,47.88,0,0,1,128,140Zm0-96a48.07,48.07,0,0,1,47.47,40.92A71.77,71.77,0,0,0,128,93.69a71.77,71.77,0,0,0-47.47-8.77A48.07,48.07,0,0,1,128,44ZM44,156a47.89,47.89,0,0,1,17.32-36.88A72.45,72.45,0,0,0,92,154.34c0,.55,0,1.1,0,1.66a71.64,71.64,0,0,0,16,45.23A48,48,0,0,1,44,156Zm120,48a47.67,47.67,0,0,1-16-2.77A71.64,71.64,0,0,0,164,156c0-.56,0-1.11,0-1.66a72.45,72.45,0,0,0,30.72-35.22A48,48,0,0,1,164,204Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
