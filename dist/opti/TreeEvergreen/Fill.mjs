var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? H(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, c = (a, l) => {
  for (var e in l || (l = {}))
    i.call(l, e) && o(a, e, l[e]);
  if (r)
    for (var e of r(l))
      p.call(l, e) && o(a, e, l[e]);
  return a;
};
var f = (a, l) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import s, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const A = d((t, e) => {
  var m = t, { children: a } = m, l = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(n, c({ ref: e }, l), a, /* @__PURE__ */ s.createElement("path", { d: "M231.19,195.51A8,8,0,0,1,224,200H136v40a8,8,0,0,1-16,0V200H32a8,8,0,0,1-6.31-12.91l46-59.09H48a8,8,0,0,1-6.34-12.88l80-104a8,8,0,0,1,12.68,0l80,104A8,8,0,0,1,208,128H184.36l45.95,59.09A8,8,0,0,1,231.19,195.51Z" }));
});
A.displayName = "Fill";
export {
  A as Fill
};
