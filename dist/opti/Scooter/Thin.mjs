var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
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
import A from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var o = r, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ c.createElement(A, h({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M212,140a31.29,31.29,0,0,0-6.24.62l-34-101.88A4,4,0,0,0,168,36H136a4,4,0,0,0,0,8h29.12l19,57.14-58,70.86H76a32,32,0,1,0-1,8h53a4,4,0,0,0,3.09-1.46l56.06-68.43,11,33A32,32,0,1,0,212,140ZM44,196a24,24,0,1,1,24-24A24,24,0,0,1,44,196Zm168,0a24,24,0,1,1,24-24A24,24,0,0,1,212,196Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
