var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var c = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, i = (e, t) => {
  for (var a in t || (t = {}))
    h.call(t, a) && c(e, a, t[a]);
  if (r)
    for (var a of r(t))
      n.call(t, a) && c(e, a, t[a]);
  return e;
};
var d = (e, t) => {
  var a = {};
  for (var o in e)
    h.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && n.call(e, o) && (a[o] = e[o]);
  return a;
};
import m, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const V = l((o, a) => {
  var p = o, { children: e } = p, t = d(p, ["children"]);
  return /* @__PURE__ */ m.createElement(s, i({ ref: a }, t), e, /* @__PURE__ */ m.createElement("path", { d: "M144,48V160H96A56,56,0,0,1,96,48Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M208,40H96a64,64,0,0,0,0,128h40v40a8,8,0,0,0,16,0V56h24V208a8,8,0,0,0,16,0V56h16a8,8,0,0,0,0-16ZM136,152H96a48,48,0,0,1,0-96h40Z" }));
});
V.displayName = "Duotone";
export {
  V as Duotone
};
