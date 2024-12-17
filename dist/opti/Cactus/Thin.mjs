var c = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (H)
    for (var e of H(t))
      i.call(t, e) && m(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && H)
    for (var r of H(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import V, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((r, e) => {
  var h = r, { children: a } = h, t = n(h, ["children"]);
  return /* @__PURE__ */ V.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M216,212H164V180h8a64.07,64.07,0,0,0,64-64,24,24,0,0,0-48,0,16,16,0,0,1-16,16h-8V56a36,36,0,0,0-72,0V92H84A16,16,0,0,1,68,76a24,24,0,0,0-48,0,64.07,64.07,0,0,0,64,64h8v72H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8ZM96,132H84A56.06,56.06,0,0,1,28,76a16,16,0,0,1,32,0,24,24,0,0,0,24,24H96a4,4,0,0,0,4-4V56a28,28,0,0,1,56,0v80a4,4,0,0,0,4,4h12a24,24,0,0,0,24-24,16,16,0,0,1,32,0,56.06,56.06,0,0,1-56,56H160a4,4,0,0,0-4,4v36H100V136A4,4,0,0,0,96,132Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
