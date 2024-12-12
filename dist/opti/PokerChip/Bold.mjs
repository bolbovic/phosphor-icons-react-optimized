var c = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (A, e, a) => e in A ? c(A, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : A[e] = a, p = (A, e) => {
  for (var a in e || (e = {}))
    r.call(e, a) && o(A, a, e[a]);
  if (t)
    for (var a of t(e))
      l.call(e, a) && o(A, a, e[a]);
  return A;
};
var M = (A, e) => {
  var a = {};
  for (var m in A)
    r.call(A, m) && e.indexOf(m) < 0 && (a[m] = A[m]);
  if (A != null && t)
    for (var m of t(A))
      e.indexOf(m) < 0 && l.call(A, m) && (a[m] = A[m]);
  return a;
};
import d, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((m, a) => {
  var Z = m, { children: A } = Z, e = M(Z, ["children"]);
  return /* @__PURE__ */ d.createElement(i, p({ ref: a }, e), A, /* @__PURE__ */ d.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,144a36,36,0,1,1,36-36A36,36,0,0,1,128,164Zm33.06-86A59.51,59.51,0,0,0,140,69.21V44.87a83.55,83.55,0,0,1,38.28,15.88ZM116,69.21A59.51,59.51,0,0,0,94.94,78L77.72,60.75A83.55,83.55,0,0,1,116,44.87ZM78,94.94A59.51,59.51,0,0,0,69.21,116H44.87A83.59,83.59,0,0,1,60.75,77.72ZM69.21,140A59.51,59.51,0,0,0,78,161.06L60.75,178.28A83.59,83.59,0,0,1,44.87,140Zm25.73,38A59.51,59.51,0,0,0,116,186.79v24.34a83.55,83.55,0,0,1-38.28-15.88ZM140,186.79A59.51,59.51,0,0,0,161.06,178l17.22,17.22A83.55,83.55,0,0,1,140,211.13Zm38-25.73A59.51,59.51,0,0,0,186.79,140h24.34a83.59,83.59,0,0,1-15.88,38.28ZM186.79,116A59.51,59.51,0,0,0,178,94.94l17.22-17.22A83.59,83.59,0,0,1,211.13,116Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
