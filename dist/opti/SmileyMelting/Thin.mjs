var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && c(a, e, t[e]);
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
import A, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var o = r, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ A.createElement(Z, h({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M172,140a8,8,0,1,1-8-8A8,8,0,0,1,172,140ZM124,92a8,8,0,1,0-8,8A8,8,0,0,0,124,92Zm74.21-35.2A100,100,0,0,0,53.46,194.67a4,4,0,1,0,6-5.34,92,92,0,1,1,137.16,0,4,4,0,0,0,6,5.34A100,100,0,0,0,198.21,56.8ZM152,172H136c-12,0-25.28-4.92-35.42-13.16C89.89,150.15,84,139.19,84,128a43.89,43.89,0,0,1,.61-7.34,4,4,0,0,0-7.89-1.32A52.17,52.17,0,0,0,76,128c0,29.29,32.25,52,60,52h16a12,12,0,0,1,0,24H96a20,20,0,0,0,0,40,4,4,0,0,0,0-8,12,12,0,0,1,0-24h56a20,20,0,0,0,0-40Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
