var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && A(a, e, t[e]);
  if (r)
    for (var e of r(t))
      h.call(t, e) && A(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    l.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && h.call(a, o) && (e[o] = a[o]);
  return e;
};
import d, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((o, e) => {
  var m = o, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ d.createElement(i, p({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M212,124c-1.22,0-2.43.06-3.62.16L175.24,35.79A12,12,0,0,0,164,28H132a12,12,0,0,0,0,24h23.68l30.23,80.6A44.28,44.28,0,0,0,171,152h-29.2L119.24,91.79A12,12,0,0,0,108,84H28a12,12,0,0,0,0,24h4v2.92A60.14,60.14,0,0,0,0,164a12,12,0,0,0,12,12h4.74a44,44,0,0,0,86.52,0h65.48A44,44,0,1,0,212,124ZM48,130.05a12,12,0,0,0,8-11.32V108H99.68l16.5,44H26.06A36,36,0,0,1,48,130.05ZM60,188a20,20,0,0,1-18.32-12H78.32A20,20,0,0,1,60,188Zm152,0a20,20,0,1,1,20-20A20,20,0,0,1,212,188Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
