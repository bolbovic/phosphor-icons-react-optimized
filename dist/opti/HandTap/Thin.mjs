var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import v, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const V = f((r, e) => {
  var o = r, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ v.createElement(s, l({ ref: e }, t), a, /* @__PURE__ */ v.createElement("path", { d: "M60,76a56,56,0,0,1,112,0,4,4,0,0,1-8,0,48,48,0,0,0-96,0,4,4,0,1,1-8,0Zm136,48a23.88,23.88,0,0,0-16.07,6.19A24,24,0,0,0,140,114.13V76a24,24,0,0,0-48,0v94L80.74,151.94A24,24,0,0,0,39.22,176l29.32,50a4,4,0,0,0,6.9-4L46.13,172a16,16,0,0,1,27.72-16l.07.12,18.68,30A4,4,0,0,0,100,184V76a16,16,0,0,1,32,0v68a4,4,0,0,0,8,0V132a16,16,0,0,1,32,0v20a4,4,0,0,0,8,0v-4a16,16,0,0,1,32,0v36c0,22.66-7.51,38.06-7.58,38.21a4,4,0,0,0,1.79,5.37A4.05,4.05,0,0,0,208,228a4,4,0,0,0,3.58-2.21c.34-.69,8.42-17.13,8.42-41.79V148A24,24,0,0,0,196,124Z" }));
});
V.displayName = "Thin";
export {
  V as Thin
};
