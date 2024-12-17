var L = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? L(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    V.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import A, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((r, e) => {
  var l = r, { children: a } = l, t = c(l, ["children"]);
  return /* @__PURE__ */ A.createElement(h, p({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M230,198.65V240a6,6,0,0,1-12,0V198.65a76.83,76.83,0,0,0-28-59.08v62.74a6,6,0,0,1-11,3.28l-10.68-16.3a2.75,2.75,0,0,1-.17-.29,14,14,0,0,0-24.33,13.87L166,236.71a6,6,0,0,1-10,6.58l-22.26-34c-.06-.1-.12-.19-.17-.29A26,26,0,0,1,178,182.14V64a2,2,0,0,0-2-2H160a6,6,0,0,1,0-12h16a14,14,0,0,1,14,14v60.69A88.88,88.88,0,0,1,230,198.65ZM86,56a6,6,0,0,0-6-6H64A14,14,0,0,0,50,64V200a6,6,0,0,0,12,0V64a2,2,0,0,1,2-2H80A6,6,0,0,0,86,56Zm70.24,43.76a6,6,0,0,0-8.48,0L126,121.51V16a6,6,0,0,0-12,0V121.51L92.24,99.76a6,6,0,0,0-8.48,8.48l32,32a6,6,0,0,0,8.48,0l32-32A6,6,0,0,0,156.24,99.76Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
