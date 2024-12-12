var M = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var Z = (e, A, a) => A in e ? M(e, A, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[A] = a, p = (e, A) => {
  for (var a in A || (A = {}))
    o.call(A, a) && Z(e, a, A[a]);
  if (m)
    for (var a of m(A))
      l.call(A, a) && Z(e, a, A[a]);
  return e;
};
var f = (e, A) => {
  var a = {};
  for (var t in e)
    o.call(e, t) && A.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && m)
    for (var t of m(e))
      A.indexOf(t) < 0 && l.call(e, t) && (a[t] = e[t]);
  return a;
};
import s, { forwardRef as c } from "react";
import d from "../../lib/OptiBase.mjs";
const i = c((t, a) => {
  var r = t, { children: e } = r, A = f(r, ["children"]);
  return /* @__PURE__ */ s.createElement(d, p({ ref: a }, A), e, /* @__PURE__ */ s.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm87.63,96H191.48A64.1,64.1,0,0,0,136,64.52V40.37A88.13,88.13,0,0,1,215.63,120ZM120,120H80.68A48.09,48.09,0,0,1,120,80.68Zm0,16v39.32A48.09,48.09,0,0,1,80.68,136Zm16,0h39.32A48.09,48.09,0,0,1,136,175.32Zm0-16V80.68A48.09,48.09,0,0,1,175.32,120ZM120,40.37V64.52A64.1,64.1,0,0,0,64.52,120H40.37A88.13,88.13,0,0,1,120,40.37ZM40.37,136H64.52A64.1,64.1,0,0,0,120,191.48v24.15A88.13,88.13,0,0,1,40.37,136ZM136,215.63V191.48A64.1,64.1,0,0,0,191.48,136h24.15A88.13,88.13,0,0,1,136,215.63Z" }));
});
i.displayName = "Regular";
export {
  i as Regular,
  i as default
};
