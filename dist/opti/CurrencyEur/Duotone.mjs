var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var H = (e, t, a) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, i = (e, t) => {
  for (var a in t || (t = {}))
    c.call(t, a) && H(e, a, t[a]);
  if (r)
    for (var a of r(t))
      n.call(t, a) && H(e, a, t[a]);
  return e;
};
var A = (e, t) => {
  var a = {};
  for (var o in e)
    c.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && n.call(e, o) && (a[o] = e[o]);
  return a;
};
import m, { forwardRef as f } from "react";
import l from "../../lib/OptiBase.mjs";
const s = f((o, a) => {
  var p = o, { children: e } = p, t = A(p, ["children"]);
  return /* @__PURE__ */ m.createElement(l, i({ ref: a }, t), e, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M184,58.33V197.67A72,72,0,0,1,64,144V112A72,72,0,0,1,184,58.33Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M190,192.33a8,8,0,0,1-.63,11.3A80,80,0,0,1,56.4,152H40a8,8,0,0,1,0-16H56V120H40a8,8,0,0,1,0-16H56.4A80,80,0,0,1,189.34,52.37,8,8,0,0,1,178.66,64.3,64,64,0,0,0,72.52,104H136a8,8,0,0,1,0,16H72v16h48a8,8,0,0,1,0,16H72.52a64,64,0,0,0,106.14,39.71A8,8,0,0,1,190,192.33Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
