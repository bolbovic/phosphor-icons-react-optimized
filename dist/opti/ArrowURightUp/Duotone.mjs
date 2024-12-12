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
  return /* @__PURE__ */ m.createElement(s, i({ ref: a }, t), e, /* @__PURE__ */ m.createElement("path", { d: "M216,80H120l48-48Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M221.66,74.34l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,120,88h40v80a48,48,0,0,1-96,0V80a8,8,0,0,0-16,0v88a64,64,0,0,0,128,0V88h40a8,8,0,0,0,5.66-13.66ZM139.31,72,168,43.31,196.69,72Z" }));
});
E.displayName = "Duotone";
export {
  E as Duotone
};
