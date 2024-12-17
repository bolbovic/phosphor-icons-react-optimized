var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    L.call(t, e) && H(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && H(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    L.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const s = h((r, e) => {
  var o = r, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ c.createElement(l, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M208,194H76.11l25.45-28H152A62,62,0,0,0,196.81,61.22L212.44,44A6,6,0,1,0,203.56,36L187.73,53.38A61.61,61.61,0,0,0,152,42H56a6,6,0,0,0,0,12h96a49.67,49.67,0,0,1,27.59,8.33L96.25,154H56a6,6,0,0,0,0,12H85.35L43.56,212A6,6,0,0,0,52.44,220L65.2,206H208a6,6,0,0,0,0-12ZM188.73,70.12A50,50,0,0,1,152,154H112.47Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
