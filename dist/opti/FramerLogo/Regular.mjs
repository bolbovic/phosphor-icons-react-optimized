var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, c = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && o(a, e, r[e]);
  if (m)
    for (var e of m(r))
      H.call(r, e) && o(a, e, r[e]);
  return a;
};
var f = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && H.call(a, t) && (e[t] = a[t]);
  return e;
};
import h, { forwardRef as s } from "react";
import R from "../../lib/OptiBase.mjs";
const d = s((t, e) => {
  var l = t, { children: a } = l, r = f(l, ["children"]);
  return /* @__PURE__ */ h.createElement(R, c({ ref: e }, r), a, /* @__PURE__ */ h.createElement("path", { d: "M208,104V40a8,8,0,0,0-8-8H56a8,8,0,0,0-5.31,14L107,96H56a8,8,0,0,0-8,8v64a8,8,0,0,0,2.34,5.66l72,72A8,8,0,0,0,136,240V176h64a8,8,0,0,0,5.31-14L149,112h51A8,8,0,0,0,208,104Zm-29,56H128a8,8,0,0,0-8,8v52.69l-56-56V112h61Zm13-64H131L77,48H192Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
