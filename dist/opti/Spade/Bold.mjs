var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      c.call(t, e) && m(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && c.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as s } from "react";
import n from "../../lib/OptiBase.mjs";
const B = s((o, e) => {
  var l = o, { children: a } = l, t = A(l, ["children"]);
  return /* @__PURE__ */ f.createElement(n, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M133.37,13.27a12,12,0,0,0-10.74,0C118.44,15.36,20,65.4,20,136a60,60,0,0,0,69.51,59.25l-5.28,26.4A12,12,0,0,0,96,236h64a12,12,0,0,0,11.77-14.35l-5.28-26.4A60,60,0,0,0,236,136C236,65.4,137.56,15.36,133.37,13.27ZM176,172a35.88,35.88,0,0,1-19.09-5.47,12,12,0,0,0-18.14,12.52L145.36,212H110.64l6.59-32.95a12,12,0,0,0-18.14-12.52A36,36,0,0,1,44,136c0-28.29,23.57-53.95,43.34-70.49A274.68,274.68,0,0,1,128,37.63a274.16,274.16,0,0,1,40.66,27.88C188.43,82.05,212,107.71,212,136A36,36,0,0,1,176,172Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
