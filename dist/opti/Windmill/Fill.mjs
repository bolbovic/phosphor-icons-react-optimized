var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, e, l) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, A = (a, e) => {
  for (var l in e || (e = {}))
    i.call(e, l) && o(a, l, e[l]);
  if (r)
    for (var l of r(e))
      p.call(e, l) && o(a, l, e[l]);
  return a;
};
var L = (a, e) => {
  var l = {};
  for (var t in a)
    i.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      e.indexOf(t) < 0 && p.call(a, t) && (l[t] = a[t]);
  return l;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const n = s((t, l) => {
  var m = t, { children: a } = m, e = L(m, ["children"]);
  return /* @__PURE__ */ c.createElement(d, A({ ref: l }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M232,231.47a8.17,8.17,0,0,0-8.25-7.47H182.94l-6.3-44.12,3.24,1.91a16,16,0,0,0,21.91-5.67l11.81-20a16.49,16.49,0,0,0,2.11-11.49,15.92,15.92,0,0,0-7.6-10.74L148.93,99a8.18,8.18,0,0,1-3.33-10.63,8,8,0,0,1,11.21-3.3l20.95,12.33A4,4,0,0,0,183.24,96l30.55-51.9a16,16,0,0,0-5.67-21.92l-20.34-12a16,16,0,0,0-21.91,5.67l-35,59.42a8,8,0,0,1-11.79,2.27A8.13,8.13,0,0,1,117.21,67l12.23-20.78A4,4,0,0,0,128,40.76L76.12,10.22a16,16,0,0,0-21.91,5.67l-11.81,20a16.47,16.47,0,0,0-2.11,11.48,16,16,0,0,0,7.6,10.75L107.08,93a8.16,8.16,0,0,1,3.47,10.3,8,8,0,0,1-11.36,3.62l-21-12.34A4,4,0,0,0,72.76,96l-30.55,51.9a16,16,0,0,0,5.67,21.91l20.34,12a15.57,15.57,0,0,0,10.58,2L73.06,224H32.27A8.17,8.17,0,0,0,24,231.47,8,8,0,0,0,32,240H224A8,8,0,0,0,232,231.47ZM89.22,224,98,162.8l12.77-21.7h0L125,116.93a8.18,8.18,0,0,1,10.62-3.33,8,8,0,0,1,3.3,11.21l-12.33,21a4,4,0,0,0,1.42,5.47l31,18.25L166.78,224Z" }));
});
n.displayName = "Fill";
export {
  n as Fill
};
