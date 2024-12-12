var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    H.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const d = h((r, e) => {
  var m = r, { children: a } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M204,40a4,4,0,0,1-4,4H170.71a28,28,0,0,0-27.55,23l-10.37,57H184a4,4,0,0,1,0,8H131.34l-10.63,58.44A36,36,0,0,1,85.29,220H56a4,4,0,0,1,0-8H85.29a28,28,0,0,0,27.55-23l10.37-57H72a4,4,0,0,1,0-8h52.66l10.63-58.44A36,36,0,0,1,170.71,36H200A4,4,0,0,1,204,40Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
