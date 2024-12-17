var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var Z = (e, a, t) => a in e ? c(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, p = (e, a) => {
  for (var t in a || (a = {}))
    h.call(a, t) && Z(e, t, a[t]);
  if (o)
    for (var t of o(a))
      H.call(a, t) && Z(e, t, a[t]);
  return e;
};
var v = (e, a) => {
  var t = {};
  for (var m in e)
    h.call(e, m) && a.indexOf(m) < 0 && (t[m] = e[m]);
  if (e != null && o)
    for (var m of o(e))
      a.indexOf(m) < 0 && H.call(e, m) && (t[m] = e[m]);
  return t;
};
import r, { forwardRef as n } from "react";
import i from "../../lib/OptiBase.mjs";
const M = n((m, t) => {
  var V = m, { children: e } = V, a = v(V, ["children"]);
  return /* @__PURE__ */ r.createElement(i, p({ ref: t }, a), e, /* @__PURE__ */ r.createElement("path", { d: "M128,104H32V56h96Zm48,0v48H128v48h96V104Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M224,48H32a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V56A8,8,0,0,0,224,48ZM88,144V112h80v32Zm-48,0V112H72v32Zm144-32h32v32H184Zm32-16H136V64h80ZM120,64V96H40V64ZM40,160h80v32H40Zm96,32V160h80v32Z" }));
});
M.displayName = "Duotone";
export {
  M as Duotone
};
