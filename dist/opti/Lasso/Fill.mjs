var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var c in a)
    p.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && r)
    for (var c of r(a))
      t.indexOf(c) < 0 && i.call(a, c) && (e[c] = a[c]);
  return e;
};
import m, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const C = n((c, e) => {
  var l = c, { children: a } = l, t = d(l, ["children"]);
  return /* @__PURE__ */ m.createElement(A, s({ ref: e }, t), a, /* @__PURE__ */ m.createElement("path", { d: "M93.43,136.11a17.14,17.14,0,0,0-15.35,6.1c9.31,6.56,22.51,11.33,37.43,13.07C110.41,143.33,101.72,137,93.43,136.11Z" }), /* @__PURE__ */ m.createElement("path", { d: "M224,48V208a16,16,0,0,1-16,16H127.65a4,4,0,0,1-3.23-6.34c7.5-10.23,11.58-23.24,11.58-37.84,0-2.79-.13-5.46-.35-8.05C176.79,169.33,208,147.47,208,120c0-29.15-35.14-52-80-52S48,90.84,48,120c0,27.31,30.82,49.07,71.58,51.73a77,77,0,0,1,.42,8.09c0,17.62-7.65,31.95-21,39.32A38.77,38.77,0,0,1,79.27,224H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48Zm-32,72c0-19.51-29.31-36-64-36s-64,16.48-64,36a21.29,21.29,0,0,0,3,10.63A33.65,33.65,0,0,1,95.16,120.2c15,1.63,30.84,13.4,37.54,35.68C165.3,154.47,192,138.62,192,120Z" }));
});
C.displayName = "Fill";
export {
  C as Fill
};