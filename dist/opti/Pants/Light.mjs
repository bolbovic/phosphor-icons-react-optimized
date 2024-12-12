var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    L.call(t, e) && H(a, e, t[e]);
  if (m)
    for (var e of m(t))
      o.call(t, e) && H(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var A in a)
    L.call(a, A) && t.indexOf(A) < 0 && (e[A] = a[A]);
  if (a != null && m)
    for (var A of m(a))
      t.indexOf(A) < 0 && o.call(a, A) && (e[A] = a[A]);
  return e;
};
import p, { forwardRef as h } from "react";
import c from "../../lib/OptiBase.mjs";
const f = h((A, e) => {
  var r = A, { children: a } = r, t = l(r, ["children"]);
  return /* @__PURE__ */ p.createElement(c, i({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M221.89,214.26l-22-176A14,14,0,0,0,186,26H70A14,14,0,0,0,56.11,38.26l-22,176A14,14,0,0,0,48,230H88.69a14,14,0,0,0,13.57-10.56L128,120l25.73,99.44A14,14,0,0,0,167.31,230H208a14,14,0,0,0,13.89-15.74ZM195.22,97.66A34.07,34.07,0,0,1,166.54,70h25.23ZM70,38H186a2,2,0,0,1,2,1.75L190.27,58H65.73L68,39.75A2,2,0,0,1,70,38ZM64.23,70H89.46A34.07,34.07,0,0,1,60.78,97.66Zm26.4,146.49A2,2,0,0,1,88.69,218H48a2,2,0,0,1-2-2.25L59.25,109.87A46.07,46.07,0,0,0,101.6,70H122V95.24Zm118.87.83a2,2,0,0,1-1.5.68H167.31a2,2,0,0,1-1.95-1.56L134,95.24V70h20.4a46.07,46.07,0,0,0,42.35,39.87L210,215.75A2,2,0,0,1,209.5,217.32Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
