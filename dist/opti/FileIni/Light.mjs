var v = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? v(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var m in a)
    A.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import l, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((m, e) => {
  var V = m, { children: a } = V, t = h(V, ["children"]);
  return /* @__PURE__ */ l.createElement(c, p({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M46,152v56a6,6,0,0,1-12,0V152a6,6,0,0,1,12,0Zm74-6a6,6,0,0,0-6,6v37.28L84.88,148.51A6,6,0,0,0,74,152v56a6,6,0,0,0,12,0V170.72l29.12,40.77A6,6,0,0,0,120,214a5.78,5.78,0,0,0,1.83-.29A6,6,0,0,0,126,208V152A6,6,0,0,0,120,146Zm40,0a6,6,0,0,0-6,6v56a6,6,0,0,0,12,0V152A6,6,0,0,0,160,146Zm54-58V224a6,6,0,0,1-12,0V94H152a6,6,0,0,1-6-6V38H56a2,2,0,0,0-2,2v72a6,6,0,0,1-12,0V40A14,14,0,0,1,56,26h96a6,6,0,0,1,4.25,1.76l56,56A6,6,0,0,1,214,88Zm-56-6h35.52L158,46.48Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
