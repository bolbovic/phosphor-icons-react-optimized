var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var V in a)
    i.call(a, V) && t.indexOf(V) < 0 && (e[V] = a[V]);
  if (a != null && m)
    for (var V of m(a))
      t.indexOf(V) < 0 && p.call(a, V) && (e[V] = a[V]);
  return e;
};
import h, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const Z = s((V, e) => {
  var r = V, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ h.createElement(A, H({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M208,34H182V24a6,6,0,0,0-12,0V34H86V24a6,6,0,0,0-12,0V34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Zm2,174a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H74V56a6,6,0,0,0,12,0V46h84V56a6,6,0,0,0,12,0V46h26a2,2,0,0,1,2,2ZM152,90a30,30,0,0,0-24,12,30,30,0,0,0-54,18c0,35.3,49.22,60.32,51.32,61.37a6,6,0,0,0,5.36,0C132.78,180.32,182,155.3,182,120A30,30,0,0,0,152,90Zm-3.67,65.25A138,138,0,0,1,128,169.19a138.82,138.82,0,0,1-20.33-13.94C97.78,147,86,134.15,86,120a18,18,0,0,1,36,0,6,6,0,0,0,12,0,18,18,0,0,1,36,0C170,134.15,158.22,147,148.33,155.25Z" }));
});
Z.displayName = "Light";
export {
  Z as Light
};
