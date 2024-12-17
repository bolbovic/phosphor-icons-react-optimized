var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, l, e) => l in a ? f(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, d = (a, l) => {
  for (var e in l || (l = {}))
    L.call(l, e) && r(a, e, l[e]);
  if (m)
    for (var e of m(l))
      p.call(l, e) && r(a, e, l[e]);
  return a;
};
var Z = (a, l) => {
  var e = {};
  for (var t in a)
    L.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const A = i((t, e) => {
  var o = t, { children: a } = o, l = Z(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: e }, l), a, /* @__PURE__ */ c.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm56.49-92.49a12,12,0,0,1-17,17L162,131l-5.51,5.52a12,12,0,0,1-17-17L145,114l-5.52-5.51a12,12,0,0,1,17-17L162,97l5.51-5.52a12,12,0,0,1,17,17L179,114Zm-68,17a12,12,0,0,1-17,0L94,131l-5.51,5.52a12,12,0,0,1-17-17L77,114l-5.52-5.51a12,12,0,0,1,17-17L94,97l5.51-5.52a12,12,0,0,1,17,17L111,114l5.52,5.51A12,12,0,0,1,116.49,136.49ZM144,180a16,16,0,1,1-16-16A16,16,0,0,1,144,180Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
