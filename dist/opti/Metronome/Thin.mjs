var c = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((r, e) => {
  var m = r, { children: a } = m, t = H(m, ["children"]);
  return /* @__PURE__ */ n.createElement(h, A({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M182.63,113.85,211,82.69A4,4,0,1,0,205,77.31L179.82,105l-19.3-60.68A12,12,0,0,0,149.08,36H106.92a12,12,0,0,0-11.44,8.36l-50.9,160A12,12,0,0,0,56,220H200a12,12,0,0,0,11.43-15.64ZM190.19,164H137l39.37-43.31ZM103.1,46.79A4,4,0,0,1,106.92,44h42.16a4,4,0,0,1,3.82,2.79l20.71,65.09L126.23,164H65.81ZM203.22,210.36A4,4,0,0,1,200,212H56a4,4,0,0,1-3.81-5.21L63.27,172H192.73l11.07,34.79A4,4,0,0,1,203.22,210.36Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
