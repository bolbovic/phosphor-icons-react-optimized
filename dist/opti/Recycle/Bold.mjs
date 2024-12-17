var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, e, l) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, A = (a, e) => {
  for (var l in e || (e = {}))
    p.call(e, l) && m(a, l, e[l]);
  if (o)
    for (var l of o(e))
      d.call(e, l) && m(a, l, e[l]);
  return a;
};
var L = (a, e) => {
  var l = {};
  for (var t in a)
    p.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      e.indexOf(t) < 0 && d.call(a, t) && (l[t] = a[t]);
  return l;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((t, l) => {
  var r = t, { children: a } = r, e = L(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, A({ ref: l }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M100,208a12,12,0,0,1-12,12H40a28,28,0,0,1-24.23-42l29.45-50.88-4.76,1.27a12,12,0,1,1-6.2-23.18l32.77-8.77a12,12,0,0,1,14.69,8.48l8.79,32.77a12,12,0,1,1-23.17,6.22L66.08,139l-29.5,51A4,4,0,0,0,40,196H88A12,12,0,0,1,100,208ZM128,36a3.87,3.87,0,0,1,3.46,2l29.45,50.87-4.75-1.27A12,12,0,1,0,150,110.78l32.77,8.79a12,12,0,0,0,14.69-8.48L206.2,78.3A12,12,0,1,0,183,72.08l-1.31,4.86L152.23,26a28,28,0,0,0-48.46,0L80.61,66a12,12,0,1,0,20.77,12l23.16-40A3.87,3.87,0,0,1,128,36ZM240.19,178l-23.14-40a12,12,0,1,0-20.77,12l23.14,40a4,4,0,0,1-3.46,6H157l3.51-3.51a12,12,0,1,0-17-17l-24,24a12,12,0,0,0,0,17l24,24a12,12,0,1,0,17-17L157,220h59a28,28,0,0,0,24.23-42Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
