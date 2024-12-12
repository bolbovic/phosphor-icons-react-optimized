var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import A, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((l, e) => {
  var r = l, { children: a } = r, t = n(r, ["children"]);
  return /* @__PURE__ */ A.createElement(s, L({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M227,51.15A11.86,11.86,0,0,0,216,44H40a12,12,0,0,0-8.88,20.07l.05.05L100,137.59V216a12,12,0,0,0,18.65,10l32-21.33a12,12,0,0,0,5.34-10V137.59l68.86-73.52A11.83,11.83,0,0,0,227,51.15Zm-8,7.5-69.91,74.62A4,4,0,0,0,148,136v58.65a4,4,0,0,1-1.78,3.33l-32,21.33A4,4,0,0,1,108,216V136a4,4,0,0,0-1.09-2.74L37.05,58.67A4,4,0,0,1,40,52H216a4,4,0,0,1,3,6.65Zm23.84,154.53a4,4,0,0,1-5.66,5.66L216,197.67l-21.17,21.17a4,4,0,0,1-5.66-5.66L210.34,192l-21.17-21.17a4,4,0,1,1,5.66-5.66L216,186.35l21.17-21.17a4,4,0,1,1,5.66,5.66L221.66,192Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
