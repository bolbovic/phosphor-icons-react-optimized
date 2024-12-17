var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var h in a)
    V.call(a, h) && t.indexOf(h) < 0 && (e[h] = a[h]);
  if (a != null && m)
    for (var h of m(a))
      t.indexOf(h) < 0 && i.call(a, h) && (e[h] = a[h]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = f((h, e) => {
  var r = h, { children: a } = r, t = H(r, ["children"]);
  return /* @__PURE__ */ n.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M216,92H148V40a12,12,0,0,0-12-12H72A12,12,0,0,0,60,40V88a12,12,0,0,0,12,12h68v56H72a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V164h68a12,12,0,0,0,12-12V104A12,12,0,0,0,216,92ZM140,216a4,4,0,0,1-4,4H72a4,4,0,0,1-4-4V168a4,4,0,0,1,4-4h68Zm0-124H72a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h64a4,4,0,0,1,4,4Zm80,60a4,4,0,0,1-4,4H148V100h68a4,4,0,0,1,4,4Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
