var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      o.call(t, e) && m(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var c in a)
    A.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && r)
    for (var c of r(a))
      t.indexOf(c) < 0 && o.call(a, c) && (e[c] = a[c]);
  return e;
};
import L, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = h((c, e) => {
  var l = c, { children: a } = l, t = p(l, ["children"]);
  return /* @__PURE__ */ L.createElement(s, i({ ref: e }, t), a, /* @__PURE__ */ L.createElement("path", { d: "M146.2,46.45a6,6,0,0,1,7.35-4.25,84.24,84.24,0,0,1,60.25,60.25,6,6,0,0,1-4.25,7.35,5.94,5.94,0,0,1-1.55.2,6,6,0,0,1-5.8-4.45A72.34,72.34,0,0,0,150.45,53.8,6,6,0,0,1,146.2,46.45ZM142.45,85.8C157,89.68,166.32,99,170.2,113.55A6,6,0,0,0,176,118a5.94,5.94,0,0,0,1.55-.2,6,6,0,0,0,4.25-7.35c-5-18.71-17.54-31.25-36.25-36.25a6,6,0,1,0-3.1,11.6Zm79.44,97A54.25,54.25,0,0,1,168,230C89.7,230,26,166.3,26,88A54.25,54.25,0,0,1,73.17,34.11,14,14,0,0,1,87.73,42.5l21.1,47.1a14,14,0,0,1-1.12,13.28,6,6,0,0,1-.42.57L86.22,128.51a1.89,1.89,0,0,0,0,1.67c7.66,15.68,24.1,32,40,39.65a1.88,1.88,0,0,0,1.68-.06l24.69-21a4.81,4.81,0,0,1,.56-.42,14,14,0,0,1,13.28-1.22l47.24,21.17A14,14,0,0,1,221.89,182.83ZM210,181.32a2,2,0,0,0-1.21-2l-47.25-21.17a1.92,1.92,0,0,0-1.6.1l-24.68,21c-.18.15-.37.29-.56.42a14,14,0,0,1-13.77,1c-18.36-8.87-36.66-27-45.53-45.19a14,14,0,0,1,.91-13.73,4.73,4.73,0,0,1,.43-.57L97.79,96.09a2,2,0,0,0,0-1.67L76.74,47.31A2,2,0,0,0,74.9,46h-.23A42.24,42.24,0,0,0,38,88c0,71.68,58.32,130,130,130A42.24,42.24,0,0,0,210,181.32Z" }));
});
Z.displayName = "Light";
export {
  Z as Light
};