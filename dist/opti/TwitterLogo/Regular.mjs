var s = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var A = (a, c, e) => c in a ? s(a, c, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[c] = e, p = (a, c) => {
  for (var e in c || (c = {}))
    o.call(c, e) && A(a, e, c[e]);
  if (t)
    for (var e of t(c))
      l.call(c, e) && A(a, e, c[e]);
  return a;
};
var f = (a, c) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && c.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      c.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import i, { forwardRef as R } from "react";
import d from "../../lib/OptiBase.mjs";
const n = R((r, e) => {
  var m = r, { children: a } = m, c = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(d, p({ ref: e }, c), a, /* @__PURE__ */ i.createElement("path", { d: "M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z" }));
});
n.displayName = "Regular";
export {
  n as Regular
};