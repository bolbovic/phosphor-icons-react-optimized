var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? s(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, n = (a, l) => {
  for (var e in l || (l = {}))
    i.call(l, e) && o(a, e, l[e]);
  if (r)
    for (var e of r(l))
      p.call(l, e) && o(a, e, l[e]);
  return a;
};
var c = (a, l) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as L } from "react";
import d from "../../lib/OptiBase.mjs";
const h = L((t, e) => {
  var m = t, { children: a } = m, l = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(d, n({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M219,213.31,59,37.31A4,4,0,0,0,53,42.69l74,81.42-.14,0a5.17,5.17,0,0,0-.51.18l-.15.06-.05,0a4,4,0,0,0-.56.35l-.05,0-64,48a4,4,0,0,0,4.8,6.4L124,136v88a4,4,0,0,0,2.21,3.58A4.05,4.05,0,0,0,128,228a4,4,0,0,0,2.4-.8l53.74-40.3L213,218.69a4,4,0,1,0,5.92-5.38ZM132,216V136l18.44,13.83L178.73,181ZM124,71.63V32a4,4,0,0,1,6.4-3.2l64,48a4,4,0,0,1,0,6.4l-33.53,25.15a4,4,0,0,1-2.4.8,4,4,0,0,1-2.4-7.2l29.26-22L132,40V71.63a4,4,0,0,1-8,0Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
