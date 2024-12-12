var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, e, l) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, L = (a, e) => {
  for (var l in e || (e = {}))
    i.call(e, l) && o(a, l, e[l]);
  if (m)
    for (var l of m(e))
      p.call(e, l) && o(a, l, e[l]);
  return a;
};
var Z = (a, e) => {
  var l = {};
  for (var t in a)
    i.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && p.call(a, t) && (l[t] = a[t]);
  return l;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((t, l) => {
  var r = t, { children: a } = r, e = Z(r, ["children"]);
  return /* @__PURE__ */ c.createElement(d, L({ ref: l }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M241.91,118.1l-16-16a14,14,0,0,0-19.55-.23L154.13,49.64a14,14,0,0,0-.23-19.55l-16-16a14,14,0,0,0-19.8,0l-64,64a14,14,0,0,0,0,19.8l16,16a14,14,0,0,0,19.55.23L99.52,124,32.73,190.79a23,23,0,0,0,32.48,32.49L132,156.49l9.87,9.87a14,14,0,0,0,.23,19.55l16,16a14,14,0,0,0,19.8,0l64-64A14,14,0,0,0,241.91,118.1Zm-91.56,39.76-52.21-52.2,47.52-47.52,52.2,52.2ZM78.59,105.41l-16-16a2,2,0,0,1,0-2.83l64-64a2,2,0,0,1,2.83,0l16,16a2,2,0,0,1,0,2.83l-64,64A2,2,0,0,1,78.59,105.41ZM56.73,214.8a11,11,0,0,1-15.52-15.52L108,132.49,123.52,148Zm176.69-85.38-64,64a2,2,0,0,1-2.83,0l-16-16a2,2,0,0,1,0-2.83l64-64a2,2,0,0,1,2.83,0l16,16A2,2,0,0,1,233.42,129.42Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
