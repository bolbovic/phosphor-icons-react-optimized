var f = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (H)
    for (var e of H(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && H)
    for (var r of H(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const d = l((r, e) => {
  var m = r, { children: a } = m, t = L(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M220,160a4,4,0,0,1-4,4H100.68L51,218.69A4,4,0,0,1,45,213.31L89.87,164H40a4,4,0,0,1,0-8H97.14l50.91-56H40a4,4,0,0,1,0-8H155.32L205,37.31A4,4,0,0,1,211,42.69L166.13,92H216a4,4,0,0,1,0,8H158.86L108,156H216A4,4,0,0,1,220,160Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
