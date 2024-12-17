var n = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var H = (a, m, e) => m in a ? n(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, o = (a, m) => {
  for (var e in m || (m = {}))
    V.call(m, e) && H(a, e, m[e]);
  if (t)
    for (var e of t(m))
      Z.call(m, e) && H(a, e, m[e]);
  return a;
};
var i = (a, m) => {
  var e = {};
  for (var h in a)
    V.call(a, h) && m.indexOf(h) < 0 && (e[h] = a[h]);
  if (a != null && t)
    for (var h of t(a))
      m.indexOf(h) < 0 && Z.call(a, h) && (e[h] = a[h]);
  return e;
};
import p, { forwardRef as A } from "react";
import c from "../../lib/OptiBase.mjs";
const f = A((h, e) => {
  var r = h, { children: a } = r, m = i(r, ["children"]);
  return /* @__PURE__ */ p.createElement(c, o({ ref: e }, m), a, /* @__PURE__ */ p.createElement("path", { d: "M104,44H56A12,12,0,0,0,44,56v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,104,44Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm92-60H152a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,200,44Zm4,60a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4ZM104,140H56a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V152A12,12,0,0,0,104,140Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm92-60H152a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V152A12,12,0,0,0,200,140Zm4,60a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
