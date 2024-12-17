var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, a, t) => a in e ? d(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, C = (e, a) => {
  for (var t in a || (a = {}))
    i.call(a, t) && o(e, t, a[t]);
  if (r)
    for (var t of r(a))
      p.call(a, t) && o(e, t, a[t]);
  return e;
};
var f = (e, a) => {
  var t = {};
  for (var c in e)
    i.call(e, c) && a.indexOf(c) < 0 && (t[c] = e[c]);
  if (e != null && r)
    for (var c of r(e))
      a.indexOf(c) < 0 && p.call(e, c) && (t[c] = e[c]);
  return t;
};
import s, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const n = h((c, t) => {
  var m = c, { children: e } = m, a = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(l, C({ ref: t }, a), e, /* @__PURE__ */ s.createElement("path", { d: "M238,149.31c0,15.75-3.07,29.17-8.88,38.81-7.05,11.7-18,17.88-31.68,17.88-26.74,0-46.3-36.51-67-75.17C113.14,98.57,93.55,62,74,62c-23.28,0-44,48.83-44,87.31,0,13.57,2.48,24.84,7.16,32.62,4.9,8.12,11.9,12.07,21.4,12.07,16.16,0,32.31-25.06,46-49.57A6,6,0,0,1,115,150.27C100,177.23,82,206,58.56,206c-13.67,0-24.63-6.18-31.68-17.88C21.07,178.48,18,165.06,18,149.31,18,108.82,39.81,50,74,50c26.74,0,46.3,36.51,67,75.17C158.29,157.43,177.88,194,197.44,194c9.5,0,16.5-3.95,21.4-12.07,4.68-7.78,7.16-19.05,7.16-32.62C226,110.83,205.29,62,182,62c-9,0-18.91,7.76-30.14,23.73a6,6,0,0,1-9.82-6.91C150.75,66.45,164.37,50,182,50,216.19,50,238,108.82,238,149.31Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
