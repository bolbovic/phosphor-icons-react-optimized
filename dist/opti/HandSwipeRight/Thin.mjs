var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (m)
    for (var e of m(t))
      l.call(t, e) && c(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import V, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const v = h((r, e) => {
  var o = r, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ V.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M212,140v36c0,24.66-8.08,41.1-8.42,41.79a4,4,0,1,1-7.16-3.58c.07-.15,7.58-15.55,7.58-38.21V140a16,16,0,0,0-32,0v4a4,4,0,0,1-8,0V124a16,16,0,0,0-32,0v12a4,4,0,0,1-8,0V68a16,16,0,0,0-32,0V176a4,4,0,0,1-7.39,2.11l-18.68-30a.75.75,0,0,1-.07-.12,16,16,0,0,0-27.72,16l29.31,50a4,4,0,0,1-6.9,4L31.22,168a24,24,0,0,1,41.52-24.09L84,162V68a24,24,0,0,1,48,0v38.13a24,24,0,0,1,39.94,16.06A24,24,0,0,1,212,140Zm38.83-86.83-32-32a4,4,0,0,0-5.66,5.66L238.34,52H176a4,4,0,0,0,0,8h62.34L213.17,85.17a4,4,0,0,0,5.66,5.66l32-32A4,4,0,0,0,250.83,53.17Z" }));
});
v.displayName = "Thin";
export {
  v as Thin
};
