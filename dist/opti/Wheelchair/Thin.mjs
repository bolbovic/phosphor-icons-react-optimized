var A = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (c)
    for (var e of c(t))
      l.call(t, e) && o(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && c)
    for (var r of c(a))
      t.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const V = f((r, e) => {
  var m = r, { children: a } = m, t = h(m, ["children"]);
  return /* @__PURE__ */ n.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M251.79,190.73a4,4,0,0,0-5.06-2.52l-20.7,6.9-30.45-60.9A4,4,0,0,0,192,132H108V100.15c1.32-.09,2.65-.15,4-.15h56a4,4,0,0,0,0-8H112c-1.34,0-2.68,0-4,.13V75.71a28,28,0,1,0-8,0V93.08A68,68,0,0,0,112,228c31.72,0,60.27-21.45,67.87-51a4,4,0,0,0-7.74-2c-6.71,26.08-32,45-60.13,45a60,60,0,0,1-12-118.79V136a4,4,0,0,0,4,4h85.53l30.89,61.79A4,4,0,0,0,224,204a3.92,3.92,0,0,0,1.26-.21l24-8A4,4,0,0,0,251.79,190.73ZM84,48a20,20,0,1,1,20,20A20,20,0,0,1,84,48Z" }));
});
V.displayName = "Thin";
export {
  V as Thin
};
