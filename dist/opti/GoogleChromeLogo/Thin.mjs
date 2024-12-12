var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && A(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && A(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    c.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((m, e) => {
  var o = m, { children: a } = o, t = l(o, ["children"]);
  return /* @__PURE__ */ n.createElement(h, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,8a92.08,92.08,0,0,1,80.78,48H128a44.05,44.05,0,0,0-43.82,40.11L54.51,72.72A91.9,91.9,0,0,1,128,36Zm0,128a36,36,0,1,1,36-36A36,36,0,0,1,128,164ZM36,128A91.52,91.52,0,0,1,49.51,80.05L89.9,150c0,.09.11.17.17.26a43.93,43.93,0,0,0,56.47,17.63l-29.7,51.43A92.13,92.13,0,0,1,36,128Zm92,92c-.77,0-1.53,0-2.29,0l40.39-70a1.21,1.21,0,0,0,.09-.2A43.89,43.89,0,0,0,153.25,92h59.41A92,92,0,0,1,128,220Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
