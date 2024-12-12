var p = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var V = (a, e, m) => e in a ? p(a, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : a[e] = m, o = (a, e) => {
  for (var m in e || (e = {}))
    Z.call(e, m) && V(a, m, e[m]);
  if (t)
    for (var m of t(e))
      H.call(e, m) && V(a, m, e[m]);
  return a;
};
var v = (a, e) => {
  var m = {};
  for (var h in a)
    Z.call(a, h) && e.indexOf(h) < 0 && (m[h] = a[h]);
  if (a != null && t)
    for (var h of t(a))
      e.indexOf(h) < 0 && H.call(a, h) && (m[h] = a[h]);
  return m;
};
import i, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const c = n((h, m) => {
  var r = h, { children: a } = r, e = v(r, ["children"]);
  return /* @__PURE__ */ i.createElement(A, o({ ref: m }, e), a, /* @__PURE__ */ i.createElement("path", { d: "M104,44H56A12,12,0,0,0,44,56v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,104,44Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm-4,36H56a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V152A12,12,0,0,0,104,140Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4ZM200,44H152a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,200,44Zm4,60a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm-64,72V144a4,4,0,0,1,8,0v32a4,4,0,0,1-8,0Zm72-16a4,4,0,0,1-4,4H180v44a4,4,0,0,1-4,4H144a4,4,0,0,1,0-8h28V144a4,4,0,0,1,8,0v12h28A4,4,0,0,1,212,160Zm0,32v16a4,4,0,0,1-8,0V192a4,4,0,0,1,8,0Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
