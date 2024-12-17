var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const Z = s((r, e) => {
  var o = r, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ c.createElement(H, A({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M56,116H216a12,12,0,0,0,4.6-23.09l-160-64A12,12,0,0,0,44,40v64A12,12,0,0,0,56,116ZM52,40a4,4,0,0,1,4-4,4,4,0,0,1,1.57.32l.07,0,159.91,64A4,4,0,0,1,216,108H56a4,4,0,0,1-4-4ZM227.74,149.61A11.75,11.75,0,0,0,216,140H56a12,12,0,0,0-12,12v64a12,12,0,0,0,12,12,11.8,11.8,0,0,0,4.59-.93l160-64,.08,0A11.75,11.75,0,0,0,227.74,149.61Zm-10.17,6.06-160,64A4,4,0,0,1,52,216V152a4,4,0,0,1,4-4H216a4,4,0,0,1,1.59,7.67Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
