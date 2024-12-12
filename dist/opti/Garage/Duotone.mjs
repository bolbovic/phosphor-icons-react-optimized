var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? h(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, Z = (e, t) => {
  for (var a in t || (t = {}))
    l.call(t, a) && p(e, a, t[a]);
  if (m)
    for (var a of m(t))
      V.call(t, a) && p(e, a, t[a]);
  return e;
};
var c = (e, t) => {
  var a = {};
  for (var o in e)
    l.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && m)
    for (var o of m(e))
      t.indexOf(o) < 0 && V.call(e, o) && (a[o] = e[o]);
  return a;
};
import r, { forwardRef as n } from "react";
import i from "../../lib/OptiBase.mjs";
const v = n((o, a) => {
  var H = o, { children: e } = H, t = c(H, ["children"]);
  return /* @__PURE__ */ r.createElement(i, Z({ ref: a }, t), e, /* @__PURE__ */ r.createElement("path", { d: "M184,136v64H72V136Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M240,192h-8V98.67a16,16,0,0,0-7.12-13.31l-88-58.67a16,16,0,0,0-17.75,0l-88,58.67A16,16,0,0,0,24,98.67V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM40,98.67,128,40l88,58.66V192H192V136a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8v56H40ZM176,144v16H136V144Zm-56,16H80V144h40ZM80,176h40v16H80Zm56,0h40v16H136Z" }));
});
v.displayName = "Duotone";
export {
  v as Duotone
};
