var A = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && H(a, e, t[e]);
  if (V)
    for (var e of V(t))
      o.call(t, e) && H(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var r in a)
    h.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && V)
    for (var r of V(a))
      t.indexOf(r) < 0 && o.call(a, r) && (e[r] = a[r]);
  return e;
};
import p, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = f((r, e) => {
  var m = r, { children: a } = m, t = i(m, ["children"]);
  return /* @__PURE__ */ p.createElement(s, c({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M232,66H206V48a6,6,0,0,0-6-6H56a6,6,0,0,0-6,6V66H24A14,14,0,0,0,10,80V96a38,38,0,0,0,38,38h5.14A78,78,0,0,0,122,189.75V218H96a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12H134V189.75c32.44-2.52,59.43-25.3,68.62-55.75H208a38,38,0,0,0,38-38V80A14,14,0,0,0,232,66ZM48,122A26,26,0,0,1,22,96V80a2,2,0,0,1,2-2H50v34a80.87,80.87,0,0,0,.65,10Zm146-10.9c0,36.62-29.38,66.63-65.5,66.9A66,66,0,0,1,62,112V54H194ZM234,96a26,26,0,0,1-26,26h-2.77a78.45,78.45,0,0,0,.77-10.9V78h26a2,2,0,0,1,2,2Z" }));
});
Z.displayName = "Light";
export {
  Z as Light
};
