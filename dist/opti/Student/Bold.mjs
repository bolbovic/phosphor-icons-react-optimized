var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, l, e) => l in a ? i(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, s = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && m(a, e, l[e]);
  if (o)
    for (var e of o(l))
      d.call(l, e) && m(a, e, l[e]);
  return a;
};
var c = (a, l) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      l.indexOf(t) < 0 && d.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as A } from "react";
import n from "../../lib/OptiBase.mjs";
const B = A((t, e) => {
  var r = t, { children: a } = r, l = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(n, s({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M227.79,52.62l-96-32a11.85,11.85,0,0,0-7.58,0l-96,32A12,12,0,0,0,20,63.37,6.05,6.05,0,0,0,20,64v80a12,12,0,0,0,24,0V80.65l23.71,7.9a67.92,67.92,0,0,0,18.42,85A100.36,100.36,0,0,0,46,209.44a12,12,0,1,0,20.1,13.11C80.37,200.59,103,188,128,188s47.63,12.59,61.95,34.55a12,12,0,1,0,20.1-13.11,100.36,100.36,0,0,0-40.18-35.92,67.92,67.92,0,0,0,18.42-85l39.5-13.17a12,12,0,0,0,0-22.76Zm-99.79-8L186.05,64,128,83.35,70,64ZM172,120A44,44,0,1,1,90.94,96.29l33.27,11.09a11.89,11.89,0,0,0,7.58,0l33.27-11.09A43.85,43.85,0,0,1,172,120Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
