var V = Object.defineProperty;
var Z = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var A = (a, e, m) => e in a ? V(a, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : a[e] = m, p = (a, e) => {
  for (var m in e || (e = {}))
    o.call(e, m) && A(a, m, e[m]);
  if (Z)
    for (var m of Z(e))
      i.call(e, m) && A(a, m, e[m]);
  return a;
};
var H = (a, e) => {
  var m = {};
  for (var t in a)
    o.call(a, t) && e.indexOf(t) < 0 && (m[t] = a[t]);
  if (a != null && Z)
    for (var t of Z(a))
      e.indexOf(t) < 0 && i.call(a, t) && (m[t] = a[t]);
  return m;
};
import h, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((t, m) => {
  var r = t, { children: a } = r, e = H(r, ["children"]);
  return /* @__PURE__ */ h.createElement(f, p({ ref: m }, e), a, /* @__PURE__ */ h.createElement("path", { d: "M176,58H80a6,6,0,0,0-6,6v48a6,6,0,0,0,6,6h96a6,6,0,0,0,6-6V64A6,6,0,0,0,176,58Zm-6,48H86V70h84Zm30-80H56A14,14,0,0,0,42,40V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V40A14,14,0,0,0,200,26Zm2,190a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2H200a2,2,0,0,1,2,2ZM98,148a10,10,0,1,1-10-10A10,10,0,0,1,98,148Zm40,0a10,10,0,1,1-10-10A10,10,0,0,1,138,148Zm40,0a10,10,0,1,1-10-10A10,10,0,0,1,178,148ZM98,188a10,10,0,1,1-10-10A10,10,0,0,1,98,188Zm40,0a10,10,0,1,1-10-10A10,10,0,0,1,138,188Zm40,0a10,10,0,1,1-10-10A10,10,0,0,1,178,188Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
