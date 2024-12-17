var H = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      c.call(t, e) && i(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && c.call(a, r) && (e[r] = a[r]);
  return e;
};
import A, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const l = f((r, e) => {
  var o = r, { children: a } = o, t = s(o, ["children"]);
  return /* @__PURE__ */ A.createElement(h, n({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M207.5,199.3a28,28,0,1,0-31,0A36.24,36.24,0,0,0,156.13,223a4,4,0,0,0,2.84,4.89,3.7,3.7,0,0,0,1,.14,4,4,0,0,0,3.87-3c3.29-12.38,14.85-21,28.13-21s24.84,8.65,28.13,21a4,4,0,1,0,7.73-2.05A36.22,36.22,0,0,0,207.5,199.3ZM172,176a20,20,0,1,1,20,20A20,20,0,0,1,172,176Zm56-88v32a4,4,0,0,1-8,0V88a4,4,0,0,0-4-4H130.67a12.05,12.05,0,0,1-7.2-2.4L95.73,60.8a4,4,0,0,0-2.4-.8H40a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4h80a4,4,0,0,1,0,8H40a12,12,0,0,1-12-12V64A12,12,0,0,1,40,52H93.33a12.05,12.05,0,0,1,7.2,2.4l27.74,20.8a4,4,0,0,0,2.4.8H216A12,12,0,0,1,228,88Z" }));
});
l.displayName = "Thin";
export {
  l as Thin
};
