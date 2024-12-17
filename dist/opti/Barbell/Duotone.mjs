var Z = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, v = (a, t) => {
  for (var e in t || (t = {}))
    r.call(t, e) && h(a, e, t[e]);
  if (V)
    for (var e of V(t))
      p.call(t, e) && h(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var H in a)
    r.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && V)
    for (var H of V(a))
      t.indexOf(H) < 0 && p.call(a, H) && (e[H] = a[H]);
  return e;
};
import m, { forwardRef as n } from "react";
import i from "../../lib/OptiBase.mjs";
const s = n((H, e) => {
  var o = H, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ m.createElement(i, v({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M96,64V192a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H88A8,8,0,0,1,96,64Zm96-8H168a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8h24a8,8,0,0,0,8-8V64A8,8,0,0,0,192,56Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M248,120h-8V88a16,16,0,0,0-16-16H208V64a16,16,0,0,0-16-16H168a16,16,0,0,0-16,16v56H104V64A16,16,0,0,0,88,48H64A16,16,0,0,0,48,64v8H32A16,16,0,0,0,16,88v32H8a8,8,0,0,0,0,16h8v32a16,16,0,0,0,16,16H48v8a16,16,0,0,0,16,16H88a16,16,0,0,0,16-16V136h48v56a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16v-8h16a16,16,0,0,0,16-16V136h8a8,8,0,0,0,0-16ZM32,168V88H48v80Zm56,24H64V64H88V192Zm104,0H168V64h24V175.83c0,.06,0,.11,0,.17s0,.12,0,.17V192Zm32-24H208V88h16Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
