var h = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var r = (a, m, e) => m in a ? h(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, V = (a, m) => {
  for (var e in m || (m = {}))
    Z.call(m, e) && r(a, e, m[e]);
  if (A)
    for (var e of A(m))
      H.call(m, e) && r(a, e, m[e]);
  return a;
};
var p = (a, m) => {
  var e = {};
  for (var t in a)
    Z.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && A)
    for (var t of A(a))
      m.indexOf(t) < 0 && H.call(a, t) && (e[t] = a[t]);
  return e;
};
import d, { forwardRef as l } from "react";
import M from "../../lib/OptiBase.mjs";
const c = l((t, e) => {
  var o = t, { children: a } = o, m = p(o, ["children"]);
  return /* @__PURE__ */ d.createElement(M, V({ ref: e }, m), a, /* @__PURE__ */ d.createElement("path", { d: "M236,104a36,36,0,0,0-48-33.94V56a36,36,0,0,0-60-26.8A36,36,0,0,0,70.06,68H56a36,36,0,0,0-26.8,60A36,36,0,0,0,68,185.94V200a36,36,0,0,0,60,26.8A36,36,0,0,0,185.94,188H200a36,36,0,0,0,26.8-60A35.82,35.82,0,0,0,236,104ZM200,92a12,12,0,0,1,0,24H188V104A12,12,0,0,1,200,92ZM152,44a12,12,0,0,1,12,12v48a12,12,0,0,1-12,12H140V56A12,12,0,0,1,152,44ZM92,56a12,12,0,0,1,24,0V68H104A12,12,0,0,1,92,56ZM56,92h48a12,12,0,0,1,12,12v12H56a12,12,0,0,1,0-24Zm0,72a12,12,0,0,1,0-24H68v12A12,12,0,0,1,56,164Zm48,48a12,12,0,0,1-12-12V152a12,12,0,0,1,12-12h12v60A12,12,0,0,1,104,212Zm60-12a12,12,0,0,1-24,0V188h12A12,12,0,0,1,164,200Zm36-36H152a12,12,0,0,1-12-12V140h60a12,12,0,0,1,0,24Z" }));
});
c.displayName = "Bold";
export {
  c as Bold
};
