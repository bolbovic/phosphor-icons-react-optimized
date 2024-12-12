var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(A, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M235.38,53.86A4,4,0,0,0,232,52H40a4,4,0,0,0-2.83,6.83L82.34,104,37.17,149.17A4,4,0,0,0,40,156H180l-31.56,66.28a4,4,0,0,0,1.89,5.33A3.92,3.92,0,0,0,152,228a4,4,0,0,0,3.61-2.28l80-168A4,4,0,0,0,235.38,53.86ZM183.76,148H49.66l41.17-41.17a4,4,0,0,0,0-5.66L49.66,60h176Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
