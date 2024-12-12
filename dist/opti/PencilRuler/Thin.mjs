var l = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var h = (a, V, e) => V in a ? l(a, V, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[V] = e, Z = (a, V) => {
  for (var e in V || (V = {}))
    r.call(V, e) && h(a, e, V[e]);
  if (t)
    for (var e of t(V))
      o.call(V, e) && h(a, e, V[e]);
  return a;
};
var i = (a, V) => {
  var e = {};
  for (var m in a)
    r.call(a, m) && V.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && t)
    for (var m of t(a))
      V.indexOf(m) < 0 && o.call(a, m) && (e[m] = a[m]);
  return e;
};
import p, { forwardRef as n } from "react";
import c from "../../lib/OptiBase.mjs";
const f = n((m, e) => {
  var H = m, { children: a } = H, V = i(H, ["children"]);
  return /* @__PURE__ */ p.createElement(c, Z({ ref: e }, V), a, /* @__PURE__ */ p.createElement("path", { d: "M208,36H160a12,12,0,0,0-12,12V208a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm4,172a4,4,0,0,1-4,4H160a4,4,0,0,1-4-4V172h28a4,4,0,0,0,0-8H156V132h28a4,4,0,0,0,0-8H156V92h28a4,4,0,0,0,0-8H156V48a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4ZM74.83,29.17a4,4,0,0,0-5.66,0l-32,32A4,4,0,0,0,36,64V208a12,12,0,0,0,12,12H96a12,12,0,0,0,12-12V64a4,4,0,0,0-1.17-2.83ZM44,76H68V180H44Zm56,132a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V188h56Zm0-28H76V76h24Zm0-112H44V65.66l28-28,28,28Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
