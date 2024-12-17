var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, H, e) => H in a ? f(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, p = (a, H) => {
  for (var e in H || (H = {}))
    o.call(H, e) && m(a, e, H[e]);
  if (r)
    for (var e of r(H))
      i.call(H, e) && m(a, e, H[e]);
  return a;
};
var n = (a, H) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && H.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      H.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const d = h((t, e) => {
  var V = t, { children: a } = V, H = n(V, ["children"]);
  return /* @__PURE__ */ c.createElement(s, p({ ref: e }, H), a, /* @__PURE__ */ c.createElement("path", { d: "M240,196H228V56a12,12,0,0,0-12-12H40A12,12,0,0,0,28,56V196H16a4,4,0,0,0,0,8H240a4,4,0,0,0,0-8ZM36,56a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4V196H196V168a4,4,0,0,0-4-4H120a4,4,0,0,0-4,4v28H68V84H188v52a4,4,0,0,0,8,0V80a4,4,0,0,0-4-4H64a4,4,0,0,0-4,4V196H36ZM188,196H124V172h64Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
