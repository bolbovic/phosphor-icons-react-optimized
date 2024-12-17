var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && c(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var m in a)
    l.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((m, e) => {
  var r = m, { children: a } = r, t = d(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, A({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,24a83.89,83.89,0,0,1,65.9,32H128a52.05,52.05,0,0,0-46.15,28.07L64.18,73.47A83.82,83.82,0,0,1,128,44Zm28,84a28,28,0,1,1-28-28A28,28,0,0,1,156,128ZM44,128a83.41,83.41,0,0,1,6-31.11L83,154c.06.11.14.2.2.3A52,52,0,0,0,128,180q1.19,0,2.34-.06l-17.68,30.63A84.12,84.12,0,0,1,44,128Zm96.05,83.12L173,154c.09-.15.16-.3.24-.46A51.81,51.81,0,0,0,171.78,100h35.4a83.95,83.95,0,0,1-67.13,111.12Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
