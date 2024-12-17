var n = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && r(a, e, t[e]);
  if (V)
    for (var e of V(t))
      p.call(t, e) && r(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    H.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && V)
    for (var o of V(a))
      t.indexOf(o) < 0 && p.call(a, o) && (e[o] = a[o]);
  return e;
};
import h, { forwardRef as i } from "react";
import A from "../../lib/OptiBase.mjs";
const M = i((o, e) => {
  var m = o, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ h.createElement(A, Z({ ref: e }, t), a, /* @__PURE__ */ h.createElement(
    "path",
    {
      d: "M72,160h72v56a8,8,0,0,1-8,8H72a8,8,0,0,1-8-8V168A8,8,0,0,1,72,160ZM216,96H144v64h72a8,8,0,0,0,8-8V104A8,8,0,0,0,216,96ZM136,32H72a8,8,0,0,0-8,8V88a8,8,0,0,0,8,8h72V40A8,8,0,0,0,136,32Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ h.createElement("path", { d: "M216,88H152V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V88a16,16,0,0,0,16,16h64v48H72a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16V168h64a16,16,0,0,0,16-16V104A16,16,0,0,0,216,88ZM136,216H72V168h64Zm0-176V88H72V40h64Zm80,112H152V104h64Z" }));
});
M.displayName = "Duotone";
export {
  M as Duotone
};
