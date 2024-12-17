var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const V = h((r, e) => {
  var m = r, { children: a } = m, t = H(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M240,124H220V48a12,12,0,0,0-14.15-11.81l-160,29.1A12,12,0,0,0,36,77.09V124H16a4,4,0,0,0,0,8H36v46.91a12,12,0,0,0,9.85,11.8l160,29.09a11.28,11.28,0,0,0,2.16.2,12,12,0,0,0,12-12V132h20a4,4,0,0,0,0-8ZM44,77.09a4,4,0,0,1,3.28-3.93l160-29.09A4,4,0,0,1,212,48v76H44ZM212,208a4,4,0,0,1-4.72,3.93l-160-29.09A4,4,0,0,1,44,178.91V132H212Z" }));
});
V.displayName = "Thin";
export {
  V as Thin
};
