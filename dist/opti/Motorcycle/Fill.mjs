var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? s(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, p = (a, l) => {
  for (var e in l || (l = {}))
    c.call(l, e) && o(a, e, l[e]);
  if (r)
    for (var e of r(l))
      i.call(l, e) && o(a, e, l[e]);
  return a;
};
var H = (a, l) => {
  var e = {};
  for (var t in a)
    c.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as A } from "react";
import d from "../../lib/OptiBase.mjs";
const h = A((t, e) => {
  var m = t, { children: a } = m, l = H(m, ["children"]);
  return /* @__PURE__ */ f.createElement(d, p({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M216,120a41,41,0,0,0-6.6.55l-5.82-15.14A55.64,55.64,0,0,1,216,104a8,8,0,0,0,0-16H196.88L183.47,53.13A8,8,0,0,0,176,48H144a8,8,0,0,0,0,16h26.51l9.23,24H152c-18.5,0-33.5,4.31-43.37,12.46a16,16,0,0,1-16.76,2.07c-10.58-4.81-73.29-30.12-73.8-30.26a8,8,0,0,0-5,15.19S68.57,109.4,79.6,120.4A55.67,55.67,0,0,1,95.43,152H79.2a40,40,0,1,0,0,16h52.12a31.91,31.91,0,0,0,30.74-23.1,56,56,0,0,1,26.59-33.72l5.82,15.13A40,40,0,1,0,216,120ZM40,168H62.62a24,24,0,1,1,0-16H40a8,8,0,0,0,0,16Zm176,16a24,24,0,0,1-15.58-42.23l8.11,21.1a8,8,0,1,0,14.94-5.74L215.35,136l.65,0a24,24,0,0,1,0,48Z" }));
});
h.displayName = "Fill";
export {
  h as Fill
};
