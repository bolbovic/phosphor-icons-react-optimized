var M = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? M(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    c.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const i = d((r, e) => {
  var m = r, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(h, Z({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M221.66,173.66,203.31,192l18.35,18.34a8,8,0,0,1-11.32,11.32L192,203.31l-18.34,18.35a8,8,0,0,1-11.32-11.32L180.69,192l-18.35-18.34a8,8,0,0,1,11.32-11.32L192,180.69l18.34-18.35a8,8,0,0,1,11.32,11.32ZM232,128a8,8,0,0,1-8,8H96.25c3,53.73,35.33,80.6,36.77,81.77h0A8,8,0,0,1,128,232,104,104,0,1,1,232,128ZM148.41,42.4C159.94,57.67,174,83.49,175.79,120h39.84A88.19,88.19,0,0,0,148.41,42.4ZM128,43c-9.54,9.92-29.46,35.42-31.77,77h63.54C157.46,78.4,137.55,52.9,128,43ZM40.37,120H80.21C82,83.49,96.06,57.67,107.59,42.4A88.19,88.19,0,0,0,40.37,120Zm39.84,16H40.37a88.19,88.19,0,0,0,67.22,77.6C96.06,198.33,82,172.51,80.21,136Z" }));
});
i.displayName = "Regular";
export {
  i as Regular,
  i as default
};
