var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import A, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((r, e) => {
  var o = r, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ A.createElement(s, H({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M233,72.06A12.11,12.11,0,0,0,223.92,68H172V64a44,44,0,0,0-88,0v4H32.08A12.11,12.11,0,0,0,23,72.06a12,12,0,0,0-2.94,9.35l14.26,120a12,12,0,0,0,12,10.59H209.67a12,12,0,0,0,12-10.59l14.26-120A12,12,0,0,0,233,72.06ZM92,64a36,36,0,0,1,72,0v4H92ZM228,80.46l-14.25,120a4,4,0,0,1-4.05,3.54H46.33a4,4,0,0,1-4-3.54L28,80.46a3.9,3.9,0,0,1,1-3.09A4.08,4.08,0,0,1,32.08,76H223.92A4.08,4.08,0,0,1,227,77.37,3.9,3.9,0,0,1,228,80.46Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
