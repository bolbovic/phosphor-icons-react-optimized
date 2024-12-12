var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var l = (e, a, t) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, i = (e, a) => {
  for (var t in a || (a = {}))
    c.call(a, t) && l(e, t, a[t]);
  if (r)
    for (var t of r(a))
      n.call(a, t) && l(e, t, a[t]);
  return e;
};
var d = (e, a) => {
  var t = {};
  for (var o in e)
    c.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      a.indexOf(o) < 0 && n.call(e, o) && (t[o] = e[o]);
  return t;
};
import m, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const E = h((o, t) => {
  var p = o, { children: e } = p, a = d(p, ["children"]);
  return /* @__PURE__ */ m.createElement(s, i({ ref: t }, a), e, /* @__PURE__ */ m.createElement("path", { d: "M216,96H120l48-48Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M221.66,90.34l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,120,104h40v80H24a8,8,0,0,0,0,16H168a8,8,0,0,0,8-8V104h40a8,8,0,0,0,5.66-13.66ZM139.31,88,168,59.31,196.69,88Z" }));
});
E.displayName = "Duotone";
export {
  E as Duotone
};
