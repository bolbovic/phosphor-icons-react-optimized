var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (a, c, e) => c in a ? f(a, c, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[c] = e, i = (a, c) => {
  for (var e in c || (c = {}))
    o.call(c, e) && m(a, e, c[e]);
  if (l)
    for (var e of l(c))
      s.call(c, e) && m(a, e, c[e]);
  return a;
};
var p = (a, c) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && c.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      c.indexOf(t) < 0 && s.call(a, t) && (e[t] = a[t]);
  return e;
};
import C, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const q = d((t, e) => {
  var r = t, { children: a } = r, c = p(r, ["children"]);
  return /* @__PURE__ */ C.createElement(n, i({ ref: e }, c), a, /* @__PURE__ */ C.createElement("path", { d: "M228,120c0,22.63-6,36.72-17.93,41.87a27.3,27.3,0,0,1-11,2.13,41.75,41.75,0,0,1-8.4-.93,4.05,4.05,0,0,1-2.52-1.64,368.49,368.49,0,0,0-47.75-55.26,8,8,0,0,0-11,11.62c14.84,13.91,64.13,63.49,78.32,120.27a8,8,0,0,1-5.82,9.7A8.13,8.13,0,0,1,200,248a8,8,0,0,1-7.75-6.06c-4.12-16.47-11.65-32.48-20.46-47.09a25.85,25.85,0,0,1-1.9,7.21C164.72,214,150.63,220,128,220s-36.72-6-41.88-17.94c-5.45-12.58-.39-30.82,15-54.21.68-1,1.36-2,2-3l-3,2C82.84,158.27,68.35,164,56.89,164a27.3,27.3,0,0,1-11-2.13C34,156.72,28,142.63,28,120s6-36.72,17.93-41.88c12.59-5.45,30.83-.39,54.22,15l3,2q-1-1.5-2-3c-15.41-23.39-20.47-41.63-15-54.22C91.28,26,105.37,20,128,20s36.72,6,41.88,17.93c5.45,12.59.39,30.83-15,54.22q-1,1.53-2,3l3-2c23.39-15.41,41.63-20.47,54.22-15C222,83.28,228,97.37,228,120Z" }));
});
q.displayName = "Fill";
export {
  q as Fill
};
