var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? s(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, c = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && o(a, e, r[e]);
  if (m)
    for (var e of m(r))
      Z.call(r, e) && o(a, e, r[e]);
  return a;
};
var f = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as L } from "react";
import R from "../../lib/OptiBase.mjs";
const d = L((t, e) => {
  var l = t, { children: a } = l, r = f(l, ["children"]);
  return /* @__PURE__ */ i.createElement(R, c({ ref: e }, r), a, /* @__PURE__ */ i.createElement("path", { d: "M164,80a28,28,0,1,0-28-28A28,28,0,0,0,164,80Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,164,40Zm54.25,72.32-136-40a8,8,0,1,0-4.52,15.35l40.85,12L85.07,150,40.34,137a25.18,25.18,0,1,0-14.13,48.34L183.65,231a25.88,25.88,0,0,0,7.14,1,25.17,25.17,0,0,0,7-49.36l-50.89-14.75,19.75-29.44a8,8,0,0,0-4.42-12.14l-35.33-10.23,7.78-11.67,79.07,23.26a8,8,0,0,0,4.51-15.35ZM200,206.81a9.07,9.07,0,0,1-3.67,7.3,9.27,9.27,0,0,1-8.22,1.5L30.67,170a9.24,9.24,0,0,1-6.67-8.8,9.06,9.06,0,0,1,3.66-7.3,9.26,9.26,0,0,1,8.23-1.5L193.33,198A9.23,9.23,0,0,1,200,206.81Zm-52.75-68.18-16.49,24.59-29.58-8.58,16.4-24.6Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
