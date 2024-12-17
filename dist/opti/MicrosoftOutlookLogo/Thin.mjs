var p = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var V = (a, m, e) => m in a ? p(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, A = (a, m) => {
  for (var e in m || (m = {}))
    Z.call(m, e) && V(a, e, m[e]);
  if (r)
    for (var e of r(m))
      o.call(m, e) && V(a, e, m[e]);
  return a;
};
var h = (a, m) => {
  var e = {};
  for (var t in a)
    Z.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as n } from "react";
import v from "../../lib/OptiBase.mjs";
const c = n((t, e) => {
  var H = t, { children: a } = H, m = h(H, ["children"]);
  return /* @__PURE__ */ i.createElement(v, A({ ref: e }, m), a, /* @__PURE__ */ i.createElement("path", { d: "M116,128a28,28,0,1,0-28,28A28,28,0,0,0,116,128Zm-48,0a20,20,0,1,1,20,20A20,20,0,0,1,68,128Zm156-20H204V40a4,4,0,0,0-4-4H104a4,4,0,0,0-4,4V68H40A12,12,0,0,0,28,80v96a12,12,0,0,0,12,12H76v20a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V112A4,4,0,0,0,224,108Zm-4,100.17L158.83,164,220,119.82V208A1,1,0,0,1,220,208.17ZM211.63,116,204,121.51V116ZM108,44h88v83.29l-44,31.78-4-2.89V80a12,12,0,0,0-12-12H108ZM36,176V80a4,4,0,0,1,4-4h96a4,4,0,0,1,4,4v96a4,4,0,0,1-4,4H40A4,4,0,0,1,36,176Zm48,32V188h52a12,12,0,0,0,12-12v-9.95L211.63,212H88A4,4,0,0,1,84,208Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
