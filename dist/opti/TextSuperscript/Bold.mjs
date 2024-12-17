var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && m(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const n = s((o, e) => {
  var l = o, { children: a } = l, t = c(l, ["children"]);
  return /* @__PURE__ */ f.createElement(A, L({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M252,144a12,12,0,0,1-12,12H192a12,12,0,0,1-9.6-19.2l43.17-57.55A12,12,0,1,0,204.68,68a12,12,0,0,1-22.63-8,36.24,36.24,0,0,1,5.2-9.66,36,36,0,0,1,57.5,43.33L216,132h24A12,12,0,0,1,252,144ZM151.86,70.94a12,12,0,0,0-16.93,1.2L92,121.68,49.07,72.14A12,12,0,0,0,30.93,87.86L76.12,140,30.93,192.14a12,12,0,0,0,18.14,15.72L92,158.32l42.93,49.54a12,12,0,1,0,18.14-15.72L107.88,140l45.19-52.14A12,12,0,0,0,151.86,70.94Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
