var c = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var r = (a, m, e) => m in a ? c(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, h = (a, m) => {
  for (var e in m || (m = {}))
    p.call(m, e) && r(a, e, m[e]);
  if (l)
    for (var e of l(m))
      d.call(m, e) && r(a, e, m[e]);
  return a;
};
var A = (a, m) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      m.indexOf(t) < 0 && d.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((t, e) => {
  var o = t, { children: a } = o, m = A(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(i, h({ ref: e }, m), a, /* @__PURE__ */ Z.createElement("path", { d: "M241.47,30.53a36,36,0,0,0-50.92,0h0a36.06,36.06,0,0,0-1.2,49.66l-23.83,44.26a36.08,36.08,0,0,0-21,3.07l-16-16a36,36,0,0,0-57.94-41h0a36,36,0,0,0-1.2,49.66L45.5,164.45a36,36,0,0,0-31,10.1h0a36,36,0,1,0,52.12,1.26l23.83-44.26A35.21,35.21,0,0,0,96,132a36.07,36.07,0,0,0,15.51-3.5l16,16a36,36,0,1,0,59.14-8.68L210.5,91.55A36.32,36.32,0,0,0,216,92a36,36,0,0,0,25.46-61.45Zm-154,57a12,12,0,0,1,17,17h0a12,12,0,0,1-17-17Zm-39,121a12,12,0,1,1,0-17A12,12,0,0,1,48.47,208.5Zm120-40a12,12,0,1,1,0-17A12,12,0,0,1,168.49,168.49Zm56-104a12,12,0,1,1,0-17A12,12,0,0,1,224.5,64.48Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
