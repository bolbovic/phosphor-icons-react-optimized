var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var Z = (a, m, e) => m in a ? h(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    o.call(m, e) && Z(a, e, m[e]);
  if (r)
    for (var e of r(m))
      i.call(m, e) && Z(a, e, m[e]);
  return a;
};
var H = (a, m) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import V, { forwardRef as n } from "react";
import s from "../../lib/OptiBase.mjs";
const c = n((t, e) => {
  var A = t, { children: a } = A, m = H(A, ["children"]);
  return /* @__PURE__ */ V.createElement(s, p({ ref: e }, m), a, /* @__PURE__ */ V.createElement("path", { d: "M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44Zm4,12v68H164V52h52A4,4,0,0,1,220,56ZM36,200V56a4,4,0,0,1,4-4H156V204H40A4,4,0,0,1,36,200Zm180,4H164V132h56v68A4,4,0,0,1,216,204ZM184,88a8,8,0,1,1,8,8A8,8,0,0,1,184,88Zm16,80a8,8,0,1,1-8-8A8,8,0,0,1,200,168Zm-68.13-1a36.2,36.2,0,0,0-20.43-23.67,28,28,0,1,0-30.88,0A36.28,36.28,0,0,0,60.13,167,4,4,0,0,0,63,171.87a3.87,3.87,0,0,0,1,.13,4,4,0,0,0,3.87-3C71,157,83.05,148,96,148s25.06,9,28.13,21a4,4,0,1,0,7.74-2ZM76,120a20,20,0,1,1,20,20A20,20,0,0,1,76,120Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
