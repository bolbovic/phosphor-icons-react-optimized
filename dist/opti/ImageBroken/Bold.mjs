var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, e, l) => e in a ? Z(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, H = (a, e) => {
  for (var l in e || (e = {}))
    A.call(e, l) && r(a, l, e[l]);
  if (m)
    for (var l of m(e))
      p.call(e, l) && r(a, l, e[l]);
  return a;
};
var d = (a, e) => {
  var l = {};
  for (var t in a)
    A.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && p.call(a, t) && (l[t] = a[t]);
  return l;
};
import V, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((t, l) => {
  var o = t, { children: a } = o, e = d(o, ["children"]);
  return /* @__PURE__ */ V.createElement(f, H({ ref: l }, e), a, /* @__PURE__ */ V.createElement("path", { d: "M231,112a12,12,0,0,0-10.81-1.65l-23.81,7.93a12,12,0,0,0-7.34,6.93l-13.67,34.18-34.18,13.67a12,12,0,0,0-6.93,7.34l-7.93,23.81A12,12,0,0,0,137.73,220H216a20,20,0,0,0,20-20V121.73A12,12,0,0,0,231,112Zm-19,84H154.38l.91-2.73,33.79-13.51a12,12,0,0,0,6.68-6.68l13.51-33.79,2.73-.91Zm4-160H40A20,20,0,0,0,20,56V200a20,20,0,0,0,20,20H95.57A12,12,0,0,0,107,211.79L123.21,163l35.09-14A12,12,0,0,0,165,142.3l14-35.09L227.79,91A12,12,0,0,0,236,79.57V56A20,20,0,0,0,216,36ZM102.2,150.16,86.92,196H44V173.66l48-48,17.14,17.14h0A12,12,0,0,0,102.2,150.16ZM212,70.92,166.16,86.2a12,12,0,0,0-7.35,6.93l-14.2,35.48-11.22,4.49-27.25-27.24a20,20,0,0,0-28.28,0L44,139.72V60H212Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
