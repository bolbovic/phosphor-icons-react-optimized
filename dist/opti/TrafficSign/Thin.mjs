var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    h.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const d = l((m, e) => {
  var L = m, { children: a } = L, t = n(L, ["children"]);
  return /* @__PURE__ */ c.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M240.32,119.12,136.88,15.68a12.55,12.55,0,0,0-17.76,0L15.68,119.12a12.55,12.55,0,0,0,0,17.76L119.12,240.32h0a12.55,12.55,0,0,0,17.76,0L240.32,136.88a12.55,12.55,0,0,0,0-17.76Zm-5.66,12.1L131.22,234.67a4.56,4.56,0,0,1-6.44,0h0L21.33,131.22a4.55,4.55,0,0,1,0-6.44L124.78,21.33a4.56,4.56,0,0,1,6.44,0L234.67,124.78a4.55,4.55,0,0,1,0,6.44Zm-63.83-14a4,4,0,0,1,0,5.66l-24,24a4,4,0,0,1-5.66-5.66L158.34,124H112a20,20,0,0,0-20,20v8a4,4,0,0,1-8,0v-8a28,28,0,0,1,28-28h46.34L141.17,98.83a4,4,0,0,1,5.66-5.66Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
