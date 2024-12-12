var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      H.call(t, e) && i(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && H.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var o = r, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ c.createElement(L, l({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M87.25,40a4,4,0,0,1,4-4H192a4,4,0,0,1,0,8H180.77l19.58,111a4,4,0,0,1-3.24,4.63,3.33,3.33,0,0,1-.7.07,4,4,0,0,1-3.93-3.31L172.64,44H91.25A4,4,0,0,1,87.25,40ZM210.69,219a4,4,0,0,1-5.65-.27L169.87,180H132v60a4,4,0,0,1-8,0V180H40a4,4,0,0,1,0-8H52.64L70.52,70.72,45,42.69A4,4,0,0,1,51,37.31l160,176A4,4,0,0,1,210.69,219Zm-48.1-47L77.32,78.2,60.77,172Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
