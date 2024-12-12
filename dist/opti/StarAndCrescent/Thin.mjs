var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? f(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, L = (a, l) => {
  for (var e in l || (l = {}))
    i.call(l, e) && o(a, e, l[e]);
  if (m)
    for (var e of m(l))
      p.call(l, e) && o(a, e, l[e]);
  return a;
};
var n = (a, l) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = s((t, e) => {
  var r = t, { children: a } = r, l = n(r, ["children"]);
  return /* @__PURE__ */ c.createElement(Z, L({ ref: e }, l), a, /* @__PURE__ */ c.createElement("path", { d: "M153.82,53.16a4,4,0,0,0,0-7.13A91.09,91.09,0,0,0,112,36a92,92,0,0,0,0,184,91.09,91.09,0,0,0,41.82-10,4,4,0,0,0,0-7.13,84,84,0,0,1,0-149.68ZM100,128a91.63,91.63,0,0,0,43.21,78A83.23,83.23,0,0,1,112,212a84,84,0,0,1,0-168,83.23,83.23,0,0,1,31.21,6A91.63,91.63,0,0,0,100,128Zm149.58-3.67-28.71-12.4-2.49-32.24a4,4,0,0,0-7.08-2.24l-20.19,24.46L161,94.45a4,4,0,0,0-4.41,5.91L172.82,128l-16.27,27.64a4,4,0,0,0,4.41,5.91l30.15-7.46,20.19,24.46a4,4,0,0,0,3.09,1.45,3.81,3.81,0,0,0,1.2-.19,4,4,0,0,0,2.79-3.5l2.49-32.24,28.71-12.4a4,4,0,0,0,0-7.34Zm-34.1,13.35a4,4,0,0,0-2.4,3.36l-1.92,24.77-15.49-18.76a4,4,0,0,0-3.08-1.45,4,4,0,0,0-1,.12l-23.36,5.78L180.91,130a4,4,0,0,0,0-4.06L168.27,104.5l23.36,5.78a4,4,0,0,0,4-1.33l15.49-18.76L213.08,115a4,4,0,0,0,2.4,3.36L237.9,128Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
