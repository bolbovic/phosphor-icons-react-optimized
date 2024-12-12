var d = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    c.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const E = n((r, e) => {
  var m = r, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(A, p({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M213.92,210.62a8,8,0,1,1-11.84,10.76l-12.9-14.19A87.71,87.71,0,0,1,128,232c-48,0-87.49-38.93-88-86.88-.27-24.34,8.22-49.84,24.73-74.81L42.3,45.63a8.23,8.23,0,0,1,.14-11.38,8,8,0,0,1,11.48.37Zm-10.07-34.86a4,4,0,0,0,6.7-1.27A87.66,87.66,0,0,0,216,144c0-31.4-14.51-64.68-42-96.25a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A251.26,251.26,0,0,0,87.17,42a4,4,0,0,0,0,5.41Z" }));
});
E.displayName = "Fill";
export {
  E as Fill
};
