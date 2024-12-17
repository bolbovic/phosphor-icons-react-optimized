var R = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, c, e) => c in a ? R(a, c, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[c] = e, f = (a, c) => {
  for (var e in c || (c = {}))
    p.call(c, e) && o(a, e, c[e]);
  if (t)
    for (var e of t(c))
      l.call(c, e) && o(a, e, c[e]);
  return a;
};
var i = (a, c) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && c.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      c.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const C = d((r, e) => {
  var m = r, { children: a } = m, c = i(m, ["children"]);
  return /* @__PURE__ */ s.createElement(n, f({ ref: e }, c), a, /* @__PURE__ */ s.createElement("path", { d: "M43.18,128a29.78,29.78,0,0,1,8,10.26c4.8,9.9,4.8,22,4.8,33.74,0,24.31,1,36,24,36a8,8,0,0,1,0,16c-17.48,0-29.32-6.14-35.2-18.26-4.8-9.9-4.8-22-4.8-33.74,0-24.31-1-36-24-36a8,8,0,0,1,0-16c23,0,24-11.69,24-36,0-11.72,0-23.84,4.8-33.74C50.68,38.14,62.52,32,80,32a8,8,0,0,1,0,16C57,48,56,59.69,56,84c0,11.72,0,23.84-4.8,33.74A29.78,29.78,0,0,1,43.18,128ZM240,120c-23,0-24-11.69-24-36,0-11.72,0-23.84-4.8-33.74C205.32,38.14,193.48,32,176,32a8,8,0,0,0,0,16c23,0,24,11.69,24,36,0,11.72,0,23.84,4.8,33.74a29.78,29.78,0,0,0,8,10.26,29.78,29.78,0,0,0-8,10.26c-4.8,9.9-4.8,22-4.8,33.74,0,24.31-1,36-24,36a8,8,0,0,0,0,16c17.48,0,29.32-6.14,35.2-18.26,4.8-9.9,4.8-22,4.8-33.74,0-24.31,1-36,24-36a8,8,0,0,0,0-16Z" }));
});
C.displayName = "Regular";
export {
  C as Regular
};
