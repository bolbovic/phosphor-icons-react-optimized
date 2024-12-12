var s = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, e, l) => e in a ? s(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, c = (a, e) => {
  for (var l in e || (e = {}))
    o.call(e, l) && m(a, l, e[l]);
  if (t)
    for (var l of t(e))
      p.call(e, l) && m(a, l, e[l]);
  return a;
};
var f = (a, e) => {
  var l = {};
  for (var r in a)
    o.call(a, r) && e.indexOf(r) < 0 && (l[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      e.indexOf(r) < 0 && p.call(a, r) && (l[r] = a[r]);
  return l;
};
import i, { forwardRef as R } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = R((r, l) => {
  var L = r, { children: a } = L, e = f(L, ["children"]);
  return /* @__PURE__ */ i.createElement(Z, c({ ref: l }, e), a, /* @__PURE__ */ i.createElement("path", { d: "M220.28,55l-.17-.17-44.9-42.28a16,16,0,0,0-22.5.08L108.17,56.87l-1.54-1.56A25,25,0,0,0,71.27,90.58l1.46,1.48L52.69,112a16,16,0,0,0,0,22.63l12.68,12.68a16,16,0,0,0,22.59,0l19.93-19.65L120,140h0l0,0L55.31,205.37a25,25,0,1,0,35.34,35.29l88.67-89.35a16,16,0,0,0,0-22.6L143.63,92.66,156.56,80l.1.09L194,115.4a16,16,0,0,0,22.53-.09l3.71-3.71a40,40,0,0,0,0-56.57ZM76.69,136,64,123.33l20-19.88,12.69,12.86Zm2.62,93.37a9,9,0,1,1-12.65-12.71l64.67-65.37a16,16,0,0,0,0-22.57L82.63,79.31A9,9,0,0,1,95.29,66.6L168,140ZM209,100.28,205.25,104a1.21,1.21,0,0,0-.16-.16L167.69,68.5a16.05,16.05,0,0,0-22.39.12L132.37,81.29,119.43,68.23,164,24l.17.16,44.88,42.26a24,24,0,0,1-.08,33.86Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
