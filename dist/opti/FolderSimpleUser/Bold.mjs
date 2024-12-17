var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    d.call(t, e) && p(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && p(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var o in a)
    d.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && l.call(a, o) && (e[o] = a[o]);
  return e;
};
import c, { forwardRef as i } from "react";
import H from "../../lib/OptiBase.mjs";
const h = i((o, e) => {
  var m = o, { children: a } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ c.createElement(H, s({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M220.51,197.94a36,36,0,1,0-57,0,43.75,43.75,0,0,0-15.08,23,12,12,0,0,0,8.52,14.67A11.77,11.77,0,0,0,160,236a12,12,0,0,0,11.59-8.92C174,218.2,182.35,212,192,212s18,6.2,20.4,15.08a12,12,0,0,0,23.19-6.17A43.7,43.7,0,0,0,220.51,197.94ZM192,164a12,12,0,1,1-12,12A12,12,0,0,1,192,164Zm44-76v20a12,12,0,0,1-24,0V92H130.67a20.1,20.1,0,0,1-12-4L92,68H44V196h68a12,12,0,0,1,0,24H40a20,20,0,0,1-20-20V64A20,20,0,0,1,40,44H93.33a20.12,20.12,0,0,1,12,4L132,68h84A20,20,0,0,1,236,88Z" }));
});
h.displayName = "Bold";
export {
  h as Bold
};
