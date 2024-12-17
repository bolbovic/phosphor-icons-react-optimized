var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    h.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const H = s((m, e) => {
  var l = m, { children: a } = l, t = Z(l, ["children"]);
  return /* @__PURE__ */ c.createElement(A, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M121.62,98.11l-24,64a6,6,0,0,1-11.24,0l-24-64a6,6,0,0,1,11.24-4.22l18.38,49,18.38-49a6,6,0,1,1,11.24,4.22ZM254,128a78.09,78.09,0,0,1-78,78H80A78,78,0,0,1,80,50h96A78.09,78.09,0,0,1,254,128Zm-12,0a66.08,66.08,0,0,0-66-66H80a66,66,0,0,0,0,132h96A66.08,66.08,0,0,0,242,128Zm-63.8,9.76,11,19.26a6,6,0,0,1-10.42,6l-12.07-21.12A27.06,27.06,0,0,1,164,142H150v18a6,6,0,0,1-12,0V96a6,6,0,0,1,6-6h20a26,26,0,0,1,14.2,47.76ZM164,130a14,14,0,0,0,0-28H150v28Z" }));
});
H.displayName = "Light";
export {
  H as Light
};
