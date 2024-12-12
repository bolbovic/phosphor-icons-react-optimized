var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    d.call(t, e) && p(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && p(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    d.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && l.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as s } from "react";
import h from "../../lib/OptiBase.mjs";
const n = s((o, e) => {
  var m = o, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(h, H({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M196,208a12,12,0,0,1-12,12H56a12,12,0,0,1,0-24h4a24,24,0,0,0,24-24V140H56a12,12,0,0,1,0-24H84V84a56,56,0,0,1,91.63-43.21A12,12,0,0,1,160.35,59.3,31.66,31.66,0,0,0,140,52a32,32,0,0,0-32,32v32h28a12,12,0,0,1,0,24H108v32a47.74,47.74,0,0,1-6.44,24H184A12,12,0,0,1,196,208Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
