var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
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
const n = Z((r, e) => {
  var l = r, { children: a } = l, t = f(l, ["children"]);
  return /* @__PURE__ */ s.createElement(d, c({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M134.16,24.1a4,4,0,0,0-3.56,1.81C120.3,41.48,120,55.79,120,56a8,8,0,0,0,9.68,7.79A8.24,8.24,0,0,0,136,55.68,8,8,0,0,1,144.8,48a8.14,8.14,0,0,1,7.2,8.23,24,24,0,0,1-48-.27c0-.63.09-10.78,5.44-24a4,4,0,0,0-4.59-5.39A104.16,104.16,0,0,0,24.07,131.66C26,186.72,71.23,231,126.32,231.9a104,104,0,0,0,7.84-207.8ZM80,127.91a12,12,0,1,1,12,12A12,12,0,0,1,80,127.91Zm80.27,54.77a61,61,0,0,1-64.54,0,8,8,0,0,1,8.54-13.54,45,45,0,0,0,47.46,0,8,8,0,0,1,8.54,13.54ZM164,139.91a12,12,0,1,1,12-12A12,12,0,0,1,164,139.91Z" }));
});
n.displayName = "Fill";
export {
  n as Fill
};
