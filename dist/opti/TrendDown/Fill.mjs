var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? d(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, c = (a, l) => {
  for (var e in l || (l = {}))
    i.call(l, e) && o(a, e, l[e]);
  if (r)
    for (var e of r(l))
      p.call(l, e) && o(a, e, l[e]);
  return a;
};
var f = (a, l) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import s, { forwardRef as n } from "react";
import L from "../../lib/OptiBase.mjs";
const A = n((t, e) => {
  var m = t, { children: a } = m, l = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(L, c({ ref: e }, l), a, /* @__PURE__ */ s.createElement("path", { d: "M240,128v64a8,8,0,0,1-8,8H168a8,8,0,0,1-5.66-13.66L188.69,160,136,107.31l-34.34,34.35a8,8,0,0,1-11.32,0l-72-72A8,8,0,0,1,29.66,58.34L96,124.69l34.34-34.35a8,8,0,0,1,11.32,0L200,148.69l26.34-26.35A8,8,0,0,1,240,128Z" }));
});
A.displayName = "Fill";
export {
  A as Fill
};
