var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var Z = (e, a, A) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: A }) : e[a] = A, l = (e, a) => {
  for (var A in a || (a = {}))
    o.call(a, A) && Z(e, A, a[A]);
  if (r)
    for (var A of r(a))
      p.call(a, A) && Z(e, A, a[A]);
  return e;
};
var M = (e, a) => {
  var A = {};
  for (var m in e)
    o.call(e, m) && a.indexOf(m) < 0 && (A[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      a.indexOf(m) < 0 && p.call(e, m) && (A[m] = e[m]);
  return A;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const H = i((m, A) => {
  var t = m, { children: e } = t, a = M(t, ["children"]);
  return /* @__PURE__ */ c.createElement(s, l({ ref: A }, a), e, /* @__PURE__ */ c.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm87.63,96H191.48A64.1,64.1,0,0,0,136,64.52V40.37A88.13,88.13,0,0,1,215.63,120ZM120,120H80.68A48.09,48.09,0,0,1,120,80.68Zm0,16v39.32A48.09,48.09,0,0,1,80.68,136Zm16,0h39.32A48.09,48.09,0,0,1,136,175.32Zm0-16V80.68A48.09,48.09,0,0,1,175.32,120ZM120,40.37V64.52A64.1,64.1,0,0,0,64.52,120H40.37A88.13,88.13,0,0,1,120,40.37ZM40.37,136H64.52A64.1,64.1,0,0,0,120,191.48v24.15A88.13,88.13,0,0,1,40.37,136ZM136,215.63V191.48A64.1,64.1,0,0,0,191.48,136h24.15A88.13,88.13,0,0,1,136,215.63Z" }));
});
H.displayName = "Regular";
export {
  H as Regular
};
