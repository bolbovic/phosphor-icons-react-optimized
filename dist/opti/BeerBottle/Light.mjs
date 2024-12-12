var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as M } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = M((l, e) => {
  var m = l, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, L({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M244.24,43.76l-32-32a6,6,0,0,0-8.48,8.48l3.11,3.11-57.38,43-38.67,7.74a5.92,5.92,0,0,0-3.06,1.64L24.44,159.07a22,22,0,0,0,0,31.11l41.38,41.38a22,22,0,0,0,31.11,0l83.31-83.32a5.92,5.92,0,0,0,1.64-3.06l7.74-38.67,43-57.38,3.11,3.11a6,6,0,0,0,8.48-8.48ZM88.44,223.07a10,10,0,0,1-14.14,0L32.93,181.7a10,10,0,0,1,0-14.14L40,160.49,95.51,216ZM104,207.51,48.49,152,96,104.49,151.51,160ZM179.2,100.4a5.88,5.88,0,0,0-1.08,2.42L170.47,141,160,151.51,104.49,96,115,85.53l38.22-7.65a5.88,5.88,0,0,0,2.42-1.08l59.84-44.88,8.64,8.64Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
