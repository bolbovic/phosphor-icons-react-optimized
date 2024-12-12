var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, c = (a, r) => {
  for (var e in r || (r = {}))
    A.call(r, e) && p(a, e, r[e]);
  if (m)
    for (var e of m(r))
      l.call(r, e) && p(a, e, r[e]);
  return a;
};
var f = (a, r) => {
  var e = {};
  for (var t in a)
    A.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && l.call(a, t) && (e[t] = a[t]);
  return e;
};
import h, { forwardRef as s } from "react";
import R from "../../lib/OptiBase.mjs";
const V = s((t, e) => {
  var o = t, { children: a } = o, r = f(o, ["children"]);
  return /* @__PURE__ */ h.createElement(R, c({ ref: e }, r), a, /* @__PURE__ */ h.createElement("path", { d: "M176,74.78V72a16,16,0,0,0-16-16H136V16a8,8,0,0,0-16,0V56H96A16,16,0,0,0,80,72v2.78A111.73,111.73,0,0,0,16,176a8,8,0,0,0,8,8H88a40,40,0,0,0,80,0h64a8,8,0,0,0,8-8A111.73,111.73,0,0,0,176,74.78ZM128,208a24,24,0,0,1-24-24h48A24,24,0,0,1,128,208ZM32.33,168A95.79,95.79,0,0,1,91.08,87.35,8,8,0,0,0,96,80V72h64v8a8,8,0,0,0,4.92,7.38A95.79,95.79,0,0,1,223.67,168Z" }));
});
V.displayName = "Regular";
export {
  V as Regular
};
