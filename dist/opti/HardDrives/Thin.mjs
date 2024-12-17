var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? c(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, Z = (a, m) => {
  for (var e in m || (m = {}))
    i.call(m, e) && o(a, e, m[e]);
  if (r)
    for (var e of r(m))
      p.call(m, e) && o(a, e, m[e]);
  return a;
};
var n = (a, m) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import A, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const V = f((t, e) => {
  var H = t, { children: a } = H, m = n(H, ["children"]);
  return /* @__PURE__ */ A.createElement(s, Z({ ref: e }, m), a, /* @__PURE__ */ A.createElement("path", { d: "M208,140H48a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V152A12,12,0,0,0,208,140Zm4,60a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4ZM208,44H48A12,12,0,0,0,36,56v48a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V56A12,12,0,0,0,208,44Zm4,60a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Zm-24,72a8,8,0,1,1-8-8A8,8,0,0,1,188,176Zm0-96a8,8,0,1,1-8-8A8,8,0,0,1,188,80Z" }));
});
V.displayName = "Thin";
export {
  V as Thin
};
