var c = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const v = f((r, e) => {
  var m = r, { children: a } = m, t = h(m, ["children"]);
  return /* @__PURE__ */ n.createElement(s, H({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M235.92,198.59l-14.26-120a12,12,0,0,0-12-10.59H172V64a44,44,0,0,0-88,0v4H46.33a12,12,0,0,0-12,10.59l-14.26,120A12,12,0,0,0,23,207.94,12.11,12.11,0,0,0,32.08,212H223.92a12.11,12.11,0,0,0,9.06-4.06A12,12,0,0,0,235.92,198.59ZM92,64a36,36,0,0,1,72,0v4H92ZM227,202.63a4.08,4.08,0,0,1-3.08,1.37H32.08A4.08,4.08,0,0,1,29,202.63a3.9,3.9,0,0,1-1-3.09l14.25-120a4,4,0,0,1,4-3.54H84v28a4,4,0,0,0,8,0V76h72v28a4,4,0,0,0,8,0V76h37.67a4,4,0,0,1,4.05,3.54l14.25,120A3.9,3.9,0,0,1,227,202.63Z" }));
});
v.displayName = "Thin";
export {
  v as Thin
};
