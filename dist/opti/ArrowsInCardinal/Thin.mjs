var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? f(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, n = (a, l) => {
  for (var e in l || (l = {}))
    i.call(l, e) && o(a, e, l[e]);
  if (r)
    for (var e of r(l))
      p.call(l, e) && o(a, e, l[e]);
  return a;
};
var L = (a, l) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const V = s((t, e) => {
  var m = t, { children: a } = m, l = L(m, ["children"]);
  return /* @__PURE__ */ c.createElement(H, n({ ref: e }, l), a, /* @__PURE__ */ c.createElement("path", { d: "M93.17,66.83a4,4,0,0,1,5.66-5.66L124,86.34V24a4,4,0,0,1,8,0V86.34l25.17-25.17a4,4,0,1,1,5.66,5.66l-32,32a4,4,0,0,1-5.66,0Zm37.66,90.34a4,4,0,0,0-5.66,0l-32,32a4,4,0,0,0,5.66,5.66L124,169.66V232a4,4,0,0,0,8,0V169.66l25.17,25.17a4,4,0,0,0,5.66-5.66ZM232,124H169.66l25.17-25.17a4,4,0,1,0-5.66-5.66l-32,32a4,4,0,0,0,0,5.66l32,32a4,4,0,0,0,5.66-5.66L169.66,132H232a4,4,0,0,0,0-8ZM98.83,125.17l-32-32a4,4,0,0,0-5.66,5.66L86.34,124H24a4,4,0,0,0,0,8H86.34L61.17,157.17a4,4,0,0,0,5.66,5.66l32-32A4,4,0,0,0,98.83,125.17Z" }));
});
V.displayName = "Thin";
export {
  V as Thin
};
