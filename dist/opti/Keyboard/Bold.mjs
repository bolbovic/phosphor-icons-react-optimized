var l = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var r = (a, m, e) => m in a ? l(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    A.call(m, e) && r(a, e, m[e]);
  if (H)
    for (var e of H(m))
      Z.call(m, e) && r(a, e, m[e]);
  return a;
};
var d = (a, m) => {
  var e = {};
  for (var t in a)
    A.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && H)
    for (var t of H(a))
      m.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import h, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((t, e) => {
  var o = t, { children: a } = o, m = d(o, ["children"]);
  return /* @__PURE__ */ h.createElement(f, p({ ref: e }, m), a, /* @__PURE__ */ h.createElement("path", { d: "M224,44H32A20,20,0,0,0,12,64V192a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V64A20,20,0,0,0,224,44Zm-4,144H36V68H220ZM52,128a12,12,0,0,1,12-12H192a12,12,0,0,1,0,24H64A12,12,0,0,1,52,128Zm0-36A12,12,0,0,1,64,80H192a12,12,0,0,1,0,24H64A12,12,0,0,1,52,92Zm0,72a12,12,0,0,1,12-12h8a12,12,0,0,1,0,24H64A12,12,0,0,1,52,164Zm108,0a12,12,0,0,1-12,12H108a12,12,0,0,1,0-24h40A12,12,0,0,1,160,164Zm44,0a12,12,0,0,1-12,12h-8a12,12,0,0,1,0-24h8A12,12,0,0,1,204,164Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
