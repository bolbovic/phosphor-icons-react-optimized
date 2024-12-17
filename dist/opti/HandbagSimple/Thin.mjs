var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var m = r, { children: a } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ c.createElement(A, H({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M235.92,198.59l-14.26-120a12,12,0,0,0-12-10.59H172V64a44,44,0,0,0-88,0v4H46.33a12,12,0,0,0-12,10.59l-14.26,120A12,12,0,0,0,23,207.94,12.11,12.11,0,0,0,32.08,212H223.92a12.11,12.11,0,0,0,9.06-4.06A12,12,0,0,0,235.92,198.59ZM92,64a36,36,0,0,1,72,0v4H92ZM227,202.63a4.08,4.08,0,0,1-3.08,1.37H32.08A4.08,4.08,0,0,1,29,202.63a3.9,3.9,0,0,1-1-3.09l14.25-120a4,4,0,0,1,4-3.54H209.67a4,4,0,0,1,4.05,3.54l14.25,120A3.9,3.9,0,0,1,227,202.63Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
