var v = Object.defineProperty;
var a = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
var Z = (e, V, m) => V in e ? v(e, V, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[V] = m, o = (e, V) => {
  for (var m in V || (V = {}))
    h.call(V, m) && Z(e, m, V[m]);
  if (a)
    for (var m of a(V))
      r.call(V, m) && Z(e, m, V[m]);
  return e;
};
var i = (e, V) => {
  var m = {};
  for (var H in e)
    h.call(e, H) && V.indexOf(H) < 0 && (m[H] = e[H]);
  if (e != null && a)
    for (var H of a(e))
      V.indexOf(H) < 0 && r.call(e, H) && (m[H] = e[H]);
  return m;
};
import p, { forwardRef as A } from "react";
import n from "../../lib/OptiBase.mjs";
const M = A((H, m) => {
  var t = H, { children: e } = t, V = i(t, ["children"]);
  return /* @__PURE__ */ p.createElement(n, o({ ref: m }, V), e, /* @__PURE__ */ p.createElement("path", { d: "M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44ZM36,84h88v88H36Zm96-8V52h40V76Zm-8,0H84V52h40Zm0,104v24H84V180Zm8,0h40v24H132Zm0-8V84h88v88ZM220,56V76H180V52h36A4,4,0,0,1,220,56ZM40,52H76V76H36V56A4,4,0,0,1,40,52ZM36,200V180H76v24H40A4,4,0,0,1,36,200Zm180,4H180V180h40v20A4,4,0,0,1,216,204Z" }));
});
M.displayName = "Thin";
export {
  M as Thin
};
