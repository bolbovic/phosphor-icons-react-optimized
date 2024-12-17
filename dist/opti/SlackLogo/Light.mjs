var p = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var Z = (a, t, e) => t in a ? p(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && Z(a, e, t[e]);
  if (r)
    for (var e of r(t))
      o.call(t, e) && Z(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var m in a)
    h.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && o.call(a, m) && (e[m] = a[m]);
  return e;
};
import i, { forwardRef as v } from "react";
import M from "../../lib/OptiBase.mjs";
const c = v((m, e) => {
  var A = m, { children: a } = A, t = V(A, ["children"]);
  return /* @__PURE__ */ i.createElement(M, H({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M218,128a30,30,0,1,0-36-48V56a30,30,0,0,0-54-18A30,30,0,1,0,80,74H56a30,30,0,0,0-18,54,30,30,0,1,0,36,48v24a30,30,0,0,0,54,18,30,30,0,1,0,48-36h24a30,30,0,0,0,18-54ZM200,86a18,18,0,0,1,0,36H182V104A18,18,0,0,1,200,86ZM152,38a18,18,0,0,1,18,18v48a18,18,0,0,1-18,18H134V56A18,18,0,0,1,152,38ZM86,56a18,18,0,0,1,36,0V74H104A18,18,0,0,1,86,56ZM38,104A18,18,0,0,1,56,86h48a18,18,0,0,1,18,18v18H56A18,18,0,0,1,38,104Zm18,66a18,18,0,0,1,0-36H74v18A18,18,0,0,1,56,170Zm48,48a18,18,0,0,1-18-18V152a18,18,0,0,1,18-18h18v66A18,18,0,0,1,104,218Zm66-18a18,18,0,0,1-36,0V182h18A18,18,0,0,1,170,200Zm30-30H152a18,18,0,0,1-18-18V134h66a18,18,0,0,1,0,36Z" }));
});
c.displayName = "Light";
export {
  c as Light
};
