var s = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? s(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, c = (a, r) => {
  for (var e in r || (r = {}))
    H.call(r, e) && o(a, e, r[e]);
  if (l)
    for (var e of l(r))
      p.call(r, e) && o(a, e, r[e]);
  return a;
};
var f = (a, r) => {
  var e = {};
  for (var t in a)
    H.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      r.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as L } from "react";
import R from "../../lib/OptiBase.mjs";
const d = L((t, e) => {
  var m = t, { children: a } = m, r = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(R, c({ ref: e }, r), a, /* @__PURE__ */ i.createElement("path", { d: "M208,192H80.63l21.82-24H152A64,64,0,0,0,199.54,61.2l14.38-15.82a8,8,0,0,0-11.84-10.76L187.43,50.73A63.66,63.66,0,0,0,152,40H56a8,8,0,0,0,0,16h96a47.72,47.72,0,0,1,24.51,6.75L95.37,152H56a8,8,0,0,0,0,16H80.82L42.08,210.62a8,8,0,1,0,11.84,10.76L66.08,208H208a8,8,0,0,0,0-16ZM188.71,73.12A48,48,0,0,1,152,152H117Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
