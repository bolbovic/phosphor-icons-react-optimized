var M = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (e, a, t) => a in e ? M(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, n = (e, a) => {
  for (var t in a || (a = {}))
    H.call(a, t) && p(e, t, a[t]);
  if (o)
    for (var t of o(a))
      c.call(a, t) && p(e, t, a[t]);
  return e;
};
var i = (e, a) => {
  var t = {};
  for (var l in e)
    H.call(e, l) && a.indexOf(l) < 0 && (t[l] = e[l]);
  if (e != null && o)
    for (var l of o(e))
      a.indexOf(l) < 0 && c.call(e, l) && (t[l] = e[l]);
  return t;
};
import r, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const f = Z((l, t) => {
  var m = l, { children: e } = m, a = i(m, ["children"]);
  return /* @__PURE__ */ r.createElement(d, n({ ref: t }, a), e, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M200,216H56a8,8,0,0,1-7.63-10.43l12-37.57H195.66l12,37.57A8,8,0,0,1,200,216Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M187.14,114.84l26.78-29.46a8,8,0,0,0-11.84-10.76l-20.55,22.6-17.2-54.07A15.94,15.94,0,0,0,149.08,32H106.91A15.94,15.94,0,0,0,91.66,43.15l-50.91,160A16,16,0,0,0,56,224H200a16,16,0,0,0,15.25-20.85ZM184.72,160H146.08l28.62-31.48ZM106.91,48h42.17l20,62.9L124.46,160H71.27ZM56,208l10.18-32H189.81L200,208Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
