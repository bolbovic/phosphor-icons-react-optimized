var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var h = (a, H, e) => H in a ? f(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, l = (a, H) => {
  for (var e in H || (H = {}))
    Z.call(H, e) && h(a, e, H[e]);
  if (m)
    for (var e of m(H))
      o.call(H, e) && h(a, e, H[e]);
  return a;
};
var p = (a, H) => {
  var e = {};
  for (var t in a)
    Z.call(a, t) && H.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      H.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import A, { forwardRef as s } from "react";
import M from "../../lib/OptiBase.mjs";
const V = s((t, e) => {
  var r = t, { children: a } = r, H = p(r, ["children"]);
  return /* @__PURE__ */ A.createElement(M, l({ ref: e }, H), a, /* @__PURE__ */ A.createElement("path", { d: "M232,224H208V32h8a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16h8V224H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM64,32H192V224H160V184a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v40H64Zm80,192H112V192h32ZM88,64a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H96A8,8,0,0,1,88,64Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H144A8,8,0,0,1,136,64ZM88,104a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H96A8,8,0,0,1,88,104Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H144A8,8,0,0,1,136,104ZM88,144a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H96A8,8,0,0,1,88,144Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H144A8,8,0,0,1,136,144Z" }));
});
V.displayName = "Regular";
export {
  V as Regular,
  V as default
};
