var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var c = (e, a, t) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, Z = (e, a) => {
  for (var t in a || (a = {}))
    n.call(a, t) && c(e, t, a[t]);
  if (m)
    for (var t of m(a))
      i.call(a, t) && c(e, t, a[t]);
  return e;
};
var d = (e, a) => {
  var t = {};
  for (var o in e)
    n.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && m)
    for (var o of m(e))
      a.indexOf(o) < 0 && i.call(e, o) && (t[o] = e[o]);
  return t;
};
import r, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const A = l((o, t) => {
  var p = o, { children: e } = p, a = d(p, ["children"]);
  return /* @__PURE__ */ r.createElement(s, Z({ ref: t }, a), e, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M232,160a72,72,0,0,1-143.6,7.6,72,72,0,1,1,79.2-79.2A72,72,0,0,1,232,160Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M174.63,81.37a80,80,0,1,0-93.26,93.26,80,80,0,1,0,93.26-93.26ZM32,96a64,64,0,0,1,126-16A80.08,80.08,0,0,0,80.05,158,64.11,64.11,0,0,1,32,96Zm128,0a64.07,64.07,0,0,1-64,64A64.07,64.07,0,0,1,160,96Zm0,128A64.11,64.11,0,0,1,98,176,80.08,80.08,0,0,0,176,98,64,64,0,0,1,160,224Z" }));
});
A.displayName = "Duotone";
export {
  A as Duotone
};
