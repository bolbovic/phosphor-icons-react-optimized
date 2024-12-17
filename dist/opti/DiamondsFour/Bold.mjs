var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, e, l) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, d = (a, e) => {
  for (var l in e || (e = {}))
    Z.call(e, l) && r(a, l, e[l]);
  if (m)
    for (var l of m(e))
      p.call(e, l) && r(a, l, e[l]);
  return a;
};
var M = (a, e) => {
  var l = {};
  for (var t in a)
    Z.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && p.call(a, t) && (l[t] = a[t]);
  return l;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((t, l) => {
  var o = t, { children: a } = o, e = M(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: l }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M119.51,108.49a12,12,0,0,0,17,0l38-38a12,12,0,0,0,0-17l-38-38a12,12,0,0,0-17,0l-38,38a12,12,0,0,0,0,17ZM128,41l21,21L128,83,107,62Zm8.49,106.54a12,12,0,0,0-17,0l-38,38a12,12,0,0,0,0,17l38,38a12,12,0,0,0,17,0l38-38a12,12,0,0,0,0-17ZM128,215l-21-21,21-21,21,21Zm-19.51-95.52-38-38a12,12,0,0,0-17,0l-38,38a12,12,0,0,0,0,17l38,38a12,12,0,0,0,17,0l38-38A12,12,0,0,0,108.49,119.51ZM62,149,41,128l21-21,21,21Zm178.49-29.52-38-38a12,12,0,0,0-17,0l-38,38a12,12,0,0,0,0,17l38,38a12,12,0,0,0,17,0l38-38A12,12,0,0,0,240.49,119.51ZM194,149l-21-21,21-21,21,21Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
