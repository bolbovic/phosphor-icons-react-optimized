var f = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && V(a, e, t[e]);
  if (c)
    for (var e of c(t))
      h.call(t, e) && V(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && c)
    for (var r of c(a))
      t.indexOf(r) < 0 && h.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const C = s((r, e) => {
  var m = r, { children: a } = m, t = p(m, ["children"]);
  return /* @__PURE__ */ n.createElement(A, i({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M180,60c-15.15,0-29.15,5.06-39.43,14.25a49.31,49.31,0,0,0-8.57,10V36h20a4,4,0,0,0,0-8H132V8a4,4,0,0,0-8,0V28H104a4,4,0,0,0,0,8h20V84.26a49.31,49.31,0,0,0-8.57-10C105.15,65.06,91.15,60,76,60a56.06,56.06,0,0,0-56,56c0,28.36,13.79,46.38,25.37,56.51A85.57,85.57,0,0,0,68,186.74V208a12,12,0,0,0,12,12h96a12,12,0,0,0,12-12V186.74a85.57,85.57,0,0,0,22.63-14.23C222.21,162.38,236,144.36,236,116A56.06,56.06,0,0,0,180,60Zm25.59,106.29a75.53,75.53,0,0,1-22.85,13.92A4,4,0,0,0,180,184v24a4,4,0,0,1-4,4H80a4,4,0,0,1-4-4V184a4,4,0,0,0-2.73-3.79,75.38,75.38,0,0,1-22.86-13.92C35.54,153.17,28,136.25,28,116A48.05,48.05,0,0,1,76,68c27.81,0,48,18.5,48,44v64a4,4,0,0,0,8,0V112c0-25.5,20.19-44,48-44a48.05,48.05,0,0,1,48,48C228,136.25,220.46,153.17,205.59,166.29Z" }));
});
C.displayName = "Thin";
export {
  C as Thin
};