var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var r = (a, e, l) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, i = (a, e) => {
  for (var l in e || (e = {}))
    o.call(e, l) && r(a, l, e[l]);
  if (m)
    for (var l of m(e))
      Z.call(e, l) && r(a, l, e[l]);
  return a;
};
var p = (a, e) => {
  var l = {};
  for (var t in a)
    o.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && Z.call(a, t) && (l[t] = a[t]);
  return l;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((t, l) => {
  var L = t, { children: a } = L, e = p(L, ["children"]);
  return /* @__PURE__ */ c.createElement(d, i({ ref: l }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M236.24,19.76a6,6,0,0,0-8.48,0L173.94,73.57l-6.79-6.78a30,30,0,0,0-42.42,0L100,91.51l-7.76-7.75a6,6,0,0,0-8.48,8.48L91.51,100,66.79,124.73a30,30,0,0,0,0,42.42l6.78,6.79L19.76,227.76a6,6,0,1,0,8.48,8.48l53.82-53.81,6.79,6.78a30,30,0,0,0,42.42,0L156,164.49l7.76,7.75a6,6,0,0,0,8.48-8.48L164.49,156l24.72-24.73a30,30,0,0,0,0-42.42l-6.78-6.79,53.81-53.82A6,6,0,0,0,236.24,19.76Zm-113.45,161a18,18,0,0,1-25.46,0L75.27,158.67a18,18,0,0,1,0-25.46L100,108.49,147.51,156Zm57.94-57.94L156,147.51,108.49,100l24.72-24.73a18,18,0,0,1,25.46,0l22.06,22.06a18,18,0,0,1,0,25.46ZM90.43,34.23a6,6,0,0,1,11.14-4.46l8,20a6,6,0,1,1-11.14,4.46Zm-64,59.54a6,6,0,0,1,7.8-3.34l20,8a6,6,0,1,1-4.46,11.14l-20-8A6,6,0,0,1,26.43,93.77Zm203.14,68.46a6,6,0,0,1-7.8,3.34l-20-8a6,6,0,0,1,4.46-11.14l20,8A6,6,0,0,1,229.57,162.23Zm-64,59.54a6,6,0,1,1-11.14,4.46l-8-20a6,6,0,0,1,11.14-4.46Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
