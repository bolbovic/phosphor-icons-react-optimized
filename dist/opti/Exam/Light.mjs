var V = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var L = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && L(a, e, t[e]);
  if (m)
    for (var e of m(t))
      h.call(t, e) && L(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var l in a)
    o.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && h.call(a, l) && (e[l] = a[l]);
  return e;
};
import A, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((l, e) => {
  var r = l, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ A.createElement(c, i({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M216,42H40A14,14,0,0,0,26,56V216a6,6,0,0,0,8.68,5.37L64,206.71l29.32,14.66a6,6,0,0,0,5.36,0L128,206.71l29.32,14.66a6,6,0,0,0,5.36,0L192,206.71l29.32,14.66A6,6,0,0,0,224,222a5.93,5.93,0,0,0,3.15-.9A6,6,0,0,0,230,216V56A14,14,0,0,0,216,42Zm2,164.29-23.32-11.66a6,6,0,0,0-5.36,0L160,209.29l-29.32-14.66a6,6,0,0,0-5.36,0L96,209.29,66.68,194.63a6,6,0,0,0-5.36,0L38,206.29V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2Zm-116.63-113a6,6,0,0,0-10.74,0l-32,64a6,6,0,1,0,10.74,5.36L75.71,150h40.58l6.34,12.68a6,6,0,1,0,10.74-5.36ZM81.71,138,96,109.42,110.29,138ZM198,128a6,6,0,0,1-6,6H174v18a6,6,0,0,1-12,0V134H144a6,6,0,0,1,0-12h18V104a6,6,0,0,1,12,0v18h18A6,6,0,0,1,198,128Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
