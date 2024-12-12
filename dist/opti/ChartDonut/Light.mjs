var M = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? M(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const h = Z((r, e) => {
  var o = r, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ s.createElement(d, c({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M128,26a6,6,0,0,0-6,6V88a6,6,0,0,0,6,6,34,34,0,1,1-29.45,17,6,6,0,0,0-2.2-8.2l-48.5-28A6,6,0,0,0,39.65,77,102,102,0,1,0,128,26ZM47.21,88.29l38.29,22.1A46,46,0,0,0,82,128a47.64,47.64,0,0,0,.4,6L39.7,145.45a90.27,90.27,0,0,1,7.51-57.16ZM42.81,157l42.7-11.44a46.12,46.12,0,0,0,36.49,28v44.2A90.2,90.2,0,0,1,42.81,157ZM134,217.8V173.6a46,46,0,0,0,0-91.21V38.2a90,90,0,0,1,0,179.6Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
