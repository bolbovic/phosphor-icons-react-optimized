var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import Z, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const M = s((r, e) => {
  var A = r, { children: a } = A, t = n(A, ["children"]);
  return /* @__PURE__ */ Z.createElement(H, c({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M222.13,67.55a3.94,3.94,0,0,1-1.84.45,4,4,0,0,1-3.55-2.16,99.41,99.41,0,0,0-34.87-38.46,4,4,0,1,1,4.26-6.76,107.34,107.34,0,0,1,37.71,41.54A4,4,0,0,1,222.13,67.55ZM39.26,65.84A99.41,99.41,0,0,1,74.13,27.38a4,4,0,0,0-4.26-6.76A107.34,107.34,0,0,0,32.16,62.16a4,4,0,0,0,1.71,5.39,3.94,3.94,0,0,0,1.84.45A4,4,0,0,0,39.26,65.84ZM218.36,178A12,12,0,0,1,208,196H163.77a36,36,0,0,1-71.54,0H48A12,12,0,0,1,37.64,178C47.17,161.56,52,139.37,52,112a76,76,0,0,1,152,0C204,139.36,208.83,161.55,218.36,178ZM155.71,196H100.29a28,28,0,0,0,55.42,0Zm55.73-14C201.19,164.34,196,140.79,196,112a68,68,0,0,0-136,0c0,28.8-5.19,52.34-15.44,70a4,4,0,0,0,0,4A3.89,3.89,0,0,0,48,188H208a3.89,3.89,0,0,0,3.43-2A4,4,0,0,0,211.44,182Z" }));
});
M.displayName = "Thin";
export {
  M as Thin
};
