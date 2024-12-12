var f = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var V = (a, H, e) => H in a ? f(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, p = (a, H) => {
  for (var e in H || (H = {}))
    o.call(H, e) && V(a, e, H[e]);
  if (t)
    for (var e of t(H))
      c.call(H, e) && V(a, e, H[e]);
  return a;
};
var l = (a, H) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && H.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      H.indexOf(r) < 0 && c.call(a, r) && (e[r] = a[r]);
  return e;
};
import Z, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const R = i((r, e) => {
  var m = r, { children: a } = m, H = l(m, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, p({ ref: e }, H), a, /* @__PURE__ */ Z.createElement("path", { d: "M214.67,72H200V40a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8V72H41.33C27.36,72,16,82.77,16,96v80a8,8,0,0,0,8,8H56v32a8,8,0,0,0,8,8H192a8,8,0,0,0,8-8V184h32a8,8,0,0,0,8-8V96C240,82.77,228.64,72,214.67,72ZM72,48H184V72H72ZM184,208H72V160H184Zm40-40H200V152a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8v16H32V96c0-4.41,4.19-8,9.33-8H214.67c5.14,0,9.33,3.59,9.33,8Zm-24-52a12,12,0,1,1-12-12A12,12,0,0,1,200,116Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
