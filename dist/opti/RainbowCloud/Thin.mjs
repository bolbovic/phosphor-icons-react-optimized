var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import A, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const d = f((m, e) => {
  var o = m, { children: a } = o, t = s(o, ["children"]);
  return /* @__PURE__ */ A.createElement(h, n({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M200,116a44.16,44.16,0,0,0-42,30.88,27.22,27.22,0,0,0-6-.66c-15.44,0-28,13-28,28.89S136.56,204,152,204h48a44,44,0,0,0,0-88Zm0,80H152c-11,0-20-9.37-20-20.89s9-20.89,20-20.89a19.13,19.13,0,0,1,7.29,1.43,4,4,0,0,0,5.44-2.9A36,36,0,1,1,200,196ZM20,160v16a4,4,0,0,1-8,0V160A100,100,0,0,1,181.71,88.31,4,4,0,0,1,176.14,94,92,92,0,0,0,20,160Zm92-60a60.07,60.07,0,0,0-60,60v16a4,4,0,0,1-8,0V160a68,68,0,0,1,108.24-54.82,4,4,0,1,1-4.74,6.44A59.57,59.57,0,0,0,112,100Zm11.31,29.79a4,4,0,0,1-4.81,3A28,28,0,0,0,84,160v16a4,4,0,0,1-8,0V160a36,36,0,0,1,36-36,36.58,36.58,0,0,1,8.35,1A4,4,0,0,1,123.31,129.79Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
