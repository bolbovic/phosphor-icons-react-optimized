var s = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var m = (a, H, e) => H in a ? s(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, o = (a, H) => {
  for (var e in H || (H = {}))
    h.call(H, e) && m(a, e, H[e]);
  if (V)
    for (var e of V(H))
      v.call(H, e) && m(a, e, H[e]);
  return a;
};
var l = (a, H) => {
  var e = {};
  for (var t in a)
    h.call(a, t) && H.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && V)
    for (var t of V(a))
      H.indexOf(t) < 0 && v.call(a, t) && (e[t] = a[t]);
  return e;
};
import p, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const Z = c((t, e) => {
  var r = t, { children: a } = r, H = l(r, ["children"]);
  return /* @__PURE__ */ p.createElement(f, o({ ref: e }, H), a, /* @__PURE__ */ p.createElement("path", { d: "M248,120h-8V88a16,16,0,0,0-16-16H208V64a16,16,0,0,0-16-16H168a16,16,0,0,0-16,16v56H104V64A16,16,0,0,0,88,48H64A16,16,0,0,0,48,64v8H32A16,16,0,0,0,16,88v32H8a8,8,0,0,0,0,16h8v32a16,16,0,0,0,16,16H48v8a16,16,0,0,0,16,16H88a16,16,0,0,0,16-16V136h48v56a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16v-8h16a16,16,0,0,0,16-16V136h8a8,8,0,0,0,0-16ZM32,168V88H48v80Zm56,24H64V64H88V192Zm104,0H168V64h24V175.82c0,.06,0,.12,0,.18s0,.12,0,.18V192Zm32-24H208V88h16Z" }));
});
Z.displayName = "Regular";
export {
  Z as Regular,
  Z as default
};
