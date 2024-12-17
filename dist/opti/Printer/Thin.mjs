var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var V = (a, H, e) => H in a ? Z(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, p = (a, H) => {
  for (var e in H || (H = {}))
    o.call(H, e) && V(a, e, H[e]);
  if (m)
    for (var e of m(H))
      i.call(H, e) && V(a, e, H[e]);
  return a;
};
var c = (a, H) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && H.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      H.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import n, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((t, e) => {
  var r = t, { children: a } = r, H = c(r, ["children"]);
  return /* @__PURE__ */ n.createElement(h, p({ ref: e }, H), a, /* @__PURE__ */ n.createElement("path", { d: "M214.67,76H196V40a4,4,0,0,0-4-4H64a4,4,0,0,0-4,4V76H41.33C29.57,76,20,85,20,96v80a4,4,0,0,0,4,4H60v36a4,4,0,0,0,4,4H192a4,4,0,0,0,4-4V180h36a4,4,0,0,0,4-4V96C236,85,226.43,76,214.67,76ZM68,44H188V76H68ZM188,212H68V156H188Zm40-40H196V152a4,4,0,0,0-4-4H64a4,4,0,0,0-4,4v20H28V96c0-6.62,6-12,13.33-12H214.67C222,84,228,89.38,228,96Zm-32-56a8,8,0,1,1-8-8A8,8,0,0,1,196,116Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
