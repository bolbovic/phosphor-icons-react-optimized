var R = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, l, e) => l in a ? R(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, f = (a, l) => {
  for (var e in l || (l = {}))
    o.call(l, e) && c(a, e, l[e]);
  if (t)
    for (var e of t(l))
      p.call(l, e) && c(a, e, l[e]);
  return a;
};
var i = (a, l) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && l.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      l.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const Z = d((r, e) => {
  var m = r, { children: a } = m, l = i(m, ["children"]);
  return /* @__PURE__ */ s.createElement(n, f({ ref: e }, l), a, /* @__PURE__ */ s.createElement("path", { d: "M53.93,34.62A8,8,0,1,0,42.09,45.38L69.68,75.74a141.26,141.26,0,0,0-45.27,30.44c-20,20-21.92,49.46-4.69,71.67a16,16,0,0,0,18.38,5.07l49-17.37.29-.11a16,16,0,0,0,9.75-11.72l5.9-29.51a75.89,75.89,0,0,1,8.56-2.4l90.51,99.57a8,8,0,1,0,11.84-10.76Zm43.7,74.52a16,16,0,0,0-10.32,11.94l-5.9,29.5-48.78,17.3c-.1,0-.17.13-.27.17-12.33-15.9-11-36.22,3.36-50.56a125.79,125.79,0,0,1,45.47-29.1l18.3,20.14C98.87,108.73,98.25,108.92,97.63,109.14Zm138.65,68.71a16,16,0,0,1-18.38,5.07l-9.25-3.28A8,8,0,0,1,214,164.56l9.37,3.32.3.12c12.3-15.85,11-36.17-3.39-50.51-25.66-25.66-61.88-39.27-99.35-37.31a8,8,0,1,1-.83-16c42-2.19,82.63,13.1,111.49,42C251.58,126.17,253.51,155.64,236.28,177.85Z" }));
});
Z.displayName = "Regular";
export {
  Z as Regular
};