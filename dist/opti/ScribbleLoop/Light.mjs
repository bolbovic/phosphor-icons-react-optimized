var d = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, C = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (c)
    for (var e of c(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && c)
    for (var r of c(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const n = h((r, e) => {
  var m = r, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(l, C({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M252.45,156c-1.32-1.46-24.27-26.42-61.37-40.5-1.5-18.49-8.13-35.31-19-48C157.74,50.8,137,42,112,42,61.49,42,28.5,87.38,27.12,89.31a6,6,0,1,0,9.76,7C37.18,95.87,67.75,54,112,54c21.37,0,39,7.35,50.93,21.27,8.26,9.62,13.64,22.14,15.62,36.06a139,139,0,0,0-38-5.33c-25.58,0-47,6.65-62,19.22-13.1,11-20.62,26.34-20.62,42a45.65,45.65,0,0,0,13.28,32.64C80.56,209.12,93.47,214,108.6,214c51.73,0,80.55-43.09,82.68-85.38,32.05,13.49,52,35.09,52.27,35.4a6,6,0,0,0,8.9-8ZM161,177.53C151.92,188.69,135.44,202,108.6,202,90,202,70,191.12,70,167.25,70,143.53,92.09,118,140.6,118a126.74,126.74,0,0,1,38.8,6.22C179.26,143.94,172.58,163.34,161,177.53Z" }));
});
n.displayName = "Light";
export {
  n as Light
};