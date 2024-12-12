var V = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var H = (e, a, t) => a in e ? V(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, c = (e, a) => {
  for (var t in a || (a = {}))
    h.call(a, t) && H(e, t, a[t]);
  if (m)
    for (var t of m(a))
      Z.call(a, t) && H(e, t, a[t]);
  return e;
};
var n = (e, a) => {
  var t = {};
  for (var o in e)
    h.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && m)
    for (var o of m(e))
      a.indexOf(o) < 0 && Z.call(e, o) && (t[o] = e[o]);
  return t;
};
import r, { forwardRef as i } from "react";
import v from "../../lib/OptiBase.mjs";
const M = i((o, t) => {
  var p = o, { children: e } = p, a = n(p, ["children"]);
  return /* @__PURE__ */ r.createElement(v, c({ ref: t }, a), e, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M40,128h88v88H48a8,8,0,0,1-8-8ZM208,40H128v88h88V48A8,8,0,0,0,208,40Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,88H136V48h72ZM120,48v72H48V48ZM48,136h72v72H48Zm160,72H136V136h72v72Z" }));
});
M.displayName = "Duotone";
export {
  M as Duotone
};
