var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      A.call(t, e) && l(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && A.call(a, o) && (e[o] = a[o]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const M = i((o, e) => {
  var m = o, { children: a } = m, t = Z(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M220,96A92,92,0,1,0,68,165.69V240a12,12,0,0,0,17.37,10.73L128,229.42l42.64,21.31A12,12,0,0,0,188,240V165.69A91.86,91.86,0,0,0,220,96ZM60,96a68,68,0,1,1,68,68A68.07,68.07,0,0,1,60,96ZM164,220.59l-30.64-15.32a12,12,0,0,0-10.74,0L92,220.58V180.66a92,92,0,0,0,72,0ZM128,148A52,52,0,1,0,76,96,52.06,52.06,0,0,0,128,148Zm0-80a28,28,0,1,1-28,28A28,28,0,0,1,128,68Z" }));
});
M.displayName = "Bold";
export {
  M as Bold
};
