var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var c = (e, a, t) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, i = (e, a) => {
  for (var t in a || (a = {}))
    l.call(a, t) && c(e, t, a[t]);
  if (r)
    for (var t of r(a))
      n.call(a, t) && c(e, t, a[t]);
  return e;
};
var d = (e, a) => {
  var t = {};
  for (var o in e)
    l.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      a.indexOf(o) < 0 && n.call(e, o) && (t[o] = e[o]);
  return t;
};
import m, { forwardRef as s } from "react";
import h from "../../lib/OptiBase.mjs";
const E = s((o, t) => {
  var p = o, { children: e } = p, a = d(p, ["children"]);
  return /* @__PURE__ */ m.createElement(h, i({ ref: t }, a), e, /* @__PURE__ */ m.createElement("path", { d: "M80,56v96L32,104Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M128,96H88V56a8,8,0,0,0-13.66-5.66l-48,48a8,8,0,0,0,0,11.32l48,48A8,8,0,0,0,88,152V112h40a88.1,88.1,0,0,1,88,88,8,8,0,0,0,16,0A104.11,104.11,0,0,0,128,96ZM72,132.69,43.31,104,72,75.31Z" }));
});
E.displayName = "Duotone";
export {
  E as Duotone
};
