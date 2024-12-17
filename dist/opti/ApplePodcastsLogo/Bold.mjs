var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && m(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    A.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && p.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const h = s((o, e) => {
  var l = o, { children: a } = l, t = c(l, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M161.36,130a40,40,0,1,0-66.72,0,28.35,28.35,0,0,0-4.52,4.51,27.86,27.86,0,0,0-5.42,23.67l12.75,56A27.87,27.87,0,0,0,124.77,236h6.46a27.87,27.87,0,0,0,27.32-21.79l12.75-56a27.86,27.86,0,0,0-5.42-23.67A28.35,28.35,0,0,0,161.36,130ZM128,92a16,16,0,1,1-16,16A16,16,0,0,1,128,92Zm19.89,60.88-12.74,56a4,4,0,0,1-3.92,3.12h-6.46a4,4,0,0,1-3.92-3.12l-12.74-56a3.92,3.92,0,0,1,.77-3.37A4,4,0,0,1,112,148H144a4,4,0,0,1,3.15,1.51A3.92,3.92,0,0,1,147.89,152.88ZM236,128a107.88,107.88,0,0,1-38,82.21A12,12,0,0,1,182.47,192a84,84,0,1,0-108.94,0A12,12,0,0,1,58,210.21,108,108,0,1,1,236,128Z" }));
});
h.displayName = "Bold";
export {
  h as Bold
};
