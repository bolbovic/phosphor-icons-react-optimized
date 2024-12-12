var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      n.call(t, e) && i(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && n.call(a, r) && (e[r] = a[r]);
  return e;
};
import h, { forwardRef as d } from "react";
import l from "../../lib/OptiBase.mjs";
const A = d((r, e) => {
  var o = r, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ h.createElement(l, c({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M216,36H168a4,4,0,0,0,0,8h38.35L154.82,95.52a76,76,0,1,0,5.66,5.66L212,49.66V88a4,4,0,0,0,8,0V40A4,4,0,0,0,216,36ZM152.07,200.11a68,68,0,1,1,0-96.18A68.08,68.08,0,0,1,152.07,200.11Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
