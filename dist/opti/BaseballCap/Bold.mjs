var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var A = (a, m, e) => m in a ? c(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, d = (a, m) => {
  for (var e in m || (m = {}))
    p.call(m, e) && A(a, e, m[e]);
  if (o)
    for (var e of o(m))
      s.call(m, e) && A(a, e, m[e]);
  return a;
};
var l = (a, m) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      m.indexOf(t) < 0 && s.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const V = f((t, e) => {
  var r = t, { children: a } = r, m = l(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(i, d({ ref: e }, m), a, /* @__PURE__ */ Z.createElement("path", { d: "M128,20A108.12,108.12,0,0,0,20,128v56a27.86,27.86,0,0,0,15.26,24.93,28,28,0,0,0,29.28-2.34C76.2,198.11,96.68,188,128,188s51.8,10.1,63.46,18.58A28,28,0,0,0,236,184V128A108.12,108.12,0,0,0,128,20Zm84,108v1.87a170,170,0,0,0-33.29-14.3,170.81,170.81,0,0,0-23.45-67A84.14,84.14,0,0,1,212,128Zm-58.46-18.12a174.42,174.42,0,0,0-51.08,0A150,150,0,0,1,128,50.94,150.07,150.07,0,0,1,153.54,109.88Zm-52.8-61.31a170.81,170.81,0,0,0-23.45,67A170,170,0,0,0,44,129.87V128A84.14,84.14,0,0,1,100.74,48.57Zm109.11,139a4,4,0,0,1-4.28-.36C191,176.61,165.77,164,128,164s-63,12.61-77.57,23.18a4,4,0,0,1-4.28.36A3.76,3.76,0,0,1,44,184V158.14a148,148,0,0,1,168,0V184A3.76,3.76,0,0,1,209.85,187.54Z" }));
});
V.displayName = "Bold";
export {
  V as Bold
};
