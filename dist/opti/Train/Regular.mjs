var M = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var Z = (a, r, e) => r in a ? M(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, p = (a, r) => {
  for (var e in r || (r = {}))
    h.call(r, e) && Z(a, e, r[e]);
  if (m)
    for (var e of m(r))
      l.call(r, e) && Z(a, e, r[e]);
  return a;
};
var A = (a, r) => {
  var e = {};
  for (var t in a)
    h.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && l.call(a, t) && (e[t] = a[t]);
  return e;
};
import H, { forwardRef as V } from "react";
import c from "../../lib/OptiBase.mjs";
const f = V((t, e) => {
  var o = t, { children: a } = o, r = A(o, ["children"]);
  return /* @__PURE__ */ H.createElement(c, p({ ref: e }, r), a, /* @__PURE__ */ H.createElement("path", { d: "M184,24H72A32,32,0,0,0,40,56V184a32,32,0,0,0,32,32h8L65.6,235.2a8,8,0,1,0,12.8,9.6L100,216h56l21.6,28.8a8,8,0,1,0,12.8-9.6L176,216h8a32,32,0,0,0,32-32V56A32,32,0,0,0,184,24ZM56,120V80h64v40Zm80-40h64v40H136ZM72,40H184a16,16,0,0,1,16,16v8H56V56A16,16,0,0,1,72,40ZM184,200H72a16,16,0,0,1-16-16V136H200v48A16,16,0,0,1,184,200ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm88,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z" }));
});
f.displayName = "Regular";
export {
  f as Regular
};
