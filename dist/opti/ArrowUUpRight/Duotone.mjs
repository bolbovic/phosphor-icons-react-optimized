var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var l = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, i = (e, t) => {
  for (var a in t || (t = {}))
    c.call(t, a) && l(e, a, t[a]);
  if (r)
    for (var a of r(t))
      n.call(t, a) && l(e, a, t[a]);
  return e;
};
var d = (e, t) => {
  var a = {};
  for (var o in e)
    c.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && n.call(e, o) && (a[o] = e[o]);
  return a;
};
import m, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const E = h((o, a) => {
  var p = o, { children: e } = p, t = d(p, ["children"]);
  return /* @__PURE__ */ m.createElement(s, i({ ref: a }, t), e, /* @__PURE__ */ m.createElement("path", { d: "M224,88l-48,48V40Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M172.94,143.39a8,8,0,0,0,8.72-1.73l48-48a8,8,0,0,0,0-11.32l-48-48A8,8,0,0,0,168,40V80H88a64,64,0,0,0,0,128h88a8,8,0,0,0,0-16H88a48,48,0,0,1,0-96h80v40A8,8,0,0,0,172.94,143.39ZM184,59.31,212.69,88,184,116.69Z" }));
});
E.displayName = "Duotone";
export {
  E as Duotone
};
