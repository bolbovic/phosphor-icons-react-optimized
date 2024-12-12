var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (l)
    for (var e of l(t))
      i.call(t, e) && m(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const d = h((r, e) => {
  var H = r, { children: a } = H, t = n(H, ["children"]);
  return /* @__PURE__ */ c.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M248,132H198.47l-32-64H192a4,4,0,0,0,0-8H64a4,4,0,0,0,0,8H89.53l-32,64H8a4,4,0,0,0,0,8H53.53L28.42,190.21a4,4,0,0,0,1.79,5.37A4.12,4.12,0,0,0,32,196a4,4,0,0,0,3.58-2.21L62.47,140H193.53l26.89,53.79A4,4,0,0,0,224,196a4.12,4.12,0,0,0,1.79-.42,4,4,0,0,0,1.79-5.37L202.47,140H248a4,4,0,0,0,0-8ZM66.47,132l32-64h59.06l32,64Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
