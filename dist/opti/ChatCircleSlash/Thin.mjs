var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((r, e) => {
  var l = r, { children: a } = l, t = n(l, ["children"]);
  return /* @__PURE__ */ c.createElement(d, A({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M51,37.31A4,4,0,0,0,45,42.69L57.83,56.76A100,100,0,0,0,40.53,176.5l-11.9,35.69a12,12,0,0,0,15.18,15.18l35.69-11.9a100,100,0,0,0,112.75-10.85L205,218.69a4,4,0,1,0,5.92-5.38ZM128,220a92,92,0,0,1-46.07-12.35,4,4,0,0,0-3.27-.33L41.28,219.78a4,4,0,0,1-5.06-5.06l12.46-37.38a4,4,0,0,0-.33-3.27A92,92,0,0,1,63.22,62.69l123.64,136A91.75,91.75,0,0,1,128,220Zm100-92a100.28,100.28,0,0,1-11.9,47.36,4,4,0,0,1-3.53,2.1,3.91,3.91,0,0,1-1.89-.48,4,4,0,0,1-1.63-5.42A92,92,0,0,0,92.33,43.17a4,4,0,0,1-3.11-7.37A100.05,100.05,0,0,1,228,128Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
