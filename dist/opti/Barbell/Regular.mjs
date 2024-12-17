var l = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var m = (a, H, e) => H in a ? l(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, o = (a, H) => {
  for (var e in H || (H = {}))
    h.call(H, e) && m(a, e, H[e]);
  if (r)
    for (var e of r(H))
      v.call(H, e) && m(a, e, H[e]);
  return a;
};
var p = (a, H) => {
  var e = {};
  for (var V in a)
    h.call(a, V) && H.indexOf(V) < 0 && (e[V] = a[V]);
  if (a != null && r)
    for (var V of r(a))
      H.indexOf(V) < 0 && v.call(a, V) && (e[V] = a[V]);
  return e;
};
import c, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const f = s((V, e) => {
  var t = V, { children: a } = t, H = p(t, ["children"]);
  return /* @__PURE__ */ c.createElement(Z, o({ ref: e }, H), a, /* @__PURE__ */ c.createElement("path", { d: "M248,120h-8V88a16,16,0,0,0-16-16H208V64a16,16,0,0,0-16-16H168a16,16,0,0,0-16,16v56H104V64A16,16,0,0,0,88,48H64A16,16,0,0,0,48,64v8H32A16,16,0,0,0,16,88v32H8a8,8,0,0,0,0,16h8v32a16,16,0,0,0,16,16H48v8a16,16,0,0,0,16,16H88a16,16,0,0,0,16-16V136h48v56a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16v-8h16a16,16,0,0,0,16-16V136h8a8,8,0,0,0,0-16ZM32,168V88H48v80Zm56,24H64V64H88V192Zm104,0H168V64h24V175.82c0,.06,0,.12,0,.18s0,.12,0,.18V192Zm32-24H208V88h16Z" }));
});
f.displayName = "Regular";
export {
  f as Regular
};
