var i = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (c)
    for (var e of c(t))
      n.call(t, e) && l(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && c)
    for (var o of c(a))
      t.indexOf(o) < 0 && n.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as A } from "react";
import L from "../../lib/OptiBase.mjs";
const d = A((o, e) => {
  var r = o, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ m.createElement(L, V({ ref: e }, t), a, /* @__PURE__ */ m.createElement("path", { d: "M208,88H152V32Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M147.81,196.31a20.82,20.82,0,0,1-9.19,15.23C133.43,215,127,216,121.13,216A60.43,60.43,0,0,1,106,214a8,8,0,1,1,4.3-15.41c4.38,1.21,15,2.71,19.55-.35.88-.6,1.83-1.52,2.14-3.93.34-2.67-.72-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.12a20.58,20.58,0,0,1,9-14.94c11.85-8,30.72-3.31,32.84-2.76a8,8,0,0,1-4.07,15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54,4.54,0,0,0-2,3.67c-.12.9-.14,1.08,1.11,1.9,2.31,1.49,6.45,2.68,10.45,3.84C133.49,174.17,150,179,147.81,196.31ZM72,144a8,8,0,0,0-8,8v38a10,10,0,0,1-20,0,8,8,0,0,0-16,0,26,26,0,0,0,52,0V152A8,8,0,0,0,72,144Zm140.65,1.49a8,8,0,0,0-11.16,1.86L188,166.24l-13.49-18.89a8,8,0,0,0-13,9.3L178.17,180l-16.68,23.35a8,8,0,0,0,13,9.3L188,193.76l13.49,18.89a8,8,0,0,0,13-9.3L197.83,180l16.68-23.35A8,8,0,0,0,212.65,145.49ZM216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-27.31-8L160,51.31V80Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};