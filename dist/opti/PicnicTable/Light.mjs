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
var L = (a, t) => {
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
  var H = r, { children: a } = H, t = L(H, ["children"]);
  return /* @__PURE__ */ c.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M248,130H199.71l-30-60H192a6,6,0,0,0,0-12H64a6,6,0,0,0,0,12H86.29l-30,60H8a6,6,0,0,0,0,12H50.29L26.63,189.32a6,6,0,0,0,10.74,5.36L63.71,142H192.29l26.34,52.68a6,6,0,1,0,10.74-5.36L205.71,142H248a6,6,0,0,0,0-12ZM69.71,130l30-60h56.58l30,60Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
