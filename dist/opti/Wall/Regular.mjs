var v = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var Z = (e, m, a) => m in e ? v(e, m, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[m] = a, h = (e, m) => {
  for (var a in m || (m = {}))
    o.call(m, a) && Z(e, a, m[a]);
  if (t)
    for (var a of t(m))
      H.call(m, a) && Z(e, a, m[a]);
  return e;
};
var p = (e, m) => {
  var a = {};
  for (var r in e)
    o.call(e, r) && m.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && t)
    for (var r of t(e))
      m.indexOf(r) < 0 && H.call(e, r) && (a[r] = e[r]);
  return a;
};
import l, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((r, a) => {
  var V = r, { children: e } = V, m = p(V, ["children"]);
  return /* @__PURE__ */ l.createElement(f, h({ ref: a }, m), e, /* @__PURE__ */ l.createElement("path", { d: "M224,48H32a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V56A8,8,0,0,0,224,48ZM88,144V112h80v32Zm-48,0V112H72v32Zm144-32h32v32H184Zm32-16H136V64h80ZM120,64V96H40V64ZM40,160h80v32H40Zm96,32V160h80v32Z" }));
});
i.displayName = "Regular";
export {
  i as Regular
};
