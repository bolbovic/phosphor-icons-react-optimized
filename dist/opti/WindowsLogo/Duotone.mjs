var A = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, M = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    r.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      M.call(t, e) && m(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var V in a)
    r.call(a, V) && t.indexOf(V) < 0 && (e[V] = a[V]);
  if (a != null && o)
    for (var V of o(a))
      t.indexOf(V) < 0 && M.call(a, V) && (e[V] = a[V]);
  return e;
};
import Z, { forwardRef as c } from "react";
import h from "../../lib/OptiBase.mjs";
const n = c((V, e) => {
  var l = V, { children: a } = l, t = H(l, ["children"]);
  return /* @__PURE__ */ Z.createElement(h, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement(
    "path",
    {
      d: "M128,144h80v72l-80-14.55ZM32,184l64,11.64V144H32ZM128,54.55V112h80V40ZM32,112H96V60.36L32,72Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ Z.createElement("path", { d: "M208,136H128a8,8,0,0,0-8,8v57.45a8,8,0,0,0,6.57,7.88l80,14.54A7.61,7.61,0,0,0,208,224a8,8,0,0,0,8-8V144A8,8,0,0,0,208,136Zm-8,70.41-64-11.63V152h64ZM96,136H32a8,8,0,0,0-8,8v40a8,8,0,0,0,6.57,7.87l64,11.64a8.54,8.54,0,0,0,1.43.13,8,8,0,0,0,8-8V144A8,8,0,0,0,96,136Zm-8,50.05-48-8.73V152H88ZM213.13,33.86a8,8,0,0,0-6.56-1.73l-80,14.55A8,8,0,0,0,120,54.55V112a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V40A8,8,0,0,0,213.13,33.86ZM200,104H136V61.22l64-11.63ZM101.13,54.22a8,8,0,0,0-6.56-1.73l-64,11.64A8,8,0,0,0,24,72v40a8,8,0,0,0,8,8H96a8,8,0,0,0,8-8V60.36A8,8,0,0,0,101.13,54.22ZM88,104H40V78.68L88,70Z" }));
});
n.displayName = "Duotone";
export {
  n as Duotone
};
