var l = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var V = (a, m, e) => m in a ? l(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, h = (a, m) => {
  for (var e in m || (m = {}))
    v.call(m, e) && V(a, e, m[e]);
  if (t)
    for (var e of t(m))
      Z.call(m, e) && V(a, e, m[e]);
  return a;
};
var o = (a, m) => {
  var e = {};
  for (var r in a)
    v.call(a, r) && m.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      m.indexOf(r) < 0 && Z.call(a, r) && (e[r] = a[r]);
  return e;
};
import p, { forwardRef as A } from "react";
import c from "../../lib/OptiBase.mjs";
const f = A((r, e) => {
  var H = r, { children: a } = H, m = o(H, ["children"]);
  return /* @__PURE__ */ p.createElement(c, h({ ref: e }, m), a, /* @__PURE__ */ p.createElement("path", { d: "M184,40H72A56.06,56.06,0,0,0,16,96v96a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V96A56.06,56.06,0,0,0,184,40Zm40,56v8H192V56.8A40.07,40.07,0,0,1,224,96Zm-88,40H120V104h16Zm-24,16h32a8,8,0,0,0,8-8V120h24v72H80V120h24v24A8,8,0,0,0,112,152Zm40-48V96a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v8H80V56h96v48ZM64,56.8V104H32V96A40.07,40.07,0,0,1,64,56.8ZM32,120H64v72H32Zm192,72H192V120h32v72Z" }));
});
f.displayName = "Regular";
export {
  f as Regular
};
