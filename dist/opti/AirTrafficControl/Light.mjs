var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && A(a, e, t[e]);
  if (r)
    for (var e of r(t))
      o.call(t, e) && A(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var h in a)
    l.call(a, h) && t.indexOf(h) < 0 && (e[h] = a[h]);
  if (a != null && r)
    for (var h of r(a))
      t.indexOf(h) < 0 && o.call(a, h) && (e[h] = a[h]);
  return e;
};
import p, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const L = f((h, e) => {
  var m = h, { children: a } = m, t = i(m, ["children"]);
  return /* @__PURE__ */ p.createElement(s, H({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M227.47,72A14,14,0,0,0,216,66H134V30h18a6,6,0,0,0,0-12H104a6,6,0,0,0,0,12h18V66H40A14,14,0,0,0,26.84,84.78l26.19,72A14,14,0,0,0,66.18,166H98v66a6,6,0,0,0,12,0V166h36v66a6,6,0,0,0,12,0V166h31.82A14,14,0,0,0,203,156.78l26.19-72A14,14,0,0,0,227.47,72ZM109,154,95.19,78h65.62L147,154ZM64.3,152.68l-26.18-72a2,2,0,0,1,.24-1.83A1.94,1.94,0,0,1,40,78H83l13.82,76H66.18A2,2,0,0,1,64.3,152.68Zm153.58-72-26.18,72a2,2,0,0,1-1.88,1.32H159.19L173,78h43a1.94,1.94,0,0,1,1.64.85A2,2,0,0,1,217.88,80.68Z" }));
});
L.displayName = "Light";
export {
  L as Light
};
