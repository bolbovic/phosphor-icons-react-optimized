var f = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, H, e) => H in a ? f(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, Z = (a, H) => {
  for (var e in H || (H = {}))
    i.call(H, e) && o(a, e, H[e]);
  if (t)
    for (var e of t(H))
      p.call(H, e) && o(a, e, H[e]);
  return a;
};
var n = (a, H) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && H.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && t)
    for (var m of t(a))
      H.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((m, e) => {
  var r = m, { children: a } = r, H = n(r, ["children"]);
  return /* @__PURE__ */ c.createElement(d, Z({ ref: e }, H), a, /* @__PURE__ */ c.createElement("path", { d: "M92,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H96A4,4,0,0,1,92,64Zm124,60H96a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Zm0,64H96a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8ZM56,60H40a4,4,0,0,0,0,8H56a4,4,0,0,0,0-8Zm0,64H40a4,4,0,0,0,0,8H56a4,4,0,0,0,0-8Zm0,64H40a4,4,0,0,0,0,8H56a4,4,0,0,0,0-8Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
