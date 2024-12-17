var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      n.call(t, e) && c(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var o in a)
    l.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && n.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const h = s((o, e) => {
  var p = o, { children: a } = p, t = d(p, ["children"]);
  return /* @__PURE__ */ m.createElement(A, i({ ref: e }, t), a, /* @__PURE__ */ m.createElement("path", { d: "M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M136,80v43.47l36.12,21.67a8,8,0,0,1-8.24,13.72l-40-24A8,8,0,0,1,120,128V80a8,8,0,0,1,16,0Zm88-24a8,8,0,0,0-8,8V82c-6.35-7.36-12.83-14.45-20.12-21.83a96,96,0,1,0-2,137.7,8,8,0,0,0-11-11.64A80,80,0,1,1,184.54,71.4C192.68,79.64,199.81,87.58,207,96H184a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V64A8,8,0,0,0,224,56Z" }));
});
h.displayName = "Duotone";
export {
  h as Duotone
};
