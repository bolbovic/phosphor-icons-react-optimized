var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      l.call(t, e) && i(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const M = s((r, e) => {
  var o = r, { children: a } = o, t = Z(o, ["children"]);
  return /* @__PURE__ */ c.createElement(A, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M202.83,58.81l-144,144a4,4,0,0,1-5.66-5.66l144-144a4,4,0,1,1,5.66,5.65ZM53.37,98.62A32,32,0,1,1,76,108,31.82,31.82,0,0,1,53.37,98.62ZM52,76a24,24,0,1,0,7-17A23.85,23.85,0,0,0,52,76ZM212,180a32,32,0,1,1-9.37-22.63A31.82,31.82,0,0,1,212,180Zm-8,0a24,24,0,1,0-7,17A23.89,23.89,0,0,0,204,180Z" }));
});
M.displayName = "Thin";
export {
  M as Thin
};
