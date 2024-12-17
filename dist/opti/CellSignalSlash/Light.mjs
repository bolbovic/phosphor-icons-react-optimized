var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const v = l((m, e) => {
  var V = m, { children: a } = V, t = Z(V, ["children"]);
  return /* @__PURE__ */ c.createElement(s, L({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M86,152v48a6,6,0,0,1-12,0V152a6,6,0,0,1,12,0ZM40,186a6,6,0,0,0-6,6v8a6,6,0,0,0,12,0v-8A6,6,0,0,0,40,186Zm172.44,26L52.44,36A6,6,0,0,0,43.56,44L114,121.52V200a6,6,0,0,0,12,0V134.72l28,30.8V200a6,6,0,0,0,12,0V178.72L203.56,220a6,6,0,0,0,8.88-8.08ZM160,121.63a6,6,0,0,0,6-6V72a6,6,0,0,0-12,0v43.63A6,6,0,0,0,160,121.63Zm40,44a6,6,0,0,0,6-6V32a6,6,0,0,0-12,0V159.63A6,6,0,0,0,200,165.63Z" }));
});
v.displayName = "Light";
export {
  v as Light
};
