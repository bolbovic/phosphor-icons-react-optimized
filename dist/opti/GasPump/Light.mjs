var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var r in a)
    h.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import A, { forwardRef as f } from "react";
import l from "../../lib/OptiBase.mjs";
const s = f((r, e) => {
  var V = r, { children: a } = V, t = H(V, ["children"]);
  return /* @__PURE__ */ A.createElement(l, p({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M239.56,71.07,220.24,51.76a6,6,0,0,0-8.48,8.48l19.31,19.32A9.93,9.93,0,0,1,234,86.63V168a10,10,0,0,1-20,0V128a22,22,0,0,0-22-22H174V56a22,22,0,0,0-22-22H72A22,22,0,0,0,50,56V210H32a6,6,0,0,0,0,12H192a6,6,0,0,0,0-12H174V118h18a10,10,0,0,1,10,10v40a22,22,0,0,0,44,0V86.63A21.88,21.88,0,0,0,239.56,71.07ZM62,210V56A10,10,0,0,1,72,46h80a10,10,0,0,1,10,10V210Zm80-98a6,6,0,0,1-6,6H88a6,6,0,0,1,0-12h48A6,6,0,0,1,142,112Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
