var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var r = (a, V, e) => V in a ? d(a, V, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[V] = e, p = (a, V) => {
  for (var e in V || (V = {}))
    H.call(V, e) && r(a, e, V[e]);
  if (m)
    for (var e of m(V))
      l.call(V, e) && r(a, e, V[e]);
  return a;
};
var v = (a, V) => {
  var e = {};
  for (var t in a)
    H.call(a, t) && V.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      V.indexOf(t) < 0 && l.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as A } from "react";
import c from "../../lib/OptiBase.mjs";
const f = A((t, e) => {
  var o = t, { children: a } = o, V = v(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(c, p({ ref: e }, V), a, /* @__PURE__ */ Z.createElement("path", { d: "M208,54.34V32a12,12,0,0,0-24,0V54.34A32.06,32.06,0,0,0,164,84v26.75L140,97V72a12,12,0,0,0-24,0V97L92,110.75V84A32.06,32.06,0,0,0,72,54.34V32a12,12,0,0,0-24,0V54.34A32.06,32.06,0,0,0,28,84V216a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V84A32.06,32.06,0,0,0,208,54.34ZM128,160a12,12,0,0,0-12,12v32H92V138.39l36-20.57,36,20.57V204H140V172A12,12,0,0,0,128,160ZM52,84a8,8,0,0,1,16,0v16H52Zm136,0a8,8,0,0,1,16,0v16H188ZM52,124H68v80H52Zm136,80V124h16v80Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
