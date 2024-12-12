var H = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var v = (a, e, V) => e in a ? H(a, e, { enumerable: !0, configurable: !0, writable: !0, value: V }) : a[e] = V, h = (a, e) => {
  for (var V in e || (e = {}))
    A.call(e, V) && v(a, V, e[V]);
  if (m)
    for (var V of m(e))
      o.call(e, V) && v(a, V, e[V]);
  return a;
};
var i = (a, e) => {
  var V = {};
  for (var t in a)
    A.call(a, t) && e.indexOf(t) < 0 && (V[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && o.call(a, t) && (V[t] = a[t]);
  return V;
};
import p, { forwardRef as Z } from "react";
import l from "../../lib/OptiBase.mjs";
const n = Z((t, V) => {
  var r = t, { children: a } = r, e = i(r, ["children"]);
  return /* @__PURE__ */ p.createElement(l, h({ ref: V }, e), a, /* @__PURE__ */ p.createElement("path", { d: "M204,60.4V32a4,4,0,0,0-8,0V60.4A20,20,0,0,0,180,80v49.11l-48-27.43V72a4,4,0,0,0-8,0v29.68L76,129.11V80A20,20,0,0,0,60,60.4V32a4,4,0,0,0-8,0V60.4A20,20,0,0,0,36,80V216a4,4,0,0,0,4,4h72a4,4,0,0,0,4-4V176a12,12,0,0,1,24,0v40a4,4,0,0,0,4,4h72a4,4,0,0,0,4-4V80A20,20,0,0,0,204,60.4ZM200,68a12,12,0,0,1,12,12v28H188V80A12,12,0,0,1,200,68ZM56,68A12,12,0,0,1,68,80v28H44V80A12,12,0,0,1,56,68ZM44,116H68v96H44Zm84,40a20,20,0,0,0-20,20v36H76V138.32l52-29.71,52,29.71V212H148V176A20,20,0,0,0,128,156Zm60,56V116h24v96Z" }));
});
n.displayName = "Thin";
export {
  n as Thin
};
