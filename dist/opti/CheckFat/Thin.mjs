var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? s(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, n = (a, l) => {
  for (var e in l || (l = {}))
    i.call(l, e) && o(a, e, l[e]);
  if (r)
    for (var e of r(l))
      p.call(l, e) && o(a, e, l[e]);
  return a;
};
var c = (a, l) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const A = d((t, e) => {
  var m = t, { children: a } = m, l = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(h, n({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M240.47,71.09l-24-23.58a12,12,0,0,0-17,0L104,141.83l-39.5-38.32a12,12,0,0,0-17,0l-24,24a12,12,0,0,0,0,17l71.61,72a12,12,0,0,0,17,0L240.49,88.08A12,12,0,0,0,240.47,71.09Zm-5.63,11.34L106.43,210.83a4,4,0,0,1-5.65,0l-71.61-72a4,4,0,0,1,0-5.66l24-24A3.94,3.94,0,0,1,56,108a4.11,4.11,0,0,1,2.89,1.21l42.35,41.08a4,4,0,0,0,5.59,0l98.37-97.1a4,4,0,0,1,5.68,0l24,23.58A4,4,0,0,1,234.84,82.43Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
