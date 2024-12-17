var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var m = (a, l, e) => l in a ? i(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, c = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && m(a, e, l[e]);
  if (o)
    for (var e of o(l))
      L.call(l, e) && m(a, e, l[e]);
  return a;
};
var d = (a, l) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      l.indexOf(t) < 0 && L.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import n from "../../lib/OptiBase.mjs";
const A = s((t, e) => {
  var r = t, { children: a } = r, l = d(r, ["children"]);
  return /* @__PURE__ */ f.createElement(n, c({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M243.93,195.71a20,20,0,0,0-8-14.41L203,155.17l12.1-12.1a43.66,43.66,0,0,0,12.11-39.4,103.52,103.52,0,0,0-36.81-60.23A106.19,106.19,0,0,0,122.52,20,104.29,104.29,0,0,0,20,122.52a106.17,106.17,0,0,0,23.43,67.85,103.52,103.52,0,0,0,60.23,36.81,43.64,43.64,0,0,0,39.39-12.11L155.17,203l26.13,32.95a20,20,0,0,0,14.41,8c.55,0,1.1.07,1.66.07a20,20,0,0,0,14.13-5.86l26.64-26.64A19.94,19.94,0,0,0,243.93,195.71ZM44,122.86C44.6,80,80,44.6,122.86,44a81.92,81.92,0,0,1,65.2,31L75,188.06a81.92,81.92,0,0,1-31-65.2ZM197.71,218l-32.1-40.49A12,12,0,0,0,156.9,173l-.69,0a12,12,0,0,0-8.49,3.51L126.09,198.1h0a19.72,19.72,0,0,1-17.75,5.54,76.28,76.28,0,0,1-11.68-3.33L200.31,96.66a76.28,76.28,0,0,1,3.33,11.68,19.72,19.72,0,0,1-5.54,17.75l-21.63,21.63a12,12,0,0,0,1,17.89L218,197.71Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
