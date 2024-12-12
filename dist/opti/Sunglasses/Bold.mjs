var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, v = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && l(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && d.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((m, e) => {
  var r = m, { children: a } = r, t = A(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(i, v({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M200,36a12,12,0,0,0,0,24,12,12,0,0,1,12,12v52H44V72A12,12,0,0,1,56,60a12,12,0,0,0,0-24A36,36,0,0,0,20,72v92a48,48,0,0,0,96,0V148h24v16a48,48,0,0,0,96,0V72A36,36,0,0,0,200,36ZM68,188a24,24,0,0,1-24-24v-9l31.74,31.74A23.89,23.89,0,0,1,68,188Zm24-24a24.8,24.8,0,0,1-.44,4.59L71,148H92Zm96,24a24,24,0,0,1-24-24v-9l31.74,31.74A23.89,23.89,0,0,1,188,188Zm24-24a24.8,24.8,0,0,1-.44,4.59L191,148h21Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
