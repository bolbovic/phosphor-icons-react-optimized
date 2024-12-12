var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, e, l) => e in a ? s(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, p = (a, e) => {
  for (var l in e || (e = {}))
    A.call(e, l) && o(a, l, e[l]);
  if (r)
    for (var l of r(e))
      i.call(e, l) && o(a, l, e[l]);
  return a;
};
var c = (a, e) => {
  var l = {};
  for (var t in a)
    A.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      e.indexOf(t) < 0 && i.call(a, t) && (l[t] = a[t]);
  return l;
};
import f, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const H = d((t, l) => {
  var m = t, { children: a } = m, e = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(n, p({ ref: l }, e), a, /* @__PURE__ */ f.createElement("path", { d: "M96,208a8,8,0,0,1-8,8H40a24,24,0,0,1-20.77-36l28-48.3-13.82-8A8,8,0,0,1,35.33,109l32.77-8.77a8,8,0,0,1,9.8,5.66l8.79,32.77a8,8,0,0,1-11.73,9l-13.88-8L33.11,188A8,8,0,0,0,40,200H88A8,8,0,0,1,96,208ZM128,32a7.85,7.85,0,0,1,6.92,4l28,48.3-13.82,8A8,8,0,0,0,151,106.92l32.78,8.79a8.23,8.23,0,0,0,2.07.27,8,8,0,0,0,7.72-5.93l8.79-32.79a8,8,0,0,0-11.72-9l-13.89,8L148.77,28a24,24,0,0,0-41.54,0L84.07,68a8,8,0,0,0,13.85,8l23.16-40A7.85,7.85,0,0,1,128,32ZM236.73,180l-23.14-40a8,8,0,0,0-13.84,8l23.14,40A8,8,0,0,1,216,200H160V184a8,8,0,0,0-13.66-5.66l-24,24a8,8,0,0,0,0,11.32l24,24A8,8,0,0,0,160,232V216h56a24,24,0,0,0,20.77-36Z" }));
});
H.displayName = "Fill";
export {
  H as Fill
};
