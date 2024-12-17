var s = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    L.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    L.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const n = d((r, e) => {
  var m = r, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(h, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M220.44,212,60.44,36A6,6,0,0,0,51.56,44l72.32,79.55L60.4,171.2a6,6,0,0,0,7.2,9.6L122,140v84a6,6,0,0,0,9.6,4.8l52.28-39.21L211.56,220a6,6,0,0,0,8.88-8.08ZM134,212V140l15.09,11.31,26.68,29.36ZM122,71.63V32a6,6,0,0,1,9.6-4.8l64,48a6,6,0,0,1,0,9.6L162.07,110a6,6,0,0,1-7.2-9.6L182,80,134,44V71.63a6,6,0,0,1-12,0Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
