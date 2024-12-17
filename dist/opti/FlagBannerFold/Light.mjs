var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && h(a, e, t[e]);
  if (l)
    for (var e of l(t))
      i.call(t, e) && h(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const H = s((r, e) => {
  var m = r, { children: a } = m, t = L(m, ["children"]);
  return /* @__PURE__ */ c.createElement(A, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M237,44.75A6,6,0,0,0,232,42H152a6,6,0,0,0-5.46,3.52L137.23,66H28a6,6,0,0,0-4.44,10l36.33,40L23.56,156A6,6,0,0,0,28,166h73.09a6,6,0,0,0,5.46-3.52L115.86,142h66.82l-36.14,79.52a6,6,0,0,0,3,7.94A5.9,5.9,0,0,0,152,230a6,6,0,0,0,5.46-3.52l80-176A6,6,0,0,0,237,44.75ZM97.23,154H41.56l30.88-34a6,6,0,0,0,0-8.08L41.56,78h90.21Zm90.91-24H121.32l34.54-76h66.82Z" }));
});
H.displayName = "Light";
export {
  H as Light
};
