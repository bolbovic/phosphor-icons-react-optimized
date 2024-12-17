var Z = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? Z(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, n = (e, t) => {
  for (var a in t || (t = {}))
    H.call(t, a) && p(e, a, t[a]);
  if (V)
    for (var a of V(t))
      c.call(t, a) && p(e, a, t[a]);
  return e;
};
var A = (e, t) => {
  var a = {};
  for (var o in e)
    H.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && V)
    for (var o of V(e))
      t.indexOf(o) < 0 && c.call(e, o) && (a[o] = e[o]);
  return a;
};
import m, { forwardRef as h } from "react";
import i from "../../lib/OptiBase.mjs";
const d = h((o, a) => {
  var r = o, { children: e } = r, t = A(r, ["children"]);
  return /* @__PURE__ */ m.createElement(i, n({ ref: a }, t), e, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M104,56V96H48V56a8,8,0,0,1,8-8H96A8,8,0,0,1,104,56Zm96-8H160a8,8,0,0,0-8,8V96h56V56A8,8,0,0,0,200,48Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M200,40H160a16,16,0,0,0-16,16v88a16,16,0,0,1-32,0V56A16,16,0,0,0,96,40H56A16,16,0,0,0,40,56v88a88,88,0,0,0,88,88h.67c48.15-.36,87.33-40.29,87.33-89V56A16,16,0,0,0,200,40Zm0,16V88H160V56ZM96,56V88H56V56Zm32.55,160A72,72,0,0,1,56,144V104H96v40a32,32,0,0,0,64,0V104h40v39C200,183,168,215.71,128.55,216Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
