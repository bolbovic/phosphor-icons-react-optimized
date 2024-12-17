var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const d = f((r, e) => {
  var o = r, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ s.createElement(h, l({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M244,168v32a4,4,0,0,1-8,0V177.66l-9.1,9.1C224.52,189.37,188.3,228,128,228c-61.08,0-97.45-39.64-99-41.32A4,4,0,0,1,35,181.32c.35.39,35.63,38.68,93,38.68s92.68-38.29,93-38.68l.14-.15,9.17-9.17H208a4,4,0,0,1,0-8h32A4,4,0,0,1,244,168Zm-80-62.49V84A40,40,0,0,0,88.36,65.82a4,4,0,1,1-7.12-3.64A48,48,0,0,1,172,84v92a4,4,0,0,1-8,0V158.49a48,48,0,1,1,0-53ZM164,132a40,40,0,1,0-40,40A40,40,0,0,0,164,132Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
