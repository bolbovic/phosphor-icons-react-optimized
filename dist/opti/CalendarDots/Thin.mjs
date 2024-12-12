var h = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var A = (a, e, V) => e in a ? h(a, e, { enumerable: !0, configurable: !0, writable: !0, value: V }) : a[e] = V, o = (a, e) => {
  for (var V in e || (e = {}))
    H.call(e, V) && A(a, V, e[V]);
  if (t)
    for (var V of t(e))
      Z.call(e, V) && A(a, V, e[V]);
  return a;
};
var i = (a, e) => {
  var V = {};
  for (var m in a)
    H.call(a, m) && e.indexOf(m) < 0 && (V[m] = a[m]);
  if (a != null && t)
    for (var m of t(a))
      e.indexOf(m) < 0 && Z.call(a, m) && (V[m] = a[m]);
  return V;
};
import p, { forwardRef as n } from "react";
import c from "../../lib/OptiBase.mjs";
const f = n((m, V) => {
  var r = m, { children: a } = r, e = i(r, ["children"]);
  return /* @__PURE__ */ p.createElement(c, o({ ref: V }, e), a, /* @__PURE__ */ p.createElement("path", { d: "M208,36H180V24a4,4,0,0,0-8,0V36H84V24a4,4,0,0,0-8,0V36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM48,44H76V56a4,4,0,0,0,8,0V44h88V56a4,4,0,0,0,8,0V44h28a4,4,0,0,1,4,4V84H44V48A4,4,0,0,1,48,44ZM208,212H48a4,4,0,0,1-4-4V92H212V208A4,4,0,0,1,208,212Zm-72-80a8,8,0,1,1-8-8A8,8,0,0,1,136,132Zm44,0a8,8,0,1,1-8-8A8,8,0,0,1,180,132ZM92,172a8,8,0,1,1-8-8A8,8,0,0,1,92,172Zm44,0a8,8,0,1,1-8-8A8,8,0,0,1,136,172Zm44,0a8,8,0,1,1-8-8A8,8,0,0,1,180,172Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
