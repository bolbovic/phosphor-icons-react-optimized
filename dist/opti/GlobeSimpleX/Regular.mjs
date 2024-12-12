var h = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? h(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, Z = (a, r) => {
  for (var e in r || (r = {}))
    c.call(r, e) && o(a, e, r[e]);
  if (l)
    for (var e of l(r))
      p.call(r, e) && o(a, e, r[e]);
  return a;
};
var M = (a, r) => {
  var e = {};
  for (var t in a)
    c.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      r.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const C = i((t, e) => {
  var m = t, { children: a } = m, r = M(m, ["children"]);
  return /* @__PURE__ */ f.createElement(s, Z({ ref: e }, r), a, /* @__PURE__ */ f.createElement("path", { d: "M221.66,173.66,203.31,192l18.35,18.34a8,8,0,0,1-11.32,11.32L192,203.31l-18.34,18.35a8,8,0,0,1-11.32-11.32L180.69,192l-18.35-18.34a8,8,0,0,1,11.32-11.32L192,180.69l18.34-18.35a8,8,0,0,1,11.32,11.32ZM232,128a8,8,0,0,1-8,8H96.25c3,53.73,35.33,80.6,36.77,81.77h0A8,8,0,0,1,128,232,104,104,0,1,1,232,128ZM148.41,42.4C159.94,57.67,174,83.49,175.79,120h39.84A88.19,88.19,0,0,0,148.41,42.4ZM128,43c-9.54,9.92-29.46,35.42-31.77,77h63.54C157.46,78.4,137.55,52.9,128,43ZM40.37,120H80.21C82,83.49,96.06,57.67,107.59,42.4A88.19,88.19,0,0,0,40.37,120Zm39.84,16H40.37a88.19,88.19,0,0,0,67.22,77.6C96.06,198.33,82,172.51,80.21,136Z" }));
});
C.displayName = "Regular";
export {
  C as Regular
};
