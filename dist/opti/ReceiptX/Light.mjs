var s = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && r(a, e, t[e]);
  if (l)
    for (var e of l(t))
      i.call(t, e) && r(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var L in a)
    o.call(a, L) && t.indexOf(L) < 0 && (e[L] = a[L]);
  if (a != null && l)
    for (var L of l(a))
      t.indexOf(L) < 0 && i.call(a, L) && (e[L] = a[L]);
  return e;
};
import f, { forwardRef as A } from "react";
import d from "../../lib/OptiBase.mjs";
const h = A((L, e) => {
  var m = L, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M216,42H40A14,14,0,0,0,26,56V208a6,6,0,0,0,8.68,5.37L64,198.71l29.32,14.66a6,6,0,0,0,5.36,0L128,198.71l29.32,14.66a6,6,0,0,0,5.36,0L192,198.71l29.32,14.66A6,6,0,0,0,224,214a5.93,5.93,0,0,0,3.15-.9A6,6,0,0,0,230,208V56A14,14,0,0,0,216,42Zm2,156.29-23.32-11.66a6,6,0,0,0-5.36,0L160,201.29l-29.32-14.66a6,6,0,0,0-5.36,0L96,201.29,66.68,186.63a6,6,0,0,0-5.36,0L38,198.29V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2Zm-61.76-98L136.48,120l19.76,19.76a6,6,0,1,1-8.48,8.48L128,128.48l-19.76,19.76a6,6,0,0,1-8.48-8.48L119.52,120,99.76,100.24a6,6,0,0,1,8.48-8.48L128,111.52l19.76-19.76a6,6,0,0,1,8.48,8.48Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
