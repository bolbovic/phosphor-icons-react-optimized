var s = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var L = (a, e, l) => e in a ? s(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, c = (a, e) => {
  for (var l in e || (e = {}))
    o.call(e, l) && L(a, l, e[l]);
  if (t)
    for (var l of t(e))
      p.call(e, l) && L(a, l, e[l]);
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
  var m = r, { children: a } = m, e = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(Z, c({ ref: l }, e), a, /* @__PURE__ */ i.createElement("path", { d: "M149.66,138.34a8,8,0,0,0-11.32,0L120,156.69,99.31,136l18.35-18.34a8,8,0,0,0-11.32-11.32L88,124.69,69.66,106.34a8,8,0,0,0-11.32,11.32L64.69,124,41.37,147.31a32,32,0,0,0,0,45.26l5.38,5.37-28.41,28.4a8,8,0,0,0,11.32,11.32l28.4-28.41,5.37,5.38a32,32,0,0,0,45.26,0L132,191.31l6.34,6.35a8,8,0,0,0,11.32-11.32L131.31,168l18.35-18.34A8,8,0,0,0,149.66,138.34Zm-52.29,65a16,16,0,0,1-22.62,0L52.69,181.25a16,16,0,0,1,0-22.62L76,135.31,120.69,180Zm140.29-185a8,8,0,0,0-11.32,0l-28.4,28.41-5.37-5.38a32.05,32.05,0,0,0-45.26,0L124,64.69l-6.34-6.35a8,8,0,0,0-11.32,11.32l80,80a8,8,0,0,0,11.32-11.32L191.31,132l23.32-23.31a32,32,0,0,0,0-45.26l-5.38-5.37,28.41-28.4A8,8,0,0,0,237.66,18.34Zm-34.35,79L180,120.69,135.31,76l23.32-23.31a16,16,0,0,1,22.62,0l22.06,22A16,16,0,0,1,203.31,97.37Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
