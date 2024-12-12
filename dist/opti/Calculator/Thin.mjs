var n = Object.defineProperty;
var Z = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var A = (a, e, m) => e in a ? n(a, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : a[e] = m, p = (a, e) => {
  for (var m in e || (e = {}))
    o.call(e, m) && A(a, m, e[m]);
  if (Z)
    for (var m of Z(e))
      i.call(e, m) && A(a, m, e[m]);
  return a;
};
var H = (a, e) => {
  var m = {};
  for (var t in a)
    o.call(a, t) && e.indexOf(t) < 0 && (m[t] = a[t]);
  if (a != null && Z)
    for (var t of Z(a))
      e.indexOf(t) < 0 && i.call(a, t) && (m[t] = a[t]);
  return m;
};
import h, { forwardRef as V } from "react";
import c from "../../lib/OptiBase.mjs";
const f = V((t, m) => {
  var r = t, { children: a } = r, e = H(r, ["children"]);
  return /* @__PURE__ */ h.createElement(c, p({ ref: m }, e), a, /* @__PURE__ */ h.createElement("path", { d: "M176,60H80a4,4,0,0,0-4,4v48a4,4,0,0,0,4,4h96a4,4,0,0,0,4-4V64A4,4,0,0,0,176,60Zm-4,48H84V68h88Zm28-80H56A12,12,0,0,0,44,40V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V40A12,12,0,0,0,200,28Zm4,188a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4H200a4,4,0,0,1,4,4ZM96,148a8,8,0,1,1-8-8A8,8,0,0,1,96,148Zm40,0a8,8,0,1,1-8-8A8,8,0,0,1,136,148Zm40,0a8,8,0,1,1-8-8A8,8,0,0,1,176,148ZM96,188a8,8,0,1,1-8-8A8,8,0,0,1,96,188Zm40,0a8,8,0,1,1-8-8A8,8,0,0,1,136,188Zm40,0a8,8,0,1,1-8-8A8,8,0,0,1,176,188Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
