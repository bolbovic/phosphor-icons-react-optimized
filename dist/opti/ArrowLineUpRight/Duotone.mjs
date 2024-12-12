var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var c = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, l = (e, t) => {
  for (var a in t || (t = {}))
    n.call(t, a) && c(e, a, t[a]);
  if (r)
    for (var a of r(t))
      i.call(t, a) && c(e, a, t[a]);
  return e;
};
var d = (e, t) => {
  var a = {};
  for (var o in e)
    n.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && i.call(e, o) && (a[o] = e[o]);
  return a;
};
import m, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const L = h((o, a) => {
  var p = o, { children: e } = p, t = d(p, ["children"]);
  return /* @__PURE__ */ m.createElement(s, l({ ref: a }, t), e, /* @__PURE__ */ m.createElement("path", { d: "M192,56v96L96,56Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,216ZM74.34,173.66a8,8,0,0,1,0-11.32L132.69,104,90.34,61.66A8,8,0,0,1,96,48h96a8,8,0,0,1,8,8v96a8,8,0,0,1-13.66,5.66L144,115.31,85.66,173.66a8,8,0,0,1-11.32,0ZM115.31,64l34.35,34.34h0L184,132.69V64Z" }));
});
L.displayName = "Duotone";
export {
  L as Duotone
};
