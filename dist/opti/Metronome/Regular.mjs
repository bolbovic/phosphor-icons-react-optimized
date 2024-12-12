var s = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var o = (e, l, a) => l in e ? s(e, l, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[l] = a, c = (e, l) => {
  for (var a in l || (l = {}))
    p.call(l, a) && o(e, a, l[a]);
  if (t)
    for (var a of t(l))
      H.call(l, a) && o(e, a, l[a]);
  return e;
};
var f = (e, l) => {
  var a = {};
  for (var r in e)
    p.call(e, r) && l.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && t)
    for (var r of t(e))
      l.indexOf(r) < 0 && H.call(e, r) && (a[r] = e[r]);
  return a;
};
import i, { forwardRef as M } from "react";
import R from "../../lib/OptiBase.mjs";
const Z = M((r, a) => {
  var m = r, { children: e } = m, l = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(R, c({ ref: a }, l), e, /* @__PURE__ */ i.createElement("path", { d: "M187.14,114.84l26.78-29.46a8,8,0,0,0-11.84-10.76l-20.55,22.6-17.2-54.07A15.94,15.94,0,0,0,149.08,32H106.91A15.94,15.94,0,0,0,91.66,43.15l-50.91,160A16,16,0,0,0,56,224H200a16,16,0,0,0,15.25-20.85ZM184.72,160H146.08l28.62-31.48ZM106.91,48h42.17l20,62.9L124.46,160H71.27ZM56,208l10.18-32H189.81L200,208Z" }));
});
Z.displayName = "Regular";
export {
  Z as Regular
};
