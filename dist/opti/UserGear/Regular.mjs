var R = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? R(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, s = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && o(a, e, l[e]);
  if (t)
    for (var e of t(l))
      c.call(l, e) && o(a, e, l[e]);
  return a;
};
var f = (a, l) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && l.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      l.indexOf(r) < 0 && c.call(a, r) && (e[r] = a[r]);
  return e;
};
import i, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const n = Z((r, e) => {
  var m = r, { children: a } = m, l = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(d, s({ ref: e }, l), a, /* @__PURE__ */ i.createElement("path", { d: "M144,157.68a68,68,0,1,0-71.9,0c-20.65,6.76-39.23,19.39-54.17,37.17a8,8,0,1,0,12.24,10.3C50.25,181.19,77.91,168,108,168s57.75,13.19,77.87,37.15a8,8,0,0,0,12.26-10.3C183.18,177.07,164.6,164.44,144,157.68ZM56,100a52,52,0,1,1,52,52A52.06,52.06,0,0,1,56,100Zm196.25,43.07-4.66-2.69a23.6,23.6,0,0,0,0-8.76l4.66-2.69a8,8,0,1,0-8-13.86l-4.67,2.7a23.92,23.92,0,0,0-7.58-4.39V108a8,8,0,0,0-16,0v5.38a23.92,23.92,0,0,0-7.58,4.39l-4.67-2.7a8,8,0,1,0-8,13.86l4.66,2.69a23.6,23.6,0,0,0,0,8.76l-4.66,2.69a8,8,0,0,0,8,13.86l4.67-2.7a23.92,23.92,0,0,0,7.58,4.39V164a8,8,0,0,0,16,0v-5.38a23.92,23.92,0,0,0,7.58-4.39l4.67,2.7a7.92,7.92,0,0,0,4,1.07,8,8,0,0,0,4-14.93ZM216,136a8,8,0,1,1,8,8A8,8,0,0,1,216,136Z" }));
});
n.displayName = "Regular";
export {
  n as Regular
};
