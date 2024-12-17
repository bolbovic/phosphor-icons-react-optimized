var l = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && V(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && V(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var m in a)
    Z.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import d, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const h = c((m, e) => {
  var r = m, { children: a } = r, t = H(r, ["children"]);
  return /* @__PURE__ */ d.createElement(f, A({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M84,112a16,16,0,1,1,16,16A16,16,0,0,1,84,112Zm72-16a16,16,0,1,0,16,16A16,16,0,0,0,156,96Zm-6.4,45.85a41,41,0,0,1-43.2,0,12,12,0,1,0-12.8,20.3,65,65,0,0,0,68.8,0,12,12,0,1,0-12.8-20.3ZM220,84v88a36.07,36.07,0,0,1-24,33.94V224a20,20,0,0,1-20,20H80a20,20,0,0,1-20-20V205.94A36.07,36.07,0,0,1,36,172V84A36,36,0,0,1,72,48H84V32a20,20,0,0,1,20-20h48a20,20,0,0,1,20,20V48h12A36,36,0,0,1,220,84ZM108,48h40V36H108Zm64,172V208H84v12ZM196,84a12,12,0,0,0-12-12H72A12,12,0,0,0,60,84v88a12,12,0,0,0,12,12H184a12,12,0,0,0,12-12Z" }));
});
h.displayName = "Bold";
export {
  h as Bold
};
