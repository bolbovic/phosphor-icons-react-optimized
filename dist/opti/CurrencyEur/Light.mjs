var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && H(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && H(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import h, { forwardRef as A } from "react";
import d from "../../lib/OptiBase.mjs";
const l = A((r, e) => {
  var o = r, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ h.createElement(d, c({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M188.47,193.66a6,6,0,0,1-.47,8.48A78,78,0,0,1,58.25,150H40a6,6,0,0,1,0-12H58V118H40a6,6,0,0,1,0-12H58.25A78,78,0,0,1,188,53.86a6,6,0,0,1-8,9A66,66,0,0,0,70.29,106H136a6,6,0,0,1,0,12H70v20h50a6,6,0,0,1,0,12H70.29A66,66,0,0,0,180,193.2,6,6,0,0,1,188.47,193.66Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
