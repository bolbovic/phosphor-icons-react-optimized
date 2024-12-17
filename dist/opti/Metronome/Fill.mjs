var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, l, a) => l in e ? d(e, l, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[l] = a, c = (e, l) => {
  for (var a in l || (l = {}))
    i.call(l, a) && o(e, a, l[a]);
  if (r)
    for (var a of r(l))
      p.call(l, a) && o(e, a, l[a]);
  return e;
};
var f = (e, l) => {
  var a = {};
  for (var t in e)
    i.call(e, t) && l.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && r)
    for (var t of r(e))
      l.indexOf(t) < 0 && p.call(e, t) && (a[t] = e[t]);
  return a;
};
import s, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const Z = n((t, a) => {
  var m = t, { children: e } = m, l = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(A, c({ ref: a }, l), e, /* @__PURE__ */ s.createElement("path", { d: "M187.14,114.84l26.78-29.46a8,8,0,0,0-11.84-10.76l-20.55,22.6-17.2-54.07A15.94,15.94,0,0,0,149.08,32H106.91A15.94,15.94,0,0,0,91.66,43.15l-50.91,160A16,16,0,0,0,56,224H200a16,16,0,0,0,15.25-20.85ZM71.27,160,106.91,48h42.17l20,62.9L124.46,160Zm74.81,0,28.62-31.48,10,31.48Z" }));
});
Z.displayName = "Fill";
export {
  Z as Fill
};
