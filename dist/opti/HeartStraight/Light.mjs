var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const n = d((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(h, L({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M221.6,58.38a56.06,56.06,0,0,0-79.12-.08L128,71.78,113.52,58.3a56,56,0,0,0-79.15,79.25l89.36,90.66a6,6,0,0,0,8.54,0l89.33-90.62a56,56,0,0,0,0-79.21Zm-8.52,70.75L128,215.45,42.89,129.1a44,44,0,0,1,62.22-62.23,1.07,1.07,0,0,0,.16.14l18.64,17.36a6,6,0,0,0,8.18,0L150.73,67a1.07,1.07,0,0,0,.16-.14,44,44,0,1,1,62.19,62.26Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
