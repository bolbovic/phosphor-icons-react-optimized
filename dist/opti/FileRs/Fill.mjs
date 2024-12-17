var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && c(a, e, t[e]);
  if (m)
    for (var e of m(t))
      A.call(t, e) && c(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var l in a)
    o.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && A.call(a, l) && (e[l] = a[l]);
  return e;
};
import Z, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const H = h((l, e) => {
  var r = l, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, i({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v76a4,4,0,0,0,4,4H172a4,4,0,0,1,4,4V228a4,4,0,0,0,4,4h20a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM152,88V44l44,44ZM63.42,144H48a8,8,0,0,0-8,8v55.73A8.17,8.17,0,0,0,47.47,216,8,8,0,0,0,56,208v-8h8a28.48,28.48,0,0,0,5.73-.59L77.09,212a8,8,0,0,0,11.81,2.3,8.14,8.14,0,0,0,1.91-10.54l-7-12A27.92,27.92,0,0,0,92,171.36C91.65,156.05,78.74,144,63.42,144Zm.23,40H56V160h8a12,12,0,0,1,12,13.16A12.25,12.25,0,0,1,63.65,184Zm92.16,12.31a20.82,20.82,0,0,1-9.19,15.23C141.43,215,135,216,129.13,216A61.14,61.14,0,0,1,114,214a8,8,0,1,1,4.3-15.41c4.38,1.2,14.95,2.7,19.55-.36.88-.59,1.83-1.52,2.14-3.93.35-2.67-.71-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.11a20.56,20.56,0,0,1,9-14.95c11.84-8,30.71-3.31,32.83-2.76a8,8,0,0,1-4.07,15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54,4.54,0,0,0-2,3.67c-.12.9-.14,1.09,1.11,1.9,2.31,1.49,6.45,2.68,10.45,3.84C141.49,174.17,158.05,179,155.81,196.31Z" }));
});
H.displayName = "Fill";
export {
  H as Fill
};
