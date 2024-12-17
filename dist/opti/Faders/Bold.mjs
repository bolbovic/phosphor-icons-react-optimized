var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var V = (a, m, e) => m in a ? c(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, Z = (a, m) => {
  for (var e in m || (m = {}))
    H.call(m, e) && V(a, e, m[e]);
  if (o)
    for (var e of o(m))
      p.call(m, e) && V(a, e, m[e]);
  return a;
};
var d = (a, m) => {
  var e = {};
  for (var t in a)
    H.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      m.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import l, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((t, e) => {
  var r = t, { children: a } = r, m = d(r, ["children"]);
  return /* @__PURE__ */ l.createElement(i, Z({ ref: e }, m), a, /* @__PURE__ */ l.createElement("path", { d: "M140,124v92a12,12,0,0,1-24,0V124a12,12,0,0,1,24,0Zm60,68a12,12,0,0,0-12,12v12a12,12,0,0,0,24,0V204A12,12,0,0,0,200,192Zm24-40H212V40a12,12,0,0,0-24,0V152H176a12,12,0,0,0,0,24h48a12,12,0,0,0,0-24ZM56,160a12,12,0,0,0-12,12v44a12,12,0,0,0,24,0V172A12,12,0,0,0,56,160Zm24-40H68V40a12,12,0,0,0-24,0v80H32a12,12,0,0,0,0,24H80a12,12,0,0,0,0-24Zm72-48H140V40a12,12,0,0,0-24,0V72H104a12,12,0,0,0,0,24h48a12,12,0,0,0,0-24Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
