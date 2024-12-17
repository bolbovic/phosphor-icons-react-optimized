var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      V.call(t, e) && i(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && V.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const d = h((r, e) => {
  var o = r, { children: a } = o, t = H(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M236,80a36,36,0,0,0-36-36H48a36,36,0,0,0-12,69.94V200a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V113.94A36.07,36.07,0,0,0,236,80ZM44,200V115.77a35.22,35.22,0,0,0,4,.23,4,4,0,0,0,0-8,28,28,0,0,1,0-56h96a28,28,0,0,1,0,56,4,4,0,0,0,0,8,35.22,35.22,0,0,0,4-.23V200a4,4,0,0,1-4,4H48A4,4,0,0,1,44,200Zm156-92a4,4,0,0,0,0,8,35.22,35.22,0,0,0,4-.23V200a4,4,0,0,1-4,4H155.3a11.8,11.8,0,0,0,.7-4V113.94A36,36,0,0,0,166.59,52H200a28,28,0,0,1,0,56Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
