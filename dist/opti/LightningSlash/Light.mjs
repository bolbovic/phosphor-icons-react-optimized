var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const n = d((l, e) => {
  var m = l, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(h, L({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M52.44,36A6,6,0,0,0,43.56,44L84.05,88.58,43.61,131.91a6,6,0,0,0,2.28,9.71l59.23,22.21-15,75a6,6,0,0,0,3.14,6.52A6.07,6.07,0,0,0,96,246a6,6,0,0,0,4.39-1.91l63.34-67.87L203.56,220a6,6,0,0,0,8.88-8.08ZM106,220.46l11.85-59.28a6,6,0,0,0-3.77-6.8l-55.6-20.85,33.64-36,63.48,69.83Zm4-150.91a6,6,0,0,1-.29-8.48l45.88-49.16a6,6,0,0,1,10.27,5.27l-15,75,59.23,22.21a6,6,0,0,1,2.28,9.71L190.08,148a6,6,0,1,1-8.77-8.19l16.18-17.33-55.6-20.85a6,6,0,0,1-3.77-6.8L150,35.54,118.5,69.25A6,6,0,0,1,110,69.55Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
