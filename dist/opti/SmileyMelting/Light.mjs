var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const l = Z((r, e) => {
  var o = r, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ s.createElement(d, h({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M174,140a10,10,0,1,1-10-10A10,10,0,0,1,174,140ZM126,92a10,10,0,1,0-10,10A10,10,0,0,0,126,92Zm73.62-36.63A102,102,0,0,0,52,196a6,6,0,1,0,8.94-8A90.09,90.09,0,0,1,126.72,38H128a90,90,0,0,1,67.07,150,6,6,0,0,0,8.95,8,102,102,0,0,0-4.41-140.63ZM152,170H136c-22.65,0-50-18.73-50-42a43.15,43.15,0,0,1,.58-7,6,6,0,1,0-11.83-2,54,54,0,0,0-.75,9c0,14.26,7.2,28,20.27,38.6,12,9.79,27.26,15.4,41.73,15.4h16a10,10,0,0,1,0,20H96a22,22,0,0,0,0,44,6,6,0,0,0,0-12,10,10,0,0,1,0-20h56a22,22,0,0,0,0-44Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
