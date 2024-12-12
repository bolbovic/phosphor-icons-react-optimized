var f = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && l(a, e, t[e]);
  if (c)
    for (var e of c(t))
      i.call(t, e) && l(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && c)
    for (var r of c(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import L, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((r, e) => {
  var m = r, { children: a } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ L.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ L.createElement("path", { d: "M165.57,42.26A38.07,38.07,0,0,0,128,10a6,6,0,0,0,0,12,26,26,0,0,1,25.38,20.35A62.08,62.08,0,0,0,98,104c0,47.75-26.23,79.68-78,94.93a14,14,0,0,0,1.56,27.24A262.5,262.5,0,0,0,66.81,230c40.36,0,85.23-9,116.19-35,25.88-21.71,39-52.33,39-91A62.06,62.06,0,0,0,165.57,42.26ZM160,54a50.09,50.09,0,0,1,47.82,35.38L192,97.28,162.68,82.62a6,6,0,0,0-5.36,0L128,97.28l-15.81-7.91A50.07,50.07,0,0,1,160,54Zm15.28,131.82C150.15,206.89,95.36,227,23.67,214.33A1.88,1.88,0,0,1,22,212.44a1.81,1.81,0,0,1,1.43-2C80.06,193.73,110,156.92,110,104c0-.76,0-1.51.06-2.26l15.26,7.63a6,6,0,0,0,5.36,0L160,94.69l29.32,14.66a6,6,0,0,0,5.36,0l15.26-7.63c0,.75.06,1.5.06,2.26C210,139,198.32,166.49,175.28,185.81Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
