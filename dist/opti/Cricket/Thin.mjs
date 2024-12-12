var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    L.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    L.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const A = f((m, e) => {
  var l = m, { children: a } = l, t = n(l, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M240.49,84.2,187.8,31.51a12,12,0,0,0-17,0L63.52,138.83a12,12,0,0,0,0,17L87,179.31,37.17,229.17a4,4,0,0,0,5.66,5.66L92.69,185l23.51,23.51a12,12,0,0,0,17,0L240.49,101.17A12,12,0,0,0,240.49,84.2Zm-113,118.63a4,4,0,0,1-5.66,0L98.34,179.31l32.49-32.48a4,4,0,0,0-5.66-5.66L92.69,173.66,69.17,150.14a4,4,0,0,1,0-5.66L105.66,108H164v58.34ZM234.83,95.51,172,158.34V104a4,4,0,0,0-4-4H113.66l62.83-62.83a4,4,0,0,1,5.66,0l52.68,52.68A4,4,0,0,1,234.83,95.51ZM60,84A24,24,0,1,0,36,60,24,24,0,0,0,60,84Zm0-40A16,16,0,1,1,44,60,16,16,0,0,1,60,44Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
