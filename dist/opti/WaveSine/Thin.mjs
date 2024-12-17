var C = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, t, a) => t in e ? C(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, n = (e, t) => {
  for (var a in t || (t = {}))
    i.call(t, a) && o(e, a, t[a]);
  if (c)
    for (var a of c(t))
      p.call(t, a) && o(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var r in e)
    i.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && c)
    for (var r of c(e))
      t.indexOf(r) < 0 && p.call(e, r) && (a[r] = e[r]);
  return a;
};
import s, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((r, a) => {
  var m = r, { children: e } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(h, n({ ref: a }, t), e, /* @__PURE__ */ s.createElement("path", { d: "M235.62,129.7C214.4,174.93,196.1,196,178,196c-22.56,0-37.67-32.21-53.66-66.3C110.15,99.37,95.44,68,78,68c-14.2,0-31.13,20.76-50.34,61.7a4,4,0,0,1-7.24-3.4C41.6,81.07,59.9,60,78,60c22.56,0,37.67,32.21,53.66,66.3C145.85,156.63,160.56,188,178,188c14.2,0,31.13-20.76,50.34-61.7a4,4,0,0,1,7.24,3.4Z" }));
});
l.displayName = "Thin";
export {
  l as Thin
};
