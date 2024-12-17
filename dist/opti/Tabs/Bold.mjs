var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    m.call(t, e) && H(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && H(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var l in a)
    m.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as h } from "react";
import i from "../../lib/OptiBase.mjs";
const s = h((l, e) => {
  var r = l, { children: a } = r, t = A(r, ["children"]);
  return /* @__PURE__ */ c.createElement(i, d({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M255.49,164.55h0l0-.06a.29.29,0,0,0,0-.09L233.2,90.25A19.87,19.87,0,0,0,214.05,76H204a12,12,0,0,0,0,24h7.07l16.8,56H196.93L177.2,90.25A19.87,19.87,0,0,0,158.05,76H148a12,12,0,0,0,0,24h7.07l16.8,56H140.93L121.2,90.25A19.87,19.87,0,0,0,102.05,76H42A19.87,19.87,0,0,0,22.8,90.25L.55,164.4a.29.29,0,0,0,0,.09l0,.06a5.68,5.68,0,0,0-.16.62A12,12,0,0,0,12,180H244a12,12,0,0,0,11.49-15.45ZM44.93,100H99.07l16.8,56H28.13Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
