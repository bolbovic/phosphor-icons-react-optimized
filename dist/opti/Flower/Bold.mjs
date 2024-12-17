var M = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var r = (a, c, e) => c in a ? M(a, c, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[c] = e, p = (a, c) => {
  for (var e in c || (c = {}))
    Z.call(c, e) && r(a, e, c[e]);
  if (m)
    for (var e of m(c))
      A.call(c, e) && r(a, e, c[e]);
  return a;
};
var d = (a, c) => {
  var e = {};
  for (var t in a)
    Z.call(a, t) && c.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      c.indexOf(t) < 0 && A.call(a, t) && (e[t] = a[t]);
  return e;
};
import l, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((t, e) => {
  var o = t, { children: a } = o, c = d(o, ["children"]);
  return /* @__PURE__ */ l.createElement(i, p({ ref: e }, c), a, /* @__PURE__ */ l.createElement("path", { d: "M215.64,128a44,44,0,0,0-43.82-75.9,44,44,0,0,0-87.64,0A44,44,0,0,0,40.36,128a44,44,0,0,0,43.82,75.89,44,44,0,0,0,87.64,0A44,44,0,0,0,215.64,128ZM108,128a20,20,0,1,1,20,20A20,20,0,0,1,108,128Zm72.35-53.32a20,20,0,1,1,20,34.64c-2.65,1.53-10.52,4.88-30.1,6.42a44.08,44.08,0,0,0-10.52-18.18C170.86,81.36,177.7,76.21,180.35,74.68ZM128,36a20,20,0,0,1,20,20c0,3.06-1,11.55-9.49,29.28a43.79,43.79,0,0,0-21,0C109,67.55,108,59.06,108,56A20,20,0,0,1,128,36ZM48.33,82a20,20,0,0,1,27.32-7.32c2.65,1.53,9.49,6.68,20.62,22.88a44.08,44.08,0,0,0-10.52,18.18c-19.58-1.54-27.45-4.89-30.1-6.42A20,20,0,0,1,48.33,82Zm27.32,99.32a20,20,0,1,1-20-34.64c2.65-1.53,10.52-4.88,30.1-6.42a44.08,44.08,0,0,0,10.52,18.18C85.14,174.64,78.3,179.79,75.65,181.32ZM128,220a20,20,0,0,1-20-20c0-3.06,1-11.55,9.49-29.28a43.79,43.79,0,0,0,21,0C147,188.45,148,196.94,148,200A20,20,0,0,1,128,220Zm79.67-46a20,20,0,0,1-27.32,7.32c-2.65-1.53-9.49-6.68-20.62-22.88a44.08,44.08,0,0,0,10.52-18.18c19.58,1.54,27.45,4.89,30.1,6.42A20,20,0,0,1,207.67,174Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
