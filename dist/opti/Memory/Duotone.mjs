var c = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    v.call(t, e) && o(a, e, t[e]);
  if (H)
    for (var e of H(t))
      r.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var V in a)
    v.call(a, V) && t.indexOf(V) < 0 && (e[V] = a[V]);
  if (a != null && H)
    for (var V of H(a))
      t.indexOf(V) < 0 && r.call(a, V) && (e[V] = a[V]);
  return e;
};
import h, { forwardRef as n } from "react";
import i from "../../lib/OptiBase.mjs";
const M = n((V, e) => {
  var m = V, { children: a } = m, t = p(m, ["children"]);
  return /* @__PURE__ */ h.createElement(i, Z({ ref: e }, t), a, /* @__PURE__ */ h.createElement(
    "path",
    {
      d: "M232,64H24a8,8,0,0,0-8,8V176H240V72A8,8,0,0,0,232,64ZM112,144H48V96h64Zm96,0H144V96h64Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ h.createElement("path", { d: "M232,56H24A16,16,0,0,0,8,72V200a8,8,0,0,0,16,0V184H40v16a8,8,0,0,0,16,0V184H72v16a8,8,0,0,0,16,0V184h16v16a8,8,0,0,0,16,0V184h16v16a8,8,0,0,0,16,0V184h16v16a8,8,0,0,0,16,0V184h16v16a8,8,0,0,0,16,0V184h16v16a8,8,0,0,0,16,0V72A16,16,0,0,0,232,56ZM24,72H232v96H24Zm88,80a8,8,0,0,0,8-8V96a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8ZM56,104h48v32H56Zm88,48h64a8,8,0,0,0,8-8V96a8,8,0,0,0-8-8H144a8,8,0,0,0-8,8v48A8,8,0,0,0,144,152Zm8-48h48v32H152Z" }));
});
M.displayName = "Duotone";
export {
  M as Duotone
};
