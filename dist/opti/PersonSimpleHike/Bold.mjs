var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && r(a, e, t[e]);
  if (m)
    for (var e of m(t))
      c.call(t, e) && r(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var l in a)
    A.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && c.call(a, l) && (e[l] = a[l]);
  return e;
};
import L, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = i((l, e) => {
  var o = l, { children: a } = o, t = d(o, ["children"]);
  return /* @__PURE__ */ L.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ L.createElement("path", { d: "M152,84a36,36,0,1,0-36-36A36,36,0,0,0,152,84Zm0-48a12,12,0,1,1-12,12A12,12,0,0,1,152,36Zm52,108v88a12,12,0,0,1-24,0V155.24c-24.92-3.37-33.94-17.29-41.38-28.76-1.55-2.39-3.05-4.71-4.67-6.88l-9.54,22L159,166.23a12,12,0,0,1,5,9.77v56a12,12,0,0,1-24,0V182.17l-25.37-18.12L83,236.78a12,12,0,1,1-22-9.57L118.52,94.9A12,12,0,0,1,135,89a45.53,45.53,0,0,1,8.84,6c6.78,5.89,11.09,12.53,14.89,18.39C166.27,125,170.8,132,192,132A12,12,0,0,1,204,144ZM64.6,153.88,39.27,143A12,12,0,0,1,33,127.27l24-56A12,12,0,0,1,72.73,65L98.34,76A12,12,0,1,1,88.89,98L74.3,91.76,59.76,125.7l14.29,6.12a12,12,0,1,1-9.45,22.06Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};