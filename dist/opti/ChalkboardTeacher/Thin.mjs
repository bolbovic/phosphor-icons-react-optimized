var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((m, e) => {
  var H = m, { children: a } = H, t = V(H, ["children"]);
  return /* @__PURE__ */ n.createElement(h, A({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H53.39A4,4,0,0,0,57,209.71a52,52,0,0,1,94,0,4,4,0,0,0,3.61,2.29H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44Zm4,156a4,4,0,0,1-4,4H157.08a60.38,60.38,0,0,0-34.68-29.07,36,36,0,1,0-36.8,0A60.38,60.38,0,0,0,50.92,204H40a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4ZM104,172a28,28,0,1,1,28-28A28,28,0,0,1,104,172Zm92-92v96a4,4,0,0,1-4,4H176a4,4,0,0,1,0-8h12V84H68V96a4,4,0,0,1-8,0V80a4,4,0,0,1,4-4H192A4,4,0,0,1,196,80Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
