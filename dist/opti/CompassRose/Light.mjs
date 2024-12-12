var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var r = (a, l, L) => l in a ? c(a, l, { enumerable: !0, configurable: !0, writable: !0, value: L }) : a[l] = L, i = (a, l) => {
  for (var L in l || (l = {}))
    Z.call(l, L) && r(a, L, l[L]);
  if (m)
    for (var L of m(l))
      o.call(l, L) && r(a, L, l[L]);
  return a;
};
var p = (a, l) => {
  var L = {};
  for (var e in a)
    Z.call(a, e) && l.indexOf(e) < 0 && (L[e] = a[e]);
  if (a != null && m)
    for (var e of m(a))
      l.indexOf(e) < 0 && o.call(a, e) && (L[e] = a[e]);
  return L;
};
import A, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((e, L) => {
  var t = e, { children: a } = t, l = p(t, ["children"]);
  return /* @__PURE__ */ A.createElement(s, i({ ref: L }, l), a, /* @__PURE__ */ A.createElement("path", { d: "M249.46,122.18l-28.34-7.09A93.87,93.87,0,0,0,140.9,34.88L133.82,6.54a6,6,0,0,0-11.64,0L115.1,34.88a93.87,93.87,0,0,0-80.22,80.21L6.54,122.18a6,6,0,0,0,0,11.64l28.34,7.09a93.87,93.87,0,0,0,80.22,80.21l7.08,28.34a6,6,0,0,0,11.64,0l7.08-28.34a93.87,93.87,0,0,0,80.22-80.21l28.34-7.09a6,6,0,0,0,0-11.64Zm-41.05-10.26L157,99.05,144.08,47.59A81.87,81.87,0,0,1,208.41,111.92Zm-63-9.76L128,119.51l-17.36-17.35L128,32.74ZM111.92,47.59,99.05,99.05,47.59,111.92A81.87,81.87,0,0,1,111.92,47.59Zm-9.76,63.06L119.52,128l-17.36,17.35L32.74,128ZM47.59,144.08,99.05,157l12.87,51.46A81.87,81.87,0,0,1,47.59,144.08Zm63.05,9.76L128,136.49l17.36,17.35L128,223.26Zm33.44,54.57L157,157l51.46-12.87A81.87,81.87,0,0,1,144.08,208.41Zm9.76-63.06L136.48,128l17.36-17.35L223.26,128Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
