var n = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && h(a, e, t[e]);
  if (H)
    for (var e of H(t))
      V.call(t, e) && h(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && H)
    for (var r of H(a))
      t.indexOf(r) < 0 && V.call(a, r) && (e[r] = a[r]);
  return e;
};
import l, { forwardRef as A } from "react";
import c from "../../lib/OptiBase.mjs";
const f = A((r, e) => {
  var m = r, { children: a } = m, t = p(m, ["children"]);
  return /* @__PURE__ */ l.createElement(c, i({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M224,68H153.33l-28.8-21.6a12.05,12.05,0,0,0-7.2-2.4H72A12,12,0,0,0,60,56V76H40A12,12,0,0,0,28,88V200a12,12,0,0,0,12,12H192.89A11.12,11.12,0,0,0,204,200.89V180h20.89A11.12,11.12,0,0,0,236,168.89V80A12,12,0,0,0,224,68ZM196,200.89a3.12,3.12,0,0,1-3.11,3.11H40a4,4,0,0,1-4-4V88a4,4,0,0,1,4-4H85.33a4,4,0,0,1,2.4.8l29.87,22.4a4,4,0,0,0,2.4.8h72a4,4,0,0,1,4,4Zm32-32a3.12,3.12,0,0,1-3.11,3.11H204V112a12,12,0,0,0-12-12H121.33L92.53,78.4a12.05,12.05,0,0,0-7.2-2.4H68V56a4,4,0,0,1,4-4h45.33a4,4,0,0,1,2.4.8L149.6,75.2a4,4,0,0,0,2.4.8h72a4,4,0,0,1,4,4Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
