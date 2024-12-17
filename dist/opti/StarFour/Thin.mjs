var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
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
import f, { forwardRef as L } from "react";
import d from "../../lib/OptiBase.mjs";
const h = L((l, e) => {
  var m = l, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M228.13,116.77,162.94,93.06,139.23,27.87a11.95,11.95,0,0,0-22.46,0L93.06,93.06,27.87,116.77a11.95,11.95,0,0,0,0,22.46l65.19,23.71,23.71,65.19a11.95,11.95,0,0,0,22.46,0l23.71-65.19,65.19-23.71a11.95,11.95,0,0,0,0-22.46Zm-2.73,15-67,24.34a4,4,0,0,0-2.39,2.39l-24.34,67a4,4,0,0,1-7.44,0l-24.34-67a4,4,0,0,0-2.39-2.39L30.6,131.72a4,4,0,0,1,0-7.44L97.55,99.94a4,4,0,0,0,2.39-2.39L124.28,30.6a4,4,0,0,1,7.44,0l24.34,66.95a4,4,0,0,0,2.39,2.39l67,24.34a4,4,0,0,1,0,7.44Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
