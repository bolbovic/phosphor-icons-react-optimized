var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, e, c) => e in a ? d(a, e, { enumerable: !0, configurable: !0, writable: !0, value: c }) : a[e] = c, p = (a, e) => {
  for (var c in e || (e = {}))
    o.call(e, c) && m(a, c, e[c]);
  if (r)
    for (var c of r(e))
      i.call(e, c) && m(a, c, e[c]);
  return a;
};
var s = (a, e) => {
  var c = {};
  for (var t in a)
    o.call(a, t) && e.indexOf(t) < 0 && (c[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      e.indexOf(t) < 0 && i.call(a, t) && (c[t] = a[t]);
  return c;
};
import f, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const n = h((t, c) => {
  var C = t, { children: a } = C, e = s(C, ["children"]);
  return /* @__PURE__ */ f.createElement(l, p({ ref: c }, e), a, /* @__PURE__ */ f.createElement("path", { d: "M185.22,125.25a62,62,0,0,0-11.78-7c-3.53-29.6-23-38.82-31.83-41.5-19-5.74-40.73,1.09-50.6,15.9a6,6,0,1,0,10,6.66c6.94-10.41,23.25-15.28,37.14-11.07,7.22,2.18,18.39,8.34,22.39,25.61a78.74,78.74,0,0,0-18.11-2.08c-13.53,0-26.16,3.46-35.55,9.77C96,128.85,90,139.66,90,152c0,22,18,33.52,35.71,33.52a46,46,0,0,0,32.91-14.19c6.58-6.85,14.35-19.11,15.29-39.26a44.59,44.59,0,0,1,4.07,2.75c10.48,7.92,16,19.4,16,33.18,0,20.16-21,50-66,50-27.07,0-46.92-9.19-59-27.33C59,175.75,54,154.66,54,128s5-47.75,15-62.67C81.08,47.19,100.93,38,128,38c33.85,0,55.57,13.67,66.4,41.8a6,6,0,1,0,11.2-4.31C193,42.65,166.85,26,128,26,96.67,26,73.46,37,59,58.67,47.72,75.6,42,98.93,42,128s5.72,52.4,17,69.33C73.46,219,96.67,230,128,230c29.43,0,47.81-11.19,58.05-20.58C198.54,198,206,182.49,206,168,206,150.31,198.81,135.52,185.22,125.25ZM150,163a33.94,33.94,0,0,1-24.26,10.51C109.33,173.52,102,162.71,102,152c0-13.59,12.64-28.21,40.41-28.21a65.33,65.33,0,0,1,19.58,3c0,.41,0,.82,0,1.24C162,142.72,157.84,154.82,150,163Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
