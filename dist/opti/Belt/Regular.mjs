var i = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (a, H, e) => H in a ? i(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, h = (a, H) => {
  for (var e in H || (H = {}))
    p.call(H, e) && o(a, e, H[e]);
  if (t)
    for (var e of t(H))
      c.call(H, e) && o(a, e, H[e]);
  return a;
};
var l = (a, H) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && H.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      H.indexOf(r) < 0 && c.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import v from "../../lib/OptiBase.mjs";
const R = s((r, e) => {
  var m = r, { children: a } = m, H = l(m, ["children"]);
  return /* @__PURE__ */ f.createElement(v, h({ ref: e }, H), a, /* @__PURE__ */ f.createElement("path", { d: "M248,160H192V96h56a8,8,0,0,0,0-16H189.83A16,16,0,0,0,176,72H112a16,16,0,0,0-13.83,8H64a8,8,0,0,0-16,0H8A8,8,0,0,0,8,96H48v64H8a8,8,0,0,0,0,16H48a8,8,0,0,0,16,0H98.17A16,16,0,0,0,112,184h64a16,16,0,0,0,13.83-8H248a8,8,0,0,0,0-16ZM64,96H96v64H64Zm48,72V88h64v32H144a8,8,0,0,0,0,16h32v31.8c0,.07,0,.13,0,.2Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
