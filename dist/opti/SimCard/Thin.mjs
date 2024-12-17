var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && H(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && H(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var r in a)
    h.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as f } from "react";
import l from "../../lib/OptiBase.mjs";
const s = f((r, e) => {
  var o = r, { children: a } = o, t = V(o, ["children"]);
  return /* @__PURE__ */ n.createElement(l, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V88A4,4,0,0,0,210.83,85.17ZM204,216a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h94.35L204,89.66ZM76,120v72a4,4,0,0,0,4,4h96a4,4,0,0,0,4-4V120a4,4,0,0,0-4-4H80A4,4,0,0,0,76,120Zm8,4h88v64H148V152a4,4,0,0,0-8,0v36H116V152a4,4,0,0,0-8,0v36H84Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
