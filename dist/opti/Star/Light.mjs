var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var L = (a, e, l) => e in a ? s(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, p = (a, e) => {
  for (var l in e || (e = {}))
    o.call(e, l) && L(a, l, e[l]);
  if (r)
    for (var l of r(e))
      i.call(e, l) && L(a, l, e[l]);
  return a;
};
var c = (a, e) => {
  var l = {};
  for (var t in a)
    o.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      e.indexOf(t) < 0 && i.call(a, t) && (l[t] = a[t]);
  return l;
};
import f, { forwardRef as A } from "react";
import d from "../../lib/OptiBase.mjs";
const h = A((t, l) => {
  var m = t, { children: a } = m, e = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(d, p({ ref: l }, e), a, /* @__PURE__ */ f.createElement("path", { d: "M237.28,97.87A14.18,14.18,0,0,0,224.76,88l-60.25-4.87-23.22-56.2a14.37,14.37,0,0,0-26.58,0L91.49,83.11,31.24,88a14.18,14.18,0,0,0-12.52,9.89A14.43,14.43,0,0,0,23,113.32L69,152.93l-14,59.25a14.4,14.4,0,0,0,5.59,15,14.1,14.1,0,0,0,15.91.6L128,196.12l51.58,31.71a14.1,14.1,0,0,0,15.91-.6,14.4,14.4,0,0,0,5.59-15l-14-59.25L233,113.32A14.43,14.43,0,0,0,237.28,97.87Zm-12.14,6.37-48.69,42a6,6,0,0,0-1.92,5.92l14.88,62.79a2.35,2.35,0,0,1-.95,2.57,2.24,2.24,0,0,1-2.6.1L131.14,184a6,6,0,0,0-6.28,0L70.14,217.61a2.24,2.24,0,0,1-2.6-.1,2.35,2.35,0,0,1-1-2.57l14.88-62.79a6,6,0,0,0-1.92-5.92l-48.69-42a2.37,2.37,0,0,1-.73-2.65,2.28,2.28,0,0,1,2.07-1.65l63.92-5.16a6,6,0,0,0,5.06-3.69l24.63-59.6a2.35,2.35,0,0,1,4.38,0l24.63,59.6a6,6,0,0,0,5.06,3.69l63.92,5.16a2.28,2.28,0,0,1,2.07,1.65A2.37,2.37,0,0,1,225.14,104.24Z" }));
});
h.displayName = "Light";
export {
  h as Light
};