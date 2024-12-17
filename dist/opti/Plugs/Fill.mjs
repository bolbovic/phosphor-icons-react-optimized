var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, e, l) => e in a ? s(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, L = (a, e) => {
  for (var l in e || (e = {}))
    i.call(e, l) && o(a, l, e[l]);
  if (r)
    for (var l of r(e))
      p.call(e, l) && o(a, l, e[l]);
  return a;
};
var c = (a, e) => {
  var l = {};
  for (var t in a)
    i.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      e.indexOf(t) < 0 && p.call(a, t) && (l[t] = a[t]);
  return l;
};
import f, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const E = d((t, l) => {
  var m = t, { children: a } = m, e = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(n, L({ ref: l }, e), a, /* @__PURE__ */ f.createElement("path", { d: "M149.66,149.66,131.31,168l18.35,18.34a8,8,0,0,1-11.32,11.32L132,191.31l-23.31,23.32a32.06,32.06,0,0,1-45.26,0l-5.37-5.38-28.4,28.41a8,8,0,0,1-11.32-11.32l28.41-28.4-5.38-5.37a32,32,0,0,1,0-45.26L64.69,124l-6.35-6.34a8,8,0,0,1,11.32-11.32L88,124.69l18.34-18.35a8,8,0,0,1,11.32,11.32L99.31,136,120,156.69l18.34-18.35a8,8,0,0,1,11.32,11.32Zm88-131.32a8,8,0,0,0-11.32,0l-28.4,28.41-5.37-5.38a32.05,32.05,0,0,0-45.26,0L124,64.69l-6.34-6.35a8,8,0,0,0-11.32,11.32l80,80a8,8,0,0,0,11.32-11.32L191.31,132l23.32-23.31a32,32,0,0,0,0-45.26l-5.38-5.37,28.41-28.4A8,8,0,0,0,237.66,18.34Z" }));
});
E.displayName = "Fill";
export {
  E as Fill
};
