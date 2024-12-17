var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var V = (e, a, t) => a in e ? c(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, p = (e, a) => {
  for (var t in a || (a = {}))
    Z.call(a, t) && V(e, t, a[t]);
  if (r)
    for (var t of r(a))
      l.call(a, t) && V(e, t, a[t]);
  return e;
};
var M = (e, a) => {
  var t = {};
  for (var o in e)
    Z.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      a.indexOf(o) < 0 && l.call(e, o) && (t[o] = e[o]);
  return t;
};
import H, { forwardRef as h } from "react";
import n from "../../lib/OptiBase.mjs";
const i = h((o, t) => {
  var m = o, { children: e } = m, a = M(m, ["children"]);
  return /* @__PURE__ */ H.createElement(n, p({ ref: t }, a), e, /* @__PURE__ */ H.createElement("path", { d: "M216,96V216H96L40,160V40H160Z", opacity: "0.2" }), /* @__PURE__ */ H.createElement("path", { d: "M221.66,90.34h0l-56-56A8,8,0,0,0,160,32H40a8,8,0,0,0-8,8V160a8,8,0,0,0,2.3,5.61l56,56h0A8,8,0,0,0,96,224H216a8,8,0,0,0,8-8V96A8,8,0,0,0,221.66,90.34ZM168,59.31,196.69,88H168ZM88,196.69,59.31,168H88ZM88,152H48V59.31l40,40ZM59.31,48H152V88H99.31ZM152,104v48H104V104ZM104,208V168h52.69l40,40Zm104-11.31-40-40V104h40Z" }));
});
i.displayName = "Duotone";
export {
  i as Duotone
};
