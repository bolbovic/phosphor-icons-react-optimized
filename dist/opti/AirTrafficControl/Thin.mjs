var n = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && l(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && l(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var h in a)
    o.call(a, h) && t.indexOf(h) < 0 && (e[h] = a[h]);
  if (a != null && m)
    for (var h of m(a))
      t.indexOf(h) < 0 && i.call(a, h) && (e[h] = a[h]);
  return e;
};
import H, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((h, e) => {
  var r = h, { children: a } = r, t = A(r, ["children"]);
  return /* @__PURE__ */ H.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M225.83,73.11A12,12,0,0,0,216,68H132V28h20a4,4,0,0,0,0-8H104a4,4,0,0,0,0,8h20V68H40A12,12,0,0,0,28.72,84.1l26.19,72A12,12,0,0,0,66.18,164H100v68a4,4,0,0,0,8,0V164h40v68a4,4,0,0,0,8,0V164h33.82a12,12,0,0,0,11.27-7.9l26.19-72A12,12,0,0,0,225.83,73.11ZM107.34,156,92.79,76h70.42l-14.55,80Zm-44.92-2.63-26.18-72A4,4,0,0,1,40,76H84.66L99.2,156h-33A4,4,0,0,1,62.42,153.37Zm157.34-72-26.18,72a4,4,0,0,1-3.76,2.63h-33l14.55-80H216a4,4,0,0,1,3.76,5.37Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
