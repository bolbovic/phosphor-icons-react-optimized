var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, n = (e, t) => {
  for (var a in t || (t = {}))
    V.call(t, a) && p(e, a, t[a]);
  if (r)
    for (var a of r(t))
      c.call(t, a) && p(e, a, t[a]);
  return e;
};
var A = (e, t) => {
  var a = {};
  for (var o in e)
    V.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && c.call(e, o) && (a[o] = e[o]);
  return a;
};
import H, { forwardRef as l } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = l((o, a) => {
  var m = o, { children: e } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ H.createElement(Z, n({ ref: a }, t), e, /* @__PURE__ */ H.createElement(
    "path",
    {
      d: "M128,80H32V56a8,8,0,0,1,8-8H92.69a8,8,0,0,1,5.65,2.34Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ H.createElement("path", { d: "M216,72H131.31L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.4,15.4,0,0,0,39.38,216H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72ZM92.69,56l16,16H40V56ZM216,200H40V88H216Zm-88-88a8,8,0,0,1,8,8v16h16a8,8,0,0,1,0,16H136v16a8,8,0,0,1-16,0V152H104a8,8,0,0,1,0-16h16V120A8,8,0,0,1,128,112Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
