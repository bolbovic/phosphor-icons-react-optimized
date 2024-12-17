var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var l in a)
    A.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && i.call(a, l) && (e[l] = a[l]);
  return e;
};
import Z, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const M = f((l, e) => {
  var m = l, { children: a } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M226.25,66.54,219,62.33a19.78,19.78,0,0,0,0-12.66l7.29-4.21a4,4,0,0,0-4-6.92l-7.31,4.21A20,20,0,0,0,204,36.4V28a4,4,0,0,0-8,0v8.4a20,20,0,0,0-10.94,6.35l-7.31-4.21a4,4,0,1,0-4,6.92L181,49.67a19.78,19.78,0,0,0,0,12.66l-7.29,4.21a4,4,0,0,0,2,7.46,3.92,3.92,0,0,0,2-.54l7.31-4.21A20,20,0,0,0,196,75.6V84a4,4,0,0,0,8,0V75.6a20,20,0,0,0,10.94-6.35l7.31,4.21a3.92,3.92,0,0,0,2,.54,4,4,0,0,0,2-7.46ZM200,68a12,12,0,1,1,12-12A12,12,0,0,1,200,68Zm22,40.06a4,4,0,0,0-3.28,4.6A93.58,93.58,0,0,1,220,128a91.69,91.69,0,0,1-26.83,64.87,75.61,75.61,0,0,0-44.51-34,44,44,0,1,0-41.32,0,75.61,75.61,0,0,0-44.51,34A92,92,0,0,1,128,36a93.4,93.4,0,0,1,15.34,1.27,4,4,0,0,0,1.32-7.89,99.89,99.89,0,1,0,82,82A4,4,0,0,0,222,108.06ZM92,120a36,36,0,1,1,36,36A36,36,0,0,1,92,120ZM68.87,198.42a68,68,0,0,1,118.27,0,91.81,91.81,0,0,1-118.27,0Z" }));
});
M.displayName = "Thin";
export {
  M as Thin
};
