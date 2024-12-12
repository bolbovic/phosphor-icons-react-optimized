var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (o)
    for (var e of o(t))
      Z.call(t, e) && l(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && Z.call(a, m) && (e[m] = a[m]);
  return e;
};
import L, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((m, e) => {
  var r = m, { children: a } = r, t = A(r, ["children"]);
  return /* @__PURE__ */ L.createElement(i, d({ ref: e }, t), a, /* @__PURE__ */ L.createElement("path", { d: "M42.06,109.94a48,48,0,1,1,67.88-67.88A12,12,0,0,1,93,59,24,24,0,1,0,59,93a12,12,0,1,1-17,17ZM163,59A24,24,0,1,1,197,93a12,12,0,1,0,17,17,48,48,0,1,0-67.88-67.88,12,12,0,0,0,17,17Zm33.94,87a12,12,0,0,0,0,17A24,24,0,1,1,163,197a12,12,0,0,0-17,17,48,48,0,1,0,67.88-67.88A12,12,0,0,0,197,146.06ZM93,197A24,24,0,1,1,59,163a12,12,0,0,0-17-17,48,48,0,1,0,67.88,67.88,12,12,0,1,0-17-17Zm71-88V147l24.49,24.48a12,12,0,0,1-17,17L147,164H109L84.49,188.49a12,12,0,0,1-17-17L92,147V109L67.51,84.49a12,12,0,0,1,17-17L109,92H147l24.48-24.49a12,12,0,0,1,17,17Zm-48,31h24V116H116Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
