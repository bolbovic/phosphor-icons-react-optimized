var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const h = Z((l, e) => {
  var r = l, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(d, L({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M154.73,201.06a82,82,0,0,1,0-146.12,6,6,0,0,0,0-10.69A93,93,0,0,0,112,34a94,94,0,0,0,0,188,93,93,0,0,0,42.73-10.25,6,6,0,0,0,0-10.69ZM112,210A82,82,0,1,1,138.81,50.47a94,94,0,0,0,0,155.06A81.4,81.4,0,0,1,112,210Zm138.38-87.51-27.61-11.91-2.4-31a6,6,0,0,0-10.61-3.36L190.37,99.67l-28.93-7.16a6,6,0,0,0-6.61,8.87L170.5,128l-15.67,26.62a6,6,0,0,0,6.61,8.87l28.93-7.16,19.39,23.49a6,6,0,0,0,10.61-3.36l2.4-31,27.61-11.91a6,6,0,0,0,0-11Zm-35.69,13.35a6,6,0,0,0-3.61,5l-1.53,19.83-12.33-14.94a6,6,0,0,0-4.63-2.18,5.92,5.92,0,0,0-1.44.18l-18.74,4.63L182.64,131a6,6,0,0,0,0-6.08l-10.23-17.37,18.74,4.63a6,6,0,0,0,6.07-2l12.33-14.94,1.53,19.83a6,6,0,0,0,3.61,5L232.86,128Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
