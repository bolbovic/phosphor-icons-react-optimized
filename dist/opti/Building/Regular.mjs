var M = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var h = (a, H, e) => H in a ? M(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, p = (a, H) => {
  for (var e in H || (H = {}))
    Z.call(H, e) && h(a, e, H[e]);
  if (r)
    for (var e of r(H))
      o.call(H, e) && h(a, e, H[e]);
  return a;
};
var A = (a, H) => {
  var e = {};
  for (var m in a)
    Z.call(a, m) && H.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      H.indexOf(m) < 0 && o.call(a, m) && (e[m] = a[m]);
  return e;
};
import l, { forwardRef as V } from "react";
import c from "../../lib/OptiBase.mjs";
const f = V((m, e) => {
  var t = m, { children: a } = t, H = A(t, ["children"]);
  return /* @__PURE__ */ l.createElement(c, p({ ref: e }, H), a, /* @__PURE__ */ l.createElement("path", { d: "M232,224H208V32h8a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16h8V224H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM64,32H192V224H160V184a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v40H64Zm80,192H112V192h32ZM88,64a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H96A8,8,0,0,1,88,64Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H144A8,8,0,0,1,136,64ZM88,104a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H96A8,8,0,0,1,88,104Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H144A8,8,0,0,1,136,104ZM88,144a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H96A8,8,0,0,1,88,144Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H144A8,8,0,0,1,136,144Z" }));
});
f.displayName = "Regular";
export {
  f as Regular
};
