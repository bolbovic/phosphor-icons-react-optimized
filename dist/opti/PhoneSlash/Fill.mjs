var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? d(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, p = (a, l) => {
  for (var e in l || (l = {}))
    c.call(l, e) && o(a, e, l[e]);
  if (r)
    for (var e of r(l))
      i.call(l, e) && o(a, e, l[e]);
  return a;
};
var f = (a, l) => {
  var e = {};
  for (var t in a)
    c.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import s, { forwardRef as n } from "react";
import h from "../../lib/OptiBase.mjs";
const E = n((t, e) => {
  var m = t, { children: a } = m, l = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(h, p({ ref: e }, l), a, /* @__PURE__ */ s.createElement("path", { d: "M236.28,177.85a16,16,0,0,1-18.38,5.07l-24.76-19a3.43,3.43,0,0,1-.53-.48L109.18,71.62a4,4,0,0,1,2.55-6.68c43-4.62,87.74,9.12,119.86,41.24h0C251.58,126.17,253.51,155.64,236.28,177.85ZM53.93,34.62A8,8,0,1,0,42.09,45.38L69.71,75.77a142,142,0,0,0-45.3,30.41c-20,20-21.92,49.46-4.69,71.67a16,16,0,0,0,18.38,5.07l49-17.37.29-.11a16,16,0,0,0,9.75-11.72l5.9-29.51a73.64,73.64,0,0,1,8.57-2.39l90.5,99.56a8,8,0,1,0,11.84-10.76Z" }));
});
E.displayName = "Fill";
export {
  E as Fill
};
