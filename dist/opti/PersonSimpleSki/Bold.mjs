var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && m(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var l in a)
    p.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && d.call(a, l) && (e[l] = a[l]);
  return e;
};
import i, { forwardRef as A } from "react";
import L from "../../lib/OptiBase.mjs";
const Z = A((l, e) => {
  var r = l, { children: a } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(L, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M176,92a32,32,0,1,0-32-32A32,32,0,0,0,176,92Zm0-40a8,8,0,1,1-8,8A8,8,0,0,1,176,52ZM28.48,80.64a12,12,0,0,1,14.88-8.16l67.5,19.68,8.66-8.65a12,12,0,0,1,17,0L165,112h35a12,12,0,0,1,0,24H160a12,12,0,0,1-8.48-3.51l-4.89-4.89-110-32.07A12,12,0,0,1,28.48,80.64ZM238.65,211.57A73.77,73.77,0,0,1,177,221L20.65,175.51a12,12,0,1,1,6.71-23l79.92,23.27,13.81-13.81L84.7,151.53a12,12,0,1,1,6.6-23.07l56,16a12,12,0,0,1,5.19,20L133.56,183.4,183.66,198a49.81,49.81,0,0,0,41.68-6.39,12,12,0,0,1,13.31,20Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
