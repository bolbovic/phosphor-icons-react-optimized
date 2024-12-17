var v = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
var Z = (e, t, m) => t in e ? v(e, t, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[t] = m, o = (e, t) => {
  for (var m in t || (t = {}))
    h.call(t, m) && Z(e, m, t[m]);
  if (H)
    for (var m of H(t))
      r.call(t, m) && Z(e, m, t[m]);
  return e;
};
var i = (e, t) => {
  var m = {};
  for (var V in e)
    h.call(e, V) && t.indexOf(V) < 0 && (m[V] = e[V]);
  if (e != null && H)
    for (var V of H(e))
      t.indexOf(V) < 0 && r.call(e, V) && (m[V] = e[V]);
  return m;
};
import p, { forwardRef as A } from "react";
import M from "../../lib/OptiBase.mjs";
const c = A((V, m) => {
  var a = V, { children: e } = a, t = i(a, ["children"]);
  return /* @__PURE__ */ p.createElement(M, o({ ref: m }, t), e, /* @__PURE__ */ p.createElement("path", { d: "M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM38,86h84v84H38Zm96-12V54h36V74Zm-12,0H86V54h36Zm0,108v20H86V182Zm12,0h36v20H134Zm0-12V86h84v84ZM218,56V74H182V54h34A2,2,0,0,1,218,56ZM40,54H74V74H38V56A2,2,0,0,1,40,54ZM38,200V182H74v20H40A2,2,0,0,1,38,200Zm178,2H182V182h36v18A2,2,0,0,1,216,202Z" }));
});
c.displayName = "Light";
export {
  c as Light
};
