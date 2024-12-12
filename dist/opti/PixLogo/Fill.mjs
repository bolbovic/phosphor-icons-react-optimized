var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var o = (a, e, l) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, i = (a, e) => {
  for (var l in e || (e = {}))
    A.call(e, l) && o(a, l, e[l]);
  if (r)
    for (var l of r(e))
      H.call(e, l) && o(a, l, e[l]);
  return a;
};
var p = (a, e) => {
  var l = {};
  for (var t in a)
    A.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      e.indexOf(t) < 0 && H.call(a, t) && (l[t] = a[t]);
  return l;
};
import c, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const Z = s((t, l) => {
  var m = t, { children: a } = m, e = p(m, ["children"]);
  return /* @__PURE__ */ c.createElement(L, i({ ref: l }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M235.34,139.28l-19.56,19.55A4,4,0,0,1,213,160H171.32l-32-32,32-32H213a4,4,0,0,1,2.82,1.17l19.56,19.55A16,16,0,0,1,235.34,139.28ZM67.05,80H88a8,8,0,0,1,5.65,2.34L128,116.68l34.35-34.34A8,8,0,0,1,168,80H189a4,4,0,0,0,2.83-6.83l-52.5-52.51a16,16,0,0,0-22.56,0L64.22,73.17A4,4,0,0,0,67.05,80ZM189,176H168a8,8,0,0,1-5.65-2.34L128,139.31,93.65,173.66A8,8,0,0,1,88,176h-21a4,4,0,0,0-2.83,6.83l52.5,52.51a16,16,0,0,0,22.56,0l52.5-52.51A4,4,0,0,0,189,176Zm-72.26-48-32-32H43a4,4,0,0,0-2.82,1.17L20.66,116.72a16,16,0,0,0,0,22.56l19.56,19.55A4,4,0,0,0,43,160H84.68Z" }));
});
Z.displayName = "Fill";
export {
  Z as Fill
};
