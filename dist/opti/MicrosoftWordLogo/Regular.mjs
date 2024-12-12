var Z = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && m(a, e, t[e]);
  return a;
};
var v = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import V, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const d = c((r, e) => {
  var H = r, { children: a } = H, t = v(H, ["children"]);
  return /* @__PURE__ */ V.createElement(f, s({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M200,24H72A16,16,0,0,0,56,40V64H40A16,16,0,0,0,24,80v96a16,16,0,0,0,16,16H56v24a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24Zm-40,80h40v48H160ZM72,40H200V88H160V80a16,16,0,0,0-16-16H72ZM40,80H144v79.83c0,.06,0,.11,0,.17s0,.11,0,.17V176H40ZM72,216V192h72a16,16,0,0,0,16-16v-8h40v48Zm-3.76-62.06-12-48a8,8,0,1,1,15.52-3.88l6.76,27,6.32-12.66a8,8,0,0,1,14.32,0l6.32,12.66,6.76-27a8,8,0,0,1,15.52,3.88l-12,48a8,8,0,0,1-6.89,6,8.46,8.46,0,0,1-.87.05,8,8,0,0,1-7.16-4.42L92,137.89l-8.84,17.69a8,8,0,0,1-14.92-1.64Z" }));
});
d.displayName = "Regular";
export {
  d as Regular,
  d as default
};
