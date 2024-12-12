var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    Z.call(m, e) && o(a, e, m[e]);
  if (l)
    for (var e of l(m))
      i.call(m, e) && o(a, e, m[e]);
  return a;
};
var n = (a, m) => {
  var e = {};
  for (var t in a)
    Z.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      m.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const d = s((t, e) => {
  var r = t, { children: a } = r, m = n(r, ["children"]);
  return /* @__PURE__ */ c.createElement(A, p({ ref: e }, m), a, /* @__PURE__ */ c.createElement("path", { d: "M96,124a36,36,0,1,0,36,36A36,36,0,0,0,96,124Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,96,188Zm122.83-62.83a4,4,0,0,1,0,5.66l-48,48a4,4,0,0,1-5.66-5.66l48-48A4,4,0,0,1,218.83,125.17Zm-32-18.34-24,24a4,4,0,0,1-5.66-5.66l24-24a4,4,0,1,1,5.66,5.66Zm40-40-16,16a4,4,0,0,1-5.66-5.66l16-16a4,4,0,1,1,5.66,5.66ZM125.17,93.17l72-72a4,4,0,1,1,5.66,5.66l-72,72a4,4,0,1,1-5.66-5.66Zm18.91,109.26a4,4,0,0,1,0,5.65,68,68,0,1,1-96.16-96.16l82.74-82.75a4,4,0,1,1,5.66,5.66L53.57,117.57a60,60,0,0,0,84.86,84.86A4,4,0,0,1,144.08,202.43Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
