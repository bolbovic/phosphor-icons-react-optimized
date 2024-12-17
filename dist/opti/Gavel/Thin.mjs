var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, e, l) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, n = (a, e) => {
  for (var l in e || (e = {}))
    i.call(e, l) && o(a, l, e[l]);
  if (m)
    for (var l of m(e))
      p.call(e, l) && o(a, l, e[l]);
  return a;
};
var Z = (a, e) => {
  var l = {};
  for (var t in a)
    i.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && p.call(a, t) && (l[t] = a[t]);
  return l;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((t, l) => {
  var r = t, { children: a } = r, e = Z(r, ["children"]);
  return /* @__PURE__ */ c.createElement(d, n({ ref: l }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M240.49,119.52l-16-16a12,12,0,0,0-17,0l-1.17,1.17-55-55,1.18-1.17a12,12,0,0,0,0-17l-16-16a12,12,0,0,0-17,0l-64,64a12,12,0,0,0,0,17l16,16a12,12,0,0,0,17,0l1.17-1.18L102.34,124l-68.2,68.21A21,21,0,0,0,63.8,221.87L132,153.66l12.69,12.69-1.18,1.17a12,12,0,0,0,0,17l16,16a12,12,0,0,0,17,0l64-64a12,12,0,0,0,0-17ZM77.17,106.83l-16-16a4,4,0,0,1,0-5.66l64-64a4,4,0,0,1,5.66,0l16,16a4,4,0,0,1,0,5.65l-64,64A4,4,0,0,1,77.17,106.83Zm-19,109.38A13,13,0,1,1,39.8,197.87L108,129.66,126.34,148ZM95.31,105.66l50.35-50.35,55,55-50.35,50.35Zm139.52,25.17-64,64a4,4,0,0,1-5.66,0l-16-16a4,4,0,0,1,0-5.65l64-64a4,4,0,0,1,5.66,0l16,16a4,4,0,0,1,0,5.66Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
