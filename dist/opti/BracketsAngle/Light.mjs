var d = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as h } from "react";
import n from "../../lib/OptiBase.mjs";
const L = h((r, e) => {
  var m = r, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(n, c({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M85.06,43.22,31.11,128l54,84.78a6,6,0,0,1-1.84,8.28,6,6,0,0,1-8.28-1.84l-56-88a6,6,0,0,1,0-6.44l56-88a6,6,0,0,1,10.12,6.44Zm152,81.56-56-88a6,6,0,1,0-10.12,6.44L224.89,128l-53.95,84.78a6,6,0,0,0,1.84,8.28,6,6,0,0,0,8.28-1.84l56-88A6,6,0,0,0,237.06,124.78Z" }));
});
L.displayName = "Light";
export {
  L as Light
};
