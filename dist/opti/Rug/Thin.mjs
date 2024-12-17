var H = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var l = (a, V, e) => V in a ? H(a, V, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[V] = e, i = (a, V) => {
  for (var e in V || (V = {}))
    o.call(V, e) && l(a, e, V[e]);
  if (m)
    for (var e of m(V))
      h.call(V, e) && l(a, e, V[e]);
  return a;
};
var p = (a, V) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && V.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      V.indexOf(t) < 0 && h.call(a, t) && (e[t] = a[t]);
  return e;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((t, e) => {
  var r = t, { children: a } = r, V = p(r, ["children"]);
  return /* @__PURE__ */ n.createElement(f, i({ ref: e }, V), a, /* @__PURE__ */ n.createElement("path", { d: "M200,20a4,4,0,0,0-4,4V44H156V24a4,4,0,0,0-8,0V44H108V24a4,4,0,0,0-8,0V44H60V24a4,4,0,0,0-8,0V232a4,4,0,0,0,8,0V212h40v20a4,4,0,0,0,8,0V212h40v20a4,4,0,0,0,8,0V212h40v20a4,4,0,0,0,8,0V24A4,4,0,0,0,200,20ZM60,52H196V204H60Zm68,120a4,4,0,0,0,3.43-1.94l24-40a4,4,0,0,0,0-4.12l-24-40a4,4,0,0,0-6.86,0l-24,40a4,4,0,0,0,0,4.12l24,40A4,4,0,0,0,128,172Zm0-76.23L147.33,128,128,160.23,108.67,128Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
