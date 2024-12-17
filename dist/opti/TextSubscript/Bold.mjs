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
  return /* @__PURE__ */ f.createElement(A, L({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M252,208a12,12,0,0,1-12,12H192a12,12,0,0,1-9.6-19.2l43.17-57.56a12,12,0,0,0-2.35-16.82A12,12,0,0,0,204.68,132a12,12,0,0,1-22.63-8,36.3,36.3,0,0,1,5.2-9.67,36,36,0,0,1,57.5,43.34L216,196h24A12,12,0,0,1,252,208ZM151.86,46.93a12,12,0,0,0-16.93,1.21L92,97.68,49.07,48.14A12,12,0,0,0,30.93,63.86L76.12,116,30.93,168.14a12,12,0,0,0,18.14,15.72L92,134.32l42.93,49.54a12,12,0,1,0,18.14-15.72L107.88,116l45.19-52.14A12,12,0,0,0,151.86,46.93Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
