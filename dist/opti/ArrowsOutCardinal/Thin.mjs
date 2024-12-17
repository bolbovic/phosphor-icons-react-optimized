var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? f(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, L = (a, l) => {
  for (var e in l || (l = {}))
    i.call(l, e) && o(a, e, l[e]);
  if (m)
    for (var e of m(l))
      p.call(l, e) && o(a, e, l[e]);
  return a;
};
var n = (a, l) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = h((t, e) => {
  var r = t, { children: a } = r, l = n(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, L({ ref: e }, l), a, /* @__PURE__ */ c.createElement("path", { d: "M93.17,58.83a4,4,0,0,1,0-5.66l32-32a4,4,0,0,1,5.66,0l32,32a4,4,0,0,1-5.66,5.66L132,33.66V96a4,4,0,0,1-8,0V33.66L98.83,58.83A4,4,0,0,1,93.17,58.83Zm64,138.34L132,222.34V160a4,4,0,0,0-8,0v62.34L98.83,197.17a4,4,0,0,0-5.66,5.66l32,32a4,4,0,0,0,5.66,0l32-32a4,4,0,0,0-5.66-5.66Zm77.66-72-32-32a4,4,0,0,0-5.66,5.66L222.34,124H160a4,4,0,0,0,0,8h62.34l-25.17,25.17a4,4,0,0,0,5.66,5.66l32-32A4,4,0,0,0,234.83,125.17ZM33.66,132H96a4,4,0,0,0,0-8H33.66L58.83,98.83a4,4,0,0,0-5.66-5.66l-32,32a4,4,0,0,0,0,5.66l32,32a4,4,0,1,0,5.66-5.66Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
