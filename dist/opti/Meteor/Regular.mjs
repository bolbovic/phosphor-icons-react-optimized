var i = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? i(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, A = (a, l) => {
  for (var e in l || (l = {}))
    Z.call(l, e) && o(a, e, l[e]);
  if (t)
    for (var e of t(l))
      p.call(l, e) && o(a, e, l[e]);
  return a;
};
var c = (a, l) => {
  var e = {};
  for (var r in a)
    Z.call(a, r) && l.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      l.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import M from "../../lib/OptiBase.mjs";
const R = s((r, e) => {
  var m = r, { children: a } = m, l = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(M, A({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M96,120a40,40,0,1,0,40,40A40,40,0,0,0,96,120Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,96,184Zm125.66-61.66a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32-11.32l48-48A8,8,0,0,1,221.66,122.34ZM160,136a8,8,0,0,1-5.66-13.66l24-24a8,8,0,0,1,11.32,11.32l-24,24A8,8,0,0,1,160,136Zm69.66-66.34-16,16a8,8,0,0,1-11.32-11.32l16-16a8,8,0,0,1,11.32,11.32ZM122.34,90.34l72-72a8,8,0,1,1,11.32,11.32l-72,72a8,8,0,0,1-11.32-11.32ZM146.91,199.6a8,8,0,0,1,0,11.31A72,72,0,1,1,45.09,109.09l82.74-82.75a8,8,0,1,1,11.32,11.32L56.4,120.4a56,56,0,0,0,79.2,79.2A8,8,0,0,1,146.91,199.6Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
