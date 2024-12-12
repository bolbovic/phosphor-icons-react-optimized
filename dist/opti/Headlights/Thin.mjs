var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? c(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    H.call(m, e) && o(a, e, m[e]);
  if (r)
    for (var e of r(m))
      i.call(m, e) && o(a, e, m[e]);
  return a;
};
var Z = (a, m) => {
  var e = {};
  for (var t in a)
    H.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((t, e) => {
  var h = t, { children: a } = h, m = Z(h, ["children"]);
  return /* @__PURE__ */ n.createElement(s, p({ ref: e }, m), a, /* @__PURE__ */ n.createElement("path", { d: "M164,80a4,4,0,0,1,4-4h72a4,4,0,0,1,0,8H168A4,4,0,0,1,164,80Zm76,92H168a4,4,0,0,0,0,8h72a4,4,0,0,0,0-8Zm0-64H168a4,4,0,0,0,0,8h72a4,4,0,0,0,0-8Zm0,32H168a4,4,0,0,0,0,8h72a4,4,0,0,0,0-8ZM140,64V192a12,12,0,0,1-12,12H88a76,76,0,0,1-76-76.58C12.31,85.83,46.81,52,88.9,52H128A12,12,0,0,1,140,64Zm-8,0a4,4,0,0,0-4-4H88.9C51.19,60,20.28,90.27,20,127.48A68,68,0,0,0,88,196h40a4,4,0,0,0,4-4Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
