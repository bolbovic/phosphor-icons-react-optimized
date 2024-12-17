var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && H(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && H(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var m in a)
    l.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((m, e) => {
  var r = m, { children: a } = r, t = L(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M224,36H168a12,12,0,0,0-8.82,3.86L66.75,140H32a20,20,0,0,0-20,20v40a20,20,0,0,0,20,20H88a12,12,0,0,0,8.82-3.86L189.25,116H224a20,20,0,0,0,20-20V56A20,20,0,0,0,224,36Zm-4,56H184a12,12,0,0,0-8.82,3.86L82.75,196H36V164H72a12,12,0,0,0,8.82-3.86L173.25,60H220Zm12.49,75.51a12,12,0,0,1-17,17L212,181v27a12,12,0,0,1-24,0V181l-3.51,3.52a12,12,0,0,1-17-17l24-24a12,12,0,0,1,17,0Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
