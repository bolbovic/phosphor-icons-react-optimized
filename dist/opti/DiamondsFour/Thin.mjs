var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var Z = (a, e, l) => e in a ? c(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, p = (a, e) => {
  for (var l in e || (e = {}))
    o.call(e, l) && Z(a, l, e[l]);
  if (m)
    for (var l of m(e))
      i.call(e, l) && Z(a, l, e[l]);
  return a;
};
var M = (a, e) => {
  var l = {};
  for (var t in a)
    o.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && i.call(a, t) && (l[t] = a[t]);
  return l;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((t, l) => {
  var r = t, { children: a } = r, e = M(r, ["children"]);
  return /* @__PURE__ */ n.createElement(s, p({ ref: l }, e), a, /* @__PURE__ */ n.createElement("path", { d: "M125.17,106.83a4,4,0,0,0,5.66,0l40-40a4,4,0,0,0,0-5.66l-40-40a4,4,0,0,0-5.66,0l-40,40a4,4,0,0,0,0,5.66ZM128,29.66,162.34,64,128,98.34,93.66,64Zm2.83,119.51a4,4,0,0,0-5.66,0l-40,40a4,4,0,0,0,0,5.66l40,40a4,4,0,0,0,5.66,0l40-40a4,4,0,0,0,0-5.66ZM128,226.34,93.66,192,128,157.66,162.34,192ZM234.83,125.17l-40-40a4,4,0,0,0-5.66,0l-40,40a4,4,0,0,0,0,5.66l40,40a4,4,0,0,0,5.66,0l40-40A4,4,0,0,0,234.83,125.17ZM192,162.34,157.66,128,192,93.66,226.34,128Zm-85.17-37.17-40-40a4,4,0,0,0-5.66,0l-40,40a4,4,0,0,0,0,5.66l40,40a4,4,0,0,0,5.66,0l40-40A4,4,0,0,0,106.83,125.17ZM64,162.34,29.66,128,64,93.66,98.34,128Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
