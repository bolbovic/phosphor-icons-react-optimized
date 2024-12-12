var i = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, h = (a, r) => {
  for (var e in r || (r = {}))
    o.call(r, e) && m(a, e, r[e]);
  if (c)
    for (var e of c(r))
      p.call(r, e) && m(a, e, r[e]);
  return a;
};
var C = (a, r) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && c)
    for (var t of c(a))
      r.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const L = s((t, e) => {
  var l = t, { children: a } = l, r = C(l, ["children"]);
  return /* @__PURE__ */ f.createElement(H, h({ ref: e }, r), a, /* @__PURE__ */ f.createElement("path", { d: "M200,144h-76.7l2.35-2.35h0l20.06-20.06a59.55,59.55,0,0,0,26.1,6.36,49.56,49.56,0,0,0,25.89-7.22c23.72-14.36,36.43-47.6,34-88.92a8,8,0,0,0-7.52-7.52c-41.32-2.42-74.56,10.28-88.92,34-9.36,15.45-9.6,34.11-.87,52L120,124.68l-12.21-12.21c6-13.25,5.57-27-1.39-38.48C95.53,56,70.61,46.41,39.73,48.22a8,8,0,0,0-7.51,7.51C30.4,86.6,40,111.52,58,122.4A38.22,38.22,0,0,0,78,128a45,45,0,0,0,18.52-4.19L108.68,136l-8,8H56a8,8,0,0,0,0,16h9.59l13.21,59.47A15.91,15.91,0,0,0,94.42,232h67.17a15.91,15.91,0,0,0,15.62-12.53L190.42,160H200a8,8,0,0,0,0-16ZM149,66.58c10.46-17.26,35.24-27,67-26.57.41,31.81-9.31,56.58-26.57,67-11.51,7-25.4,6.54-39.28-1.18C142.42,92,142,78.09,149,66.58ZM92.11,108.11c-9.2,4.93-18.31,5.16-25.83.6C54.78,101.74,48.15,85.31,48,64c21.31.15,37.75,6.78,44.71,18.28C97.27,89.8,97,98.91,92.11,108.11ZM161.59,216H94.42L82,160H174Z" }));
});
L.displayName = "Regular";
export {
  L as Regular
};
