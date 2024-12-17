var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? f(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, n = (a, l) => {
  for (var e in l || (l = {}))
    i.call(l, e) && o(a, e, l[e]);
  if (m)
    for (var e of m(l))
      p.call(l, e) && o(a, e, l[e]);
  return a;
};
var Z = (a, l) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const d = h((t, e) => {
  var r = t, { children: a } = r, l = Z(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, n({ ref: e }, l), a, /* @__PURE__ */ c.createElement("path", { d: "M236,200a4,4,0,0,1-4,4H184a4,4,0,0,1,0-8h48A4,4,0,0,1,236,200Zm-14-75.46-94,54.83L34,124.54a4,4,0,0,0-4,6.92l96,56a4,4,0,0,0,4,0l96-56a4,4,0,1,0-4-6.92ZM28,80a4,4,0,0,1,2-3.46l96-56a4,4,0,0,1,4,0l96,56a4,4,0,0,1,0,6.92l-96,56a4,4,0,0,1-4,0l-96-56A4,4,0,0,1,28,80Zm11.94,0L128,131.37,216.06,80,128,28.63ZM142,219.21l-14,8.16L34,172.54a4,4,0,0,0-4,6.92l96,56a4,4,0,0,0,4,0l16-9.34a4,4,0,1,0-4-6.91Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
