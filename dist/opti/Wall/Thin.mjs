var v = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var Z = (e, m, a) => m in e ? v(e, m, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[m] = a, V = (e, m) => {
  for (var a in m || (m = {}))
    o.call(m, a) && Z(e, a, m[a]);
  if (r)
    for (var a of r(m))
      H.call(m, a) && Z(e, a, m[a]);
  return e;
};
var i = (e, m) => {
  var a = {};
  for (var t in e)
    o.call(e, t) && m.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && r)
    for (var t of r(e))
      m.indexOf(t) < 0 && H.call(e, t) && (a[t] = e[t]);
  return a;
};
import p, { forwardRef as n } from "react";
import c from "../../lib/OptiBase.mjs";
const f = n((t, a) => {
  var h = t, { children: e } = h, m = i(h, ["children"]);
  return /* @__PURE__ */ p.createElement(c, V({ ref: a }, m), e, /* @__PURE__ */ p.createElement("path", { d: "M224,52H32a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H224a4,4,0,0,0,4-4V56A4,4,0,0,0,224,52ZM84,148V108h88v40Zm-48,0V108H76v40Zm144-40h40v40H180Zm40-8H132V60h88ZM124,60v40H36V60ZM36,156h88v40H36Zm96,40V156h88v40Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
