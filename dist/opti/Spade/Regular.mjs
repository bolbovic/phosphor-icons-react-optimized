var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var l = (a, r, e) => r in a ? s(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, A = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && l(a, e, r[e]);
  if (m)
    for (var e of m(r))
      c.call(r, e) && l(a, e, r[e]);
  return a;
};
var f = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && c.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as R } from "react";
import d from "../../lib/OptiBase.mjs";
const h = R((t, e) => {
  var o = t, { children: a } = o, r = f(o, ["children"]);
  return /* @__PURE__ */ i.createElement(d, A({ ref: e }, r), a, /* @__PURE__ */ i.createElement("path", { d: "M131.58,16.85a8,8,0,0,0-7.16,0C120.32,18.9,24,67.84,24,136a56,56,0,0,0,74.15,53L88.34,221.7A8,8,0,0,0,96,232h64a8,8,0,0,0,7.66-10.3L157.85,189A56,56,0,0,0,232,136C232,67.84,135.68,18.9,131.58,16.85ZM176,176a40,40,0,0,1-26.29-9.85,8,8,0,0,0-12.92,8.33L149.25,216h-42.5l12.46-41.52a8,8,0,0,0-12.92-8.33A40,40,0,0,1,40,136c0-29.88,24.41-56.55,44.89-73.66A279.13,279.13,0,0,1,128,33.06a279.13,279.13,0,0,1,43.11,29.28C208.21,93.34,216,119.51,216,136A40,40,0,0,1,176,176Z" }));
});
h.displayName = "Regular";
export {
  h as Regular
};
