var n = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && H(a, e, t[e]);
  if (m)
    for (var e of m(t))
      Z.call(t, e) && H(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    V.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && Z.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as M } from "react";
import i from "../../lib/OptiBase.mjs";
const l = M((o, e) => {
  var p = o, { children: a } = p, t = c(p, ["children"]);
  return /* @__PURE__ */ r.createElement(i, h({ ref: e }, t), a, /* @__PURE__ */ r.createElement("path", { d: "M208,88H152V32Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M80,224a8,8,0,0,1-8,8H56a16,16,0,0,1-16-16V184a8,8,0,0,1,16,0v32H72A8,8,0,0,1,80,224ZM216,88v48a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H120a8,8,0,0,1,0-16h32a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31ZM80,24H56A16,16,0,0,0,40,40V64a8,8,0,0,0,16,0V40H80a8,8,0,0,0,0-16ZM208,168a8,8,0,0,0-8,8v40h-8a8,8,0,0,0,0,16h8a16,16,0,0,0,16-16V176A8,8,0,0,0,208,168ZM48,152a8,8,0,0,0,8-8V104a8,8,0,0,0-16,0v40A8,8,0,0,0,48,152Zm104,64H112a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Z" }));
});
l.displayName = "Duotone";
export {
  l as Duotone
};
