var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, l, e) => l in a ? s(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, c = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && m(a, e, l[e]);
  if (o)
    for (var e of o(l))
      d.call(l, e) && m(a, e, l[e]);
  return a;
};
var f = (a, l) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      l.indexOf(t) < 0 && d.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as h } from "react";
import n from "../../lib/OptiBase.mjs";
const A = h((t, e) => {
  var r = t, { children: a } = r, l = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(n, c({ ref: e }, l), a, /* @__PURE__ */ i.createElement("path", { d: "M244,132a12,12,0,0,0-12,12v12H197l-14.35-14.34,47.52-47.52a20,20,0,0,0,0-28.28l-56-56a20,20,0,0,0-28.32,0L6.42,150.47A22,22,0,0,0,22,188h33.7l26.14,26.14a20,20,0,0,0,28.29,0l55.51-55.51,15.52,15.51A19.86,19.86,0,0,0,195.31,180H232v12a12,12,0,0,0,24,0V144A12,12,0,0,0,244,132ZM160,29.67l15,15L55.71,164H26.81ZM96,194.34,77.65,176,192,61.66,210.34,80l-53.17,53.17h0Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
