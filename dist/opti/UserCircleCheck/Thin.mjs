var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      l.call(t, e) && i(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var o = r, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ c.createElement(Z, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M222,108.05a4,4,0,0,0-3.28,4.61A93.4,93.4,0,0,1,220,128a91.71,91.71,0,0,1-26.83,64.87,75.61,75.61,0,0,0-44.51-34,44,44,0,1,0-41.32,0,75.61,75.61,0,0,0-44.51,34A92,92,0,0,1,128,36a93.4,93.4,0,0,1,15.34,1.27,4,4,0,0,0,1.32-7.89A100,100,0,1,0,228,128a101.78,101.78,0,0,0-1.38-16.66A4,4,0,0,0,222,108.05ZM92,120a36,36,0,1,1,36,36A36,36,0,0,1,92,120ZM68.87,198.42a68,68,0,0,1,118.26,0,91.8,91.8,0,0,1-118.26,0Zm166-155.59-32,32a4,4,0,0,1-5.66,0l-16-16a4,4,0,0,1,5.66-5.66L200,66.34l29.17-29.17a4,4,0,1,1,5.66,5.66Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
