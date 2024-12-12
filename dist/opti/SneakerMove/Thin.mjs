var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const A = h((r, e) => {
  var l = r, { children: a } = l, t = H(l, ["children"]);
  return /* @__PURE__ */ c.createElement(s, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M229.37,170.21,200.75,155.9A51.7,51.7,0,0,1,172,109.39V80a4,4,0,0,0-4-4,52.06,52.06,0,0,1-52-52,4,4,0,0,0-6.42-3.19l-77,58.41-.1.08a12,12,0,0,0-.94,17.81L145.23,210.83a4,4,0,0,0,2.83,1.17H224a12,12,0,0,0,12-12V180.94A11.94,11.94,0,0,0,229.37,170.21ZM228,200a4,4,0,0,1-4,4H149.72L37.17,91.45a4,4,0,0,1,.27-5.9l15.79-12,41.26,41.25a4,4,0,0,0,5.65-5.66L59.67,68.7l48.82-37A60.12,60.12,0,0,0,164,83.87v25.52a59.68,59.68,0,0,0,33.17,53.67l28.62,14.31a4,4,0,0,1,2.21,3.57ZM70.8,180H32a4,4,0,0,1,0-8H70.8a4,4,0,1,1,0,8Zm36,28a4,4,0,0,1-4,4H48a4,4,0,0,1,0-8h54.8A4,4,0,0,1,106.8,208Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
