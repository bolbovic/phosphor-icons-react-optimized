var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, c, e) => c in a ? i(a, c, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[c] = e, f = (a, c) => {
  for (var e in c || (c = {}))
    l.call(c, e) && o(a, e, c[e]);
  if (r)
    for (var e of r(c))
      p.call(c, e) && o(a, e, c[e]);
  return a;
};
var s = (a, c) => {
  var e = {};
  for (var t in a)
    l.call(a, t) && c.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      c.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import d, { forwardRef as R } from "react";
import n from "../../lib/OptiBase.mjs";
const u = R((t, e) => {
  var m = t, { children: a } = m, c = s(m, ["children"]);
  return /* @__PURE__ */ d.createElement(n, f({ ref: e }, c), a, /* @__PURE__ */ d.createElement("path", { d: "M43.18,128a29.78,29.78,0,0,1,8,10.26c4.8,9.9,4.8,22,4.8,33.74,0,24.31,1,36,24,36a8,8,0,0,1,0,16c-17.48,0-29.32-6.14-35.2-18.26-4.8-9.9-4.8-22-4.8-33.74,0-24.31-1-36-24-36a8,8,0,0,1,0-16c23,0,24-11.69,24-36,0-11.72,0-23.84,4.8-33.74C50.68,38.14,62.52,32,80,32a8,8,0,0,1,0,16C57,48,56,59.69,56,84c0,11.72,0,23.84-4.8,33.74A29.78,29.78,0,0,1,43.18,128ZM240,120c-23,0-24-11.69-24-36,0-11.72,0-23.84-4.8-33.74C205.32,38.14,193.48,32,176,32a8,8,0,0,0,0,16c23,0,24,11.69,24,36,0,11.72,0,23.84,4.8,33.74a29.78,29.78,0,0,0,8,10.26,29.78,29.78,0,0,0-8,10.26c-4.8,9.9-4.8,22-4.8,33.74,0,24.31-1,36-24,36a8,8,0,0,0,0,16c17.48,0,29.32-6.14,35.2-18.26,4.8-9.9,4.8-22,4.8-33.74,0-24.31,1-36,24-36a8,8,0,0,0,0-16Z" }));
});
u.displayName = "Regular";
export {
  u as Regular,
  u as default
};
