var f = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? f(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, l = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && o(a, e, r[e]);
  if (V)
    for (var e of V(r))
      h.call(r, e) && o(a, e, r[e]);
  return a;
};
var Z = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && V)
    for (var t of V(a))
      r.indexOf(t) < 0 && h.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const A = i((t, e) => {
  var m = t, { children: a } = m, r = Z(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, l({ ref: e }, r), a, /* @__PURE__ */ c.createElement("path", { d: "M184,48.81V32a16,16,0,0,0-16-16H88A16,16,0,0,0,72,32V48.81A40.05,40.05,0,0,0,40,88V200a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40V88A40.05,40.05,0,0,0,184,48.81ZM168,48H152V32h16Zm-48,0V32h16V48ZM104,32V48H88V32Zm96,168a24,24,0,0,1-24,24H80a24,24,0,0,1-24-24V88A24,24,0,0,1,80,64h96a24,24,0,0,1,24,24Z" }));
});
A.displayName = "Regular";
export {
  A as Regular
};
