var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var o = (e, l, a) => l in e ? d(e, l, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[l] = a, s = (e, l) => {
  for (var a in l || (l = {}))
    p.call(l, a) && o(e, a, l[a]);
  if (r)
    for (var a of r(l))
      f.call(l, a) && o(e, a, l[a]);
  return e;
};
var H = (e, l) => {
  var a = {};
  for (var t in e)
    p.call(e, t) && l.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && r)
    for (var t of r(e))
      l.indexOf(t) < 0 && f.call(e, t) && (a[t] = e[t]);
  return a;
};
import c, { forwardRef as i } from "react";
import M from "../../lib/OptiBase.mjs";
const R = i((t, a) => {
  var m = t, { children: e } = m, l = H(m, ["children"]);
  return /* @__PURE__ */ c.createElement(M, s({ ref: a }, l), e, /* @__PURE__ */ c.createElement("path", { d: "M187.14,114.84l26.78-29.46a8,8,0,0,0-11.84-10.76l-20.55,22.6-17.2-54.07A15.94,15.94,0,0,0,149.08,32H106.91A15.94,15.94,0,0,0,91.66,43.15l-50.91,160A16,16,0,0,0,56,224H200a16,16,0,0,0,15.25-20.85ZM184.72,160H146.08l28.62-31.48ZM106.91,48h42.17l20,62.9L124.46,160H71.27ZM56,208l10.18-32H189.81L200,208Z" }));
});
R.displayName = "Regular";
export {
  R as Regular,
  R as default
};
