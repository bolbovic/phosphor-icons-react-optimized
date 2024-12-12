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
var n = (a, t) => {
  var e = {};
  for (var r in a)
    h.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import H, { forwardRef as f } from "react";
import l from "../../lib/OptiBase.mjs";
const s = f((r, e) => {
  var V = r, { children: a } = V, t = n(V, ["children"]);
  return /* @__PURE__ */ H.createElement(l, p({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M196,204.5V232a4,4,0,0,1-8,0V204.5a67.62,67.62,0,0,0-37.59-60.82L102,119.48a75.6,75.6,0,0,1-42-68V24a4,4,0,0,1,8,0V51.5a67.62,67.62,0,0,0,37.59,60.82l48.4,24.2A75.6,75.6,0,0,1,196,204.5Zm-36-.5H68a67.74,67.74,0,0,1,4.59-24h75.51a4,4,0,0,0,0-8H76.3a67.91,67.91,0,0,1,19.45-22.31A4,4,0,0,0,91,143.24,76.26,76.26,0,0,0,60,204.5V232a4,4,0,0,0,8,0V212h92a4,4,0,0,0,0-8ZM192,20a4,4,0,0,0-4,4V44H96a4,4,0,0,0,0,8h92a67.74,67.74,0,0,1-4.59,24H107.89a4,4,0,1,0,0,8H179.7a67.91,67.91,0,0,1-19.45,22.31,4,4,0,0,0,4.74,6.45A76.26,76.26,0,0,0,196,51.5V24A4,4,0,0,0,192,20Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
