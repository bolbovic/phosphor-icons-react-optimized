var h = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var r = (a, e, l) => e in a ? h(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, i = (a, e) => {
  for (var l in e || (e = {}))
    o.call(e, l) && r(a, l, e[l]);
  if (t)
    for (var l of t(e))
      c.call(e, l) && r(a, l, e[l]);
  return a;
};
var p = (a, e) => {
  var l = {};
  for (var L in a)
    o.call(a, L) && e.indexOf(L) < 0 && (l[L] = a[L]);
  if (a != null && t)
    for (var L of t(a))
      e.indexOf(L) < 0 && c.call(a, L) && (l[L] = a[L]);
  return l;
};
import Z, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const f = n((L, l) => {
  var m = L, { children: a } = m, e = p(m, ["children"]);
  return /* @__PURE__ */ Z.createElement(A, i({ ref: l }, e), a, /* @__PURE__ */ Z.createElement("path", { d: "M250.73,109.69l-25.53-51a12,12,0,0,0-16.1-5.37L182.88,66.38,129,52.14a3.92,3.92,0,0,0-2,0L73.12,66.38,46.9,53.27a12,12,0,0,0-16.1,5.37L5.27,109.69a12,12,0,0,0,5.37,16.1l27.29,13.65,55.75,39.82a3.87,3.87,0,0,0,1.35.62l64,16a4,4,0,0,0,3.8-1l55.54-55.54,27-13.5a12,12,0,0,0,5.37-16.1Zm-51,36.95-37.2-29.8a4,4,0,0,0-5.34.3c-19.49,19.64-41.34,17.11-55.29,8.2a4.07,4.07,0,0,1-1.85-3,3.91,3.91,0,0,1,1.11-3.21L145.62,76h35.91l29.6,59.21ZM12.21,116.32a4,4,0,0,1,.22-3L38,62.22h0A4,4,0,0,1,41.54,60a4,4,0,0,1,1.78.43l24,12L38.21,130.64l-24-12A4,4,0,0,1,12.21,116.32Zm146.56,71.25L97.71,172.3l-52.6-37.57L75.45,74,128,60.14,157.72,68H144a4,4,0,0,0-2.79,1.13l-45.7,44.33a12,12,0,0,0,2.06,18.62c19.88,12.71,44.13,10,62.66-6.81L194,152.33Zm85-71.25a4,4,0,0,1-2,2.32l-24,12L188.68,72.43l24-12A4,4,0,0,1,218,62.22l25.53,51.05A4,4,0,0,1,243.79,116.32ZM127.94,217a4,4,0,0,1-3.88,3,4.09,4.09,0,0,1-1-.12L81.38,209.45a4,4,0,0,1-1.36-.62L53.68,190a4,4,0,0,1,4.65-6.51l25.72,18.37,41,10.25A4,4,0,0,1,127.94,217Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};