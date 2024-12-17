var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var c = (e, a, t) => a in e ? H(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, i = (e, a) => {
  for (var t in a || (a = {}))
    n.call(a, t) && c(e, t, a[t]);
  if (r)
    for (var t of r(a))
      V.call(a, t) && c(e, t, a[t]);
  return e;
};
var l = (e, a) => {
  var t = {};
  for (var o in e)
    n.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      a.indexOf(o) < 0 && V.call(e, o) && (t[o] = e[o]);
  return t;
};
import m, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const h = d((o, t) => {
  var p = o, { children: e } = p, a = l(p, ["children"]);
  return /* @__PURE__ */ m.createElement(f, i({ ref: t }, a), e, /* @__PURE__ */ m.createElement("path", { d: "M208,88H152V32Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z" }));
});
h.displayName = "Duotone";
export {
  h as Duotone
};
