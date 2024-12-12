var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var o = (a, H, e) => H in a ? i(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, l = (a, H) => {
  for (var e in H || (H = {}))
    p.call(H, e) && o(a, e, H[e]);
  if (r)
    for (var e of r(H))
      Z.call(H, e) && o(a, e, H[e]);
  return a;
};
var c = (a, H) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && H.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      H.indexOf(m) < 0 && Z.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import R from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var t = m, { children: a } = t, H = c(t, ["children"]);
  return /* @__PURE__ */ f.createElement(R, l({ ref: e }, H), a, /* @__PURE__ */ f.createElement("path", { d: "M88,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H96A8,8,0,0,1,88,64Zm128,56H96a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,64H96a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM56,56H40a8,8,0,0,0,0,16H56a8,8,0,0,0,0-16Zm0,64H40a8,8,0,0,0,0,16H56a8,8,0,0,0,0-16Zm0,64H40a8,8,0,0,0,0,16H56a8,8,0,0,0,0-16Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
