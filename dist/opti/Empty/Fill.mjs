var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const n = Z((l, e) => {
  var r = l, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(d, A({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M170.49,91.59A56,56,0,0,1,97.54,175ZM128,72a56,56,0,0,0-42.49,92.41l73-83.37A55.67,55.67,0,0,0,128,72Zm104,56A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Zm-32,0a71.68,71.68,0,0,0-18.89-48.55L186,73.27a8,8,0,1,0-12-10.54l-4.91,6.18A72,72,0,0,0,74.89,176.55L70,182.73a8,8,0,0,0,12,10.54l4.91-6.18A71.95,71.95,0,0,0,200,128Z" }));
});
n.displayName = "Fill";
export {
  n as Fill
};
