var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, e, l) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, d = (a, e) => {
  for (var l in e || (e = {}))
    L.call(e, l) && r(a, l, e[l]);
  if (m)
    for (var l of m(e))
      p.call(e, l) && r(a, l, e[l]);
  return a;
};
var Z = (a, e) => {
  var l = {};
  for (var t in a)
    L.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && p.call(a, t) && (l[t] = a[t]);
  return l;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((t, l) => {
  var o = t, { children: a } = o, e = Z(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: l }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M252.49,87.51l-38-38a12,12,0,0,0-17,0L168,79,136.49,47.51a12,12,0,0,0-17,0L88,79,58.49,49.51a12,12,0,0,0-17,0l-38,38a12,12,0,0,0,0,17l38,38a12,12,0,0,0,17,0L88,113l23,23L79.51,167.51a12,12,0,0,0,0,17l40,40a12,12,0,0,0,17,0l40-40a12,12,0,0,0,0-17L145,136l23-23,29.51,29.52a12,12,0,0,0,17,0l38-38A12,12,0,0,0,252.49,87.51ZM50,117,29,96,50,75,71,96Zm78,82-23-23,23-23,23,23Zm0-80L105,96l23-23,23,23Zm78-2L185,96l21-21,21,21Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
