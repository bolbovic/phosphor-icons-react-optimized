var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && A(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && A(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import h, { forwardRef as s } from "react";
import c from "../../lib/OptiBase.mjs";
const f = s((m, e) => {
  var o = m, { children: a } = o, t = Z(o, ["children"]);
  return /* @__PURE__ */ h.createElement(c, H({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M196,112a4,4,0,0,1-4,4H152a4,4,0,0,1,0-8h40A4,4,0,0,1,196,112Zm-4,28H152a4,4,0,0,0,0,8h40a4,4,0,0,0,0-8Zm36-84V200a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V56A12,12,0,0,1,40,44H216A12,12,0,0,1,228,56Zm-8,0a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4ZM131.87,167a4,4,0,1,1-7.74,2C121.06,157,109,148,96,148s-25,9-28.13,21A4,4,0,0,1,64,172a3.87,3.87,0,0,1-1-.13A4,4,0,0,1,60.13,167a36.28,36.28,0,0,1,20.43-23.66,28,28,0,1,1,30.88,0A36.2,36.2,0,0,1,131.87,167ZM96,140a20,20,0,1,0-20-20A20,20,0,0,0,96,140Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
