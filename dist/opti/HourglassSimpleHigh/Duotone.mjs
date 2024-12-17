var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var l = (e, a, t) => a in e ? i(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, M = (e, a) => {
  for (var t in a || (a = {}))
    c.call(a, t) && l(e, t, a[t]);
  if (r)
    for (var t of r(a))
      n.call(a, t) && l(e, t, a[t]);
  return e;
};
var Z = (e, a) => {
  var t = {};
  for (var o in e)
    c.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      a.indexOf(o) < 0 && n.call(e, o) && (t[o] = e[o]);
  return t;
};
import m, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const h = d((o, t) => {
  var p = o, { children: e } = p, a = Z(p, ["children"]);
  return /* @__PURE__ */ m.createElement(f, M({ ref: t }, a), e, /* @__PURE__ */ m.createElement("path", { d: "M186.48,72,128,128,69.52,72Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M211.18,196.56,139.57,128l71.61-68.56a1.59,1.59,0,0,1,.13-.13A16,16,0,0,0,200,32H56A16,16,0,0,0,44.69,59.31a1.59,1.59,0,0,1,.13.13L116.43,128,44.82,196.56a1.59,1.59,0,0,1-.13.13A16,16,0,0,0,56,224H200a16,16,0,0,0,11.32-27.31A1.59,1.59,0,0,1,211.18,196.56ZM56,48h0v0ZM89.43,80h77.14L128,116.92ZM200,48l-16.7,16H72.72L56,48ZM56,208l72-68.92L200,208Z" }));
});
h.displayName = "Duotone";
export {
  h as Duotone
};
