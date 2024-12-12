var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, V, e) => V in a ? f(a, V, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[V] = e, H = (a, V) => {
  for (var e in V || (V = {}))
    r.call(V, e) && o(a, e, V[e]);
  if (l)
    for (var e of l(V))
      p.call(V, e) && o(a, e, V[e]);
  return a;
};
var d = (a, V) => {
  var e = {};
  for (var t in a)
    r.call(a, t) && V.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      V.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = i((t, e) => {
  var m = t, { children: a } = m, V = d(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, H({ ref: e }, V), a, /* @__PURE__ */ c.createElement("path", { d: "M200,12a12,12,0,0,0-12,12V36H164V24a12,12,0,0,0-24,0V36H116V24a12,12,0,0,0-24,0V36H68V24a12,12,0,0,0-24,0V232a12,12,0,0,0,24,0V220H92v12a12,12,0,0,0,24,0V220h24v12a12,12,0,0,0,24,0V220h24v12a12,12,0,0,0,24,0V24A12,12,0,0,0,200,12ZM68,60H188V196H68Zm60,120a12,12,0,0,0,10.29-5.83l24-40a12,12,0,0,0,0-12.34l-24-40a12,12,0,0,0-20.58,0l-24,40a12,12,0,0,0,0,12.34l24,40A12,12,0,0,0,128,180Zm0-68.68L138,128l-10,16.68L118,128Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
