var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      c.call(t, e) && m(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var l in a)
    p.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && c.call(a, l) && (e[l] = a[l]);
  return e;
};
import i, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const B = n((l, e) => {
  var r = l, { children: a } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(A, d({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M148.5,156.53a72,72,0,1,0-89,0,124,124,0,0,0-48.69,35.75,12,12,0,0,0,18.38,15.44C48.54,184.69,75.11,172,104,172c37,0,61.12,19.42,74.81,35.72a12,12,0,1,0,18.38-15.44A124,124,0,0,0,148.5,156.53ZM56,100a48,48,0,1,1,48,48A48.05,48.05,0,0,1,56,100Zm190.53,40-7.11,2.31,4.39,6.05a12,12,0,1,1-19.41,14.11l-4.4-6.06-4.4,6.06a12,12,0,1,1-19.41-14.11l4.39-6.05L193.47,140a12,12,0,1,1,7.41-22.83l7.12,2.31V112a12,12,0,0,1,24,0v7.48l7.12-2.31A12,12,0,1,1,246.53,140Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
