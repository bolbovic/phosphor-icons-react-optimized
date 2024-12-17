var l = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (h)
    for (var e of h(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && h)
    for (var r of h(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var m = r, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(V, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M131,157.4a4,4,0,0,0-6.07,0l-48,56a4,4,0,0,0,3,6.6h96a4,4,0,0,0,3-6.6ZM88.7,212,128,166.15,167.3,212ZM228,64V176a20,20,0,0,1-20,20h-8a4,4,0,0,1,0-8h8a12,12,0,0,0,12-12V64a12,12,0,0,0-12-12H48A12,12,0,0,0,36,64V176a12,12,0,0,0,12,12h8a4,4,0,0,1,0,8H48a20,20,0,0,1-20-20V64A20,20,0,0,1,48,44H208A20,20,0,0,1,228,64Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
