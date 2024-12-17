var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var L = (a, l, e) => l in a ? i(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, d = (a, l) => {
  for (var e in l || (l = {}))
    m.call(l, e) && L(a, e, l[e]);
  if (o)
    for (var e of o(l))
      p.call(l, e) && L(a, e, l[e]);
  return a;
};
var c = (a, l) => {
  var e = {};
  for (var t in a)
    m.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import n from "../../lib/OptiBase.mjs";
const A = s((t, e) => {
  var r = t, { children: a } = r, l = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(n, d({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M216,36H40A20,20,0,0,0,20,56V208a12,12,0,0,0,17.37,10.73L64,205.42l26.63,13.31a12,12,0,0,0,10.74,0L128,205.42l26.63,13.31a12,12,0,0,0,10.74,0L192,205.42l26.63,13.31A12,12,0,0,0,236,208V56A20,20,0,0,0,216,36Zm-4,152.58-14.63-7.31a12,12,0,0,0-10.74,0L160,194.58l-26.63-13.31a12,12,0,0,0-10.74,0L96,194.58,69.37,181.27a12,12,0,0,0-10.74,0L44,188.58V60H212ZM95.51,135.51,111,120,95.51,104.49a12,12,0,0,1,17-17L128,103l15.51-15.52a12,12,0,0,1,17,17L145,120l15.52,15.51a12,12,0,0,1-17,17L128,137l-15.51,15.52a12,12,0,0,1-17-17Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
