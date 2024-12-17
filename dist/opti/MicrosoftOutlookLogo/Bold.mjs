var V = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && H(a, e, t[e]);
  if (o)
    for (var e of o(t))
      l.call(t, e) && H(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var m in a)
    Z.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import A, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const h = c((m, e) => {
  var r = m, { children: a } = r, t = d(r, ["children"]);
  return /* @__PURE__ */ A.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M124,128a36,36,0,1,0-36,36A36,36,0,0,0,124,128Zm-48,0a12,12,0,1,1,12,12A12,12,0,0,1,76,128Zm148-28H212V32a12,12,0,0,0-12-12H104A12,12,0,0,0,92,32V56H36A20,20,0,0,0,16,76V180a20,20,0,0,0,20,20H68v16a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V112A12,12,0,0,0,224,100Zm-52.45,68L212,136.54v62.92ZM116,44h72v80.8l-28,21.78V76a20,20,0,0,0-20-20H116ZM40,80h96v96H40ZM92,200h48a20,20,0,0,0,18.28-11.92L189,212H92Z" }));
});
h.displayName = "Bold";
export {
  h as Bold
};
