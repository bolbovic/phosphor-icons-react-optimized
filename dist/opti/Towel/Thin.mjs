var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && V(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && V(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var o = r, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ c.createElement(A, H({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M200,28H72A20,20,0,0,0,52,48V216a12,12,0,0,0,12,12H176a12,12,0,0,0,12-12V48a12,12,0,0,1,24,0V152a4,4,0,0,0,8,0V48A20,20,0,0,0,200,28ZM72,36H184a19.86,19.86,0,0,0-4,12V188H60V48A12,12,0,0,1,72,36ZM176,220H64a4,4,0,0,1-4-4V196H180v20A4,4,0,0,1,176,220Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
