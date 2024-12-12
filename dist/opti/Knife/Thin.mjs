var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const A = h((r, e) => {
  var o = r, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ s.createElement(l, n({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M229,35a23.83,23.83,0,0,0-33.66,0L21.17,209.22a4,4,0,0,0,1.93,6.72A156.23,156.23,0,0,0,58.4,220c39.41,0,72.27-15.08,94.78-29.6,31.21-20.14,49.23-43,50-43.91a4,4,0,0,0-.32-5.29L179.67,118,229,68.63A23.84,23.84,0,0,0,229,35ZM194.59,144.27a222.43,222.43,0,0,1-46,39.55c-37.85,24.35-77,33-116.55,25.81L146,95.67ZM223.38,63,174,112.36,151.66,90,201,40.62A15.8,15.8,0,0,1,223.38,63Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
