var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && H(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var o in a)
    l.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && p.call(a, o) && (e[o] = a[o]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const V = i((o, e) => {
  var m = o, { children: a } = m, t = L(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M167.51,88.49a12,12,0,0,1,17-17L188,75V48a12,12,0,0,1,24,0V75l3.51-3.52a12,12,0,0,1,17,17l-24,24a12,12,0,0,1-17,0ZM244,160v40a20,20,0,0,1-20,20H168a12,12,0,0,1-8.82-3.86L66.75,116H32A20,20,0,0,1,12,96V56A20,20,0,0,1,32,36H88a12,12,0,0,1,8.82,3.86L189.25,140H224A20,20,0,0,1,244,160Zm-24,4H184a12,12,0,0,1-8.82-3.86L82.75,60H36V92H72a12,12,0,0,1,8.82,3.86L173.25,196H220Z" }));
});
V.displayName = "Bold";
export {
  V as Bold
};
