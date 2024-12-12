var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    c.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import V, { forwardRef as s } from "react";
import v from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var m = r, { children: a } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ V.createElement(v, p({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M212,140v36c0,24.66-8.08,41.1-8.42,41.79a4,4,0,1,1-7.16-3.58c.07-.15,7.58-15.55,7.58-38.21V140a16,16,0,0,0-32,0v4a4,4,0,0,1-8,0V124a16,16,0,0,0-32,0v12a4,4,0,0,1-8,0V68a16,16,0,0,0-32,0V176a4,4,0,0,1-7.39,2.11l-18.68-30a.75.75,0,0,1-.07-.12,16,16,0,0,0-27.72,16l29.31,50a4,4,0,0,1-6.9,4L31.22,168a24,24,0,0,1,41.52-24.09L84,162V68a24,24,0,0,1,48,0v38.13a24,24,0,0,1,39.94,16.06A24,24,0,0,1,212,140Zm36-88H185.65l25.18-25.17a4,4,0,1,0-5.66-5.66l-32,32a4,4,0,0,0,0,5.66l32,32a4,4,0,1,0,5.66-5.66L185.65,60H248a4,4,0,0,0,0-8Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
