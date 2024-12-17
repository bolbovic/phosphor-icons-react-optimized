var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      A.call(t, e) && m(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var l in a)
    o.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && A.call(a, l) && (e[l] = a[l]);
  return e;
};
import p, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((l, e) => {
  var c = l, { children: a } = c, t = i(c, ["children"]);
  return /* @__PURE__ */ p.createElement(s, L({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M138,72a6,6,0,0,1,6-6h57.51L179.76,44.24a6,6,0,0,1,8.48-8.48l32,32a6,6,0,0,1,0,8.48l-32,32a6,6,0,0,1-8.48-8.48L201.51,78H144A6,6,0,0,1,138,72Zm83.89,110.83A54.25,54.25,0,0,1,168,230C89.7,230,26,166.3,26,88A54.25,54.25,0,0,1,73.17,34.11,14,14,0,0,1,87.73,42.5l21.1,47.11a14,14,0,0,1-1.12,13.27,6,6,0,0,1-.42.57L86.22,128.51a1.89,1.89,0,0,0,0,1.67c7.66,15.69,24.1,32,40,39.65a1.88,1.88,0,0,0,1.68-.06l24.69-21a4.81,4.81,0,0,1,.56-.42,14,14,0,0,1,13.28-1.22l47.24,21.17A14,14,0,0,1,221.89,182.83ZM210,181.32a2,2,0,0,0-1.21-2l-47.25-21.17a2,2,0,0,0-1.61.1l-24.67,21c-.18.15-.37.29-.56.42a14,14,0,0,1-13.77,1c-18.36-8.87-36.66-27-45.53-45.19a14,14,0,0,1,.91-13.73,4.73,4.73,0,0,1,.43-.57L97.79,96.09a2,2,0,0,0,0-1.67L76.74,47.31A2,2,0,0,0,74.9,46h-.23A42.24,42.24,0,0,0,38,88c0,71.68,58.32,130,130,130A42.24,42.24,0,0,0,210,181.32Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
