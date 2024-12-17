var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
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
import H, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const A = f((r, e) => {
  var o = r, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ H.createElement(s, L({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M60.9,194l-9.46,16A4,4,0,1,1,44.56,206L54,190A4,4,0,0,1,60.9,194ZM232,156H181.92L150,102a4,4,0,1,0-6.89,4.07L204.56,210a4,4,0,1,0,6.88-4.07l-24.79-42H232a4,4,0,0,0,0-8Zm-89.53,0H83.37L155.44,34A4,4,0,1,0,148.56,30L128,64.75,107.44,30A4,4,0,1,0,100.56,34l22.79,38.58L74.08,156H24a4,4,0,0,0,0,8H142.47a4,4,0,1,0,0-8Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
