var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, r, e) => r in a ? s(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, c = (a, r) => {
  for (var e in r || (r = {}))
    H.call(r, e) && p(a, e, r[e]);
  if (m)
    for (var e of m(r))
      l.call(r, e) && p(a, e, r[e]);
  return a;
};
var f = (a, r) => {
  var e = {};
  for (var t in a)
    H.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && l.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as A } from "react";
import R from "../../lib/OptiBase.mjs";
const V = A((t, e) => {
  var o = t, { children: a } = o, r = f(o, ["children"]);
  return /* @__PURE__ */ i.createElement(R, c({ ref: e }, r), a, /* @__PURE__ */ i.createElement("path", { d: "M232,72H160a40,40,0,0,0-32,16A40,40,0,0,0,96,72H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V80A8,8,0,0,0,232,72ZM96,192H32V88H96a24,24,0,0,1,24,24v88A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V112a24,24,0,0,1,24-24h64ZM89.6,43.19a48,48,0,0,1,76.8,0,8,8,0,0,1-12.79,9.62,32,32,0,0,0-51.22,0A8,8,0,1,1,89.6,43.19Z" }));
});
V.displayName = "Regular";
export {
  V as Regular
};
