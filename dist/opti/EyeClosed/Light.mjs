var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const n = d((r, e) => {
  var m = r, { children: a } = m, t = L(m, ["children"]);
  return /* @__PURE__ */ c.createElement(h, s({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M229.21,165a6,6,0,0,1-10.42,6l-20-35.08a122,122,0,0,1-39,18.09l6.17,37a6,6,0,0,1-4.93,6.91,6.85,6.85,0,0,1-1,.08,6,6,0,0,1-5.91-5L148,156.44a128.86,128.86,0,0,1-40,0L101.92,193A6,6,0,0,1,96,198a6.85,6.85,0,0,1-1-.08A6,6,0,0,1,90.08,191l6.17-37a122,122,0,0,1-39-18.09L37.21,171a6,6,0,1,1-10.42-6l20.85-36.48a152,152,0,0,1-20.31-20.77,6,6,0,0,1,9.34-7.54C53.54,121.11,83.07,146,128,146s74.46-24.89,91.33-45.77a6,6,0,0,1,9.34,7.54,152,152,0,0,1-20.31,20.77Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
