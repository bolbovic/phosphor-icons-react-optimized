var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && h(a, e, t[e]);
  if (m)
    for (var e of m(t))
      H.call(t, e) && h(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && H.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import v from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var V = r, { children: a } = V, t = p(V, ["children"]);
  return /* @__PURE__ */ c.createElement(v, i({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M216,154H166V102h50a6,6,0,0,0,0-12H166V40a6,6,0,0,0-12,0V90H102V40a6,6,0,0,0-12,0V90H40a6,6,0,0,0,0,12H90v52H40a6,6,0,0,0,0,12H90v50a6,6,0,0,0,12,0V166h52v50a6,6,0,0,0,12,0V166h50a6,6,0,0,0,0-12Zm-114,0V102h52v52Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
