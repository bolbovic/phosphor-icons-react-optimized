var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var L = (a, l, e) => l in a ? f(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, p = (a, l) => {
  for (var e in l || (l = {}))
    o.call(l, e) && L(a, e, l[e]);
  if (r)
    for (var e of r(l))
      i.call(l, e) && L(a, e, l[e]);
  return a;
};
var n = (a, l) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((t, e) => {
  var m = t, { children: a } = m, l = n(m, ["children"]);
  return /* @__PURE__ */ c.createElement(d, p({ ref: e }, l), a, /* @__PURE__ */ c.createElement("path", { d: "M172,216a4,4,0,0,1-4,4H24a4,4,0,0,1,0-8H168A4,4,0,0,1,172,216ZM243.93,92.41a4,4,0,0,1-1.88,2.7l-147.41,88a36.15,36.15,0,0,1-18.2,4.95,35.78,35.78,0,0,1-24.55-9.79L15.73,142.89a12,12,0,0,1,3.44-19.68l3.07-1.5a4,4,0,0,1,3-.2l30,10.13L81.5,115.8,55.91,91a12,12,0,0,1,3.36-19.89l.16-.06,7.15-2.71a4,4,0,0,1,2.8,0L125.11,88.8,178.32,57a35.83,35.83,0,0,1,46.14,8.22l18.69,24A4,4,0,0,1,243.93,92.41Zm-9.87-1.85L218.21,70.24a27.85,27.85,0,0,0-35.81-6.33L127.58,96.64a4,4,0,0,1-3.44.32L68,76.31l-5.66,2.14a4,4,0,0,0-1,6.62,1.14,1.14,0,0,0,.11.11l29.35,28.49a4,4,0,0,1-.72,6.29L57.86,139.44a4,4,0,0,1-3.35.37l-30.23-10.2-1.67.82-.18.09a4,4,0,0,0-1.16,6.59L57.42,172.5a27.82,27.82,0,0,0,33.16,3.72Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
