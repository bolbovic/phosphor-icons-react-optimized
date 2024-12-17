var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, e, l) => e in a ? d(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, c = (a, e) => {
  for (var l in e || (e = {}))
    i.call(e, l) && o(a, l, e[l]);
  if (r)
    for (var l of r(e))
      p.call(e, l) && o(a, l, e[l]);
  return a;
};
var f = (a, e) => {
  var l = {};
  for (var t in a)
    i.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      e.indexOf(t) < 0 && p.call(a, t) && (l[t] = a[t]);
  return l;
};
import s, { forwardRef as n } from "react";
import h from "../../lib/OptiBase.mjs";
const A = n((t, l) => {
  var m = t, { children: a } = m, e = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(h, c({ ref: l }, e), a, /* @__PURE__ */ s.createElement("path", { d: "M233.23,22.75a50.46,50.46,0,0,0-71.31,0L108.68,76A15.92,15.92,0,0,0,104,87.3V104H87.17a16.14,16.14,0,0,0-9.66,3.24,8,8,0,0,0-.82.72l-8,8a16,16,0,0,0,0,22.63l18.7,18.71-77,77.05a8,8,0,0,0,11.32,11.32l77-77.06,18.71,18.71a16,16,0,0,0,22.62,0l8-8a8.08,8.08,0,0,0,.72-.83,16,16,0,0,0,3.25-9.66V152h16.69A15.86,15.86,0,0,0,180,147.3l53.23-53.23a50.43,50.43,0,0,0,0-71.32ZM205.66,61.64l-56,56a8,8,0,0,1-11.32-11.31l56-56a8,8,0,0,1,11.32,11.32Z" }));
});
A.displayName = "Fill";
export {
  A as Fill
};
