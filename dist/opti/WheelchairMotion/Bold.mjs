var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && l(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && d.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = s((m, e) => {
  var r = m, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, A({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M176,84a36,36,0,1,0-36-36A36,36,0,0,0,176,84Zm0-48a12,12,0,1,1-12,12A12,12,0,0,1,176,36Zm29.28,96.39a12,12,0,0,1,2.49,10l-16,80A12,12,0,0,1,180,232a11.87,11.87,0,0,1-2.36-.23,12,12,0,0,1-9.42-14.12L181.36,152H124a12,12,0,0,1-10.4-18l17.92-31.2a76.1,76.1,0,0,0-79.88,10.55A12,12,0,0,1,36.36,94.86a100,100,0,0,1,118.19-6.68,12,12,0,0,1,3.85,16L144.74,128H196A12,12,0,0,1,205.28,132.39Zm-41.47,44.52a64,64,0,1,1-73.64-68.16,12,12,0,0,1,3.66,23.72,40,40,0,1,0,46.05,42.62,12,12,0,1,1,23.93,1.82Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
