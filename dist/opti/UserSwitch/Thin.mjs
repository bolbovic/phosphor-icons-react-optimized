var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var l = m, { children: a } = l, t = A(l, ["children"]);
  return /* @__PURE__ */ c.createElement(Z, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M250.83,130.83l-24,24a4,4,0,0,1-5.66,0l-24-24a4,4,0,1,1,5.66-5.66L220,142.34V128A92,92,0,0,0,53.25,74.34a4,4,0,0,1-6.5-4.68A100,100,0,0,1,228,128v14.34l17.17-17.17a4,4,0,1,1,5.66,5.66Zm-41.6,55.51A100,100,0,0,1,28,128V113.66L10.83,130.83a4,4,0,0,1-5.66-5.66l24-24a4,4,0,0,1,5.66,0l24,24a4,4,0,0,1-5.66,5.66L36,113.66V128a91.69,91.69,0,0,0,26.83,64.87,75.61,75.61,0,0,1,44.51-34,44,44,0,1,1,41.32,0,75.57,75.57,0,0,1,44.52,34.07,91.34,91.34,0,0,0,9.56-11.24,4,4,0,1,1,6.49,4.68ZM128,156a36,36,0,1,0-36-36A36,36,0,0,0,128,156Zm0,64a92.23,92.23,0,0,0,59.14-21.57,68,68,0,0,0-118.27,0A91.56,91.56,0,0,0,128,220Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
