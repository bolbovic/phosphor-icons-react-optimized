var M = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var Z = (e, t, a) => t in e ? M(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, h = (e, t) => {
  for (var a in t || (t = {}))
    c.call(t, a) && Z(e, a, t[a]);
  if (m)
    for (var a of m(t))
      n.call(t, a) && Z(e, a, t[a]);
  return e;
};
var i = (e, t) => {
  var a = {};
  for (var o in e)
    c.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && m)
    for (var o of m(e))
      t.indexOf(o) < 0 && n.call(e, o) && (a[o] = e[o]);
  return a;
};
import r, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const l = d((o, a) => {
  var p = o, { children: e } = p, t = i(p, ["children"]);
  return /* @__PURE__ */ r.createElement(f, h({ ref: a }, t), e, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M216,104a64,64,0,0,1-64,64h-8V40h8A64,64,0,0,1,216,104ZM72,168h72L72,40Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M152,32H72a8,8,0,0,0-8,8V168a80.09,80.09,0,0,0,80,80,8,8,0,0,0,8-8V176a72,72,0,0,0,0-144ZM80,70.54,130.32,160H80Zm56,161A64.14,64.14,0,0,1,80.51,176H136Zm0-94L85.68,48H136ZM152,160V48a56,56,0,0,1,0,112Z" }));
});
l.displayName = "Duotone";
export {
  l as Duotone
};
