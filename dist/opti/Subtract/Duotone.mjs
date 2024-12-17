var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var c = (e, a, t) => a in e ? h(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, d = (e, a) => {
  for (var t in a || (a = {}))
    n.call(a, t) && c(e, t, a[t]);
  if (r)
    for (var t of r(a))
      i.call(a, t) && c(e, t, a[t]);
  return e;
};
var f = (e, a) => {
  var t = {};
  for (var o in e)
    n.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      a.indexOf(o) < 0 && i.call(e, o) && (t[o] = e[o]);
  return t;
};
import m, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const M = l((o, t) => {
  var p = o, { children: e } = p, a = f(p, ["children"]);
  return /* @__PURE__ */ m.createElement(s, d({ ref: t }, a), e, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M232,160a72,72,0,0,1-143.6,7.6h0a73.37,73.37,0,0,0,7.6.4,72,72,0,0,0,72-72,73.37,73.37,0,0,0-.4-7.6h0A72,72,0,0,1,232,160Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M174.63,81.35a80,80,0,1,0-93.28,93.28,80,80,0,1,0,93.28-93.28ZM32,96a64,64,0,1,1,64,64A64.07,64.07,0,0,1,32,96ZM160,224A63.81,63.81,0,0,1,98,176,80.07,80.07,0,0,0,176,98,64,64,0,0,1,160,224Z" }));
});
M.displayName = "Duotone";
export {
  M as Duotone
};
