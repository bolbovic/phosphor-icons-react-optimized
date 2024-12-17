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
var L = (a, t) => {
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
  var l = r, { children: a } = l, t = L(l, ["children"]);
  return /* @__PURE__ */ c.createElement(s, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M226.27,118.11,206.38,42a7.94,7.94,0,0,0-15.16-.75L172.57,92H83.43L64.78,41.24A7.94,7.94,0,0,0,49.62,42L29.73,118.11a53.16,53.16,0,0,0,20.44,56.68l73.27,51.76a7.9,7.9,0,0,0,9.12,0l73.27-51.76A53.16,53.16,0,0,0,226.27,118.11Zm-25.05,50.14L128,220,54.78,168.25a45.11,45.11,0,0,1-17.31-48.11l19.84-76L76.89,97.38A4,4,0,0,0,80.64,100h94.72a4,4,0,0,0,3.75-2.62l19.57-53.22,19.85,76A45.11,45.11,0,0,1,201.22,168.25Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
