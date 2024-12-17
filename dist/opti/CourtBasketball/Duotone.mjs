var V = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && H(a, e, t[e]);
  if (m)
    for (var e of m(t))
      Z.call(t, e) && H(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && Z.call(a, o) && (e[o] = a[o]);
  return e;
};
import h, { forwardRef as i } from "react";
import d from "../../lib/OptiBase.mjs";
const f = i((o, e) => {
  var r = o, { children: a } = r, t = n(r, ["children"]);
  return /* @__PURE__ */ h.createElement(d, c({ ref: e }, t), a, /* @__PURE__ */ h.createElement(
    "path",
    {
      d: "M232,88v80H216a40,40,0,0,1,0-80ZM40,88H24v80H40a40,40,0,0,0,0-80Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ h.createElement("path", { d: "M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,112h-8a32,32,0,0,1,0-64h8ZM32,96h8a32,32,0,0,1,0,64H32Zm0,80h8a48,48,0,0,0,0-96H32V64h88V192H32Zm192,16H136V64h88V80h-8a48,48,0,0,0,0,96h8v16Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
