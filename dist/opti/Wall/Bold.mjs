var l = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var V = (e, m, a) => m in e ? l(e, m, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[m] = a, h = (e, m) => {
  for (var a in m || (m = {}))
    Z.call(m, a) && V(e, a, m[a]);
  if (o)
    for (var a of o(m))
      H.call(m, a) && V(e, a, m[a]);
  return e;
};
var p = (e, m) => {
  var a = {};
  for (var t in e)
    Z.call(e, t) && m.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && o)
    for (var t of o(e))
      m.indexOf(t) < 0 && H.call(e, t) && (a[t] = e[t]);
  return a;
};
import d, { forwardRef as v } from "react";
import c from "../../lib/OptiBase.mjs";
const f = v((t, a) => {
  var r = t, { children: e } = r, m = p(r, ["children"]);
  return /* @__PURE__ */ d.createElement(c, h({ ref: a }, m), e, /* @__PURE__ */ d.createElement("path", { d: "M224,44H32A12,12,0,0,0,20,56V200a12,12,0,0,0,12,12H224a12,12,0,0,0,12-12V56A12,12,0,0,0,224,44ZM92,140V116h72v24Zm-48,0V116H68v24Zm144-24h24v24H188Zm24-24H140V68h72ZM116,68V92H44V68ZM44,164h72v24H44Zm96,24V164h72v24Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
