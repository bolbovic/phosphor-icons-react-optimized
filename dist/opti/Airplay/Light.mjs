var s = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
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
import f, { forwardRef as A } from "react";
import V from "../../lib/OptiBase.mjs";
const d = A((r, e) => {
  var m = r, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(V, l({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M132.56,156.1a6,6,0,0,0-9.11,0l-48,56A6,6,0,0,0,80,222h96a6,6,0,0,0,4.56-9.9ZM93.05,210l35-40.78L163,210ZM230,64V176a22,22,0,0,1-22,22h-8a6,6,0,0,1,0-12h8a10,10,0,0,0,10-10V64a10,10,0,0,0-10-10H48A10,10,0,0,0,38,64V176a10,10,0,0,0,10,10h8a6,6,0,0,1,0,12H48a22,22,0,0,1-22-22V64A22,22,0,0,1,48,42H208A22,22,0,0,1,230,64Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
