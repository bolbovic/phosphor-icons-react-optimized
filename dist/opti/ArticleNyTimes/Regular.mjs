var i = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, H, e) => H in a ? i(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, Z = (a, H) => {
  for (var e in H || (H = {}))
    p.call(H, e) && o(a, e, H[e]);
  if (t)
    for (var e of t(H))
      l.call(H, e) && o(a, e, H[e]);
  return a;
};
var c = (a, H) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && H.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      H.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import R from "../../lib/OptiBase.mjs";
const V = s((r, e) => {
  var m = r, { children: a } = m, H = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(R, Z({ ref: e }, H), a, /* @__PURE__ */ f.createElement("path", { d: "M128,96H232a8,8,0,0,1,0,16H128a8,8,0,0,1,0-16Zm104,32H128a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm0,32H80a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm0,32H80a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM96,144a8,8,0,0,0,0-16H88V64h32v8a8,8,0,0,0,16,0V56a8,8,0,0,0-8-8H32a8,8,0,0,0-8,8V72a8,8,0,0,0,16,0V64H72v64H64a8,8,0,0,0,0,16Z" }));
});
V.displayName = "Regular";
export {
  V as Regular
};
