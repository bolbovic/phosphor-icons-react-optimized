var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      A.call(t, e) && i(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && A.call(a, r) && (e[r] = a[r]);
  return e;
};
import V, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const d = h((r, e) => {
  var o = r, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ V.createElement(s, c({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M224,76a52.06,52.06,0,0,1-52-52,4,4,0,0,0-4-4H128a4,4,0,0,0-4,4V156a24,24,0,1,1-34.28-21.69A4,4,0,0,0,92,130.69V88a4,4,0,0,0-4.7-3.94C53.49,90.08,28,121,28,156a72,72,0,0,0,144,0V109.44A99.26,99.26,0,0,0,224,124a4,4,0,0,0,4-4V80A4,4,0,0,0,224,76Zm-4,39.92a91.32,91.32,0,0,1-49.66-17.18A4,4,0,0,0,164,102v54a64,64,0,0,1-128,0c0-29.52,20.32-55.79,48-63v35.31A32,32,0,1,0,132,156V28h32.13A60.11,60.11,0,0,0,220,83.87Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
