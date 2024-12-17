var A = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var Z = (a, m, e) => m in a ? A(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, h = (a, m) => {
  for (var e in m || (m = {}))
    r.call(m, e) && Z(a, e, m[e]);
  if (H)
    for (var e of H(m))
      o.call(m, e) && Z(a, e, m[e]);
  return a;
};
var i = (a, m) => {
  var e = {};
  for (var t in a)
    r.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && H)
    for (var t of H(a))
      m.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import p, { forwardRef as n } from "react";
import v from "../../lib/OptiBase.mjs";
const M = n((t, e) => {
  var V = t, { children: a } = V, m = i(V, ["children"]);
  return /* @__PURE__ */ p.createElement(v, h({ ref: e }, m), a, /* @__PURE__ */ p.createElement("path", { d: "M184,36H72A28,28,0,0,0,44,64V208a12,12,0,0,0,12,12H80a12,12,0,0,0,12-12V188h72v20a12,12,0,0,0,12,12h24a12,12,0,0,0,12-12V64A28,28,0,0,0,184,36ZM52,180V116H204v64Zm152-72H52V76H204ZM84,208a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V188H84Zm116,4H176a4,4,0,0,1-4-4V188h32v20A4,4,0,0,1,200,212Zm4-144H52V64A20,20,0,0,1,72,44H184a20,20,0,0,1,20,20ZM100,148a8,8,0,1,1-8-8A8,8,0,0,1,100,148Zm72,0a8,8,0,1,1-8-8A8,8,0,0,1,172,148Zm72-68v24a4,4,0,0,1-8,0V80a4,4,0,0,1,8,0ZM20,80v24a4,4,0,0,1-8,0V80a4,4,0,0,1,8,0Z" }));
});
M.displayName = "Thin";
export {
  M as Thin
};
