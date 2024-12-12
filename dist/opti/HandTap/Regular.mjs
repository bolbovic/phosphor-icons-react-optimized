var i = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, v = (a, r) => {
  for (var e in r || (r = {}))
    c.call(r, e) && o(a, e, r[e]);
  if (l)
    for (var e of l(r))
      p.call(r, e) && o(a, e, r[e]);
  return a;
};
var A = (a, r) => {
  var e = {};
  for (var t in a)
    c.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      r.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import R from "../../lib/OptiBase.mjs";
const V = s((t, e) => {
  var m = t, { children: a } = m, r = A(m, ["children"]);
  return /* @__PURE__ */ f.createElement(R, v({ ref: e }, r), a, /* @__PURE__ */ f.createElement("path", { d: "M56,76a60,60,0,0,1,120,0,8,8,0,0,1-16,0,44,44,0,0,0-88,0,8,8,0,1,1-16,0Zm140,44a27.9,27.9,0,0,0-13.36,3.39A28,28,0,0,0,144,106.7V76a28,28,0,0,0-56,0v80l-3.82-6.13a28,28,0,0,0-48.41,28.17l29.32,50A8,8,0,1,0,78.89,220L49.6,170a12,12,0,1,1,20.78-12l.14.23,18.68,30A8,8,0,0,0,104,184V76a12,12,0,0,1,24,0v68a8,8,0,1,0,16,0V132a12,12,0,0,1,24,0v20a8,8,0,0,0,16,0v-4a12,12,0,0,1,24,0v36c0,21.61-7.1,36.3-7.16,36.42a8,8,0,0,0,3.58,10.73A7.9,7.9,0,0,0,208,232a8,8,0,0,0,7.16-4.42c.37-.73,8.85-18,8.85-43.58V148A28,28,0,0,0,196,120Z" }));
});
V.displayName = "Regular";
export {
  V as Regular
};
