var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && r(a, e, t[e]);
  if (m)
    for (var e of m(t))
      d.call(t, e) && r(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var A in a)
    p.call(a, A) && t.indexOf(A) < 0 && (e[A] = a[A]);
  if (a != null && m)
    for (var A of m(a))
      t.indexOf(A) < 0 && d.call(a, A) && (e[A] = a[A]);
  return e;
};
import f, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = s((A, e) => {
  var o = A, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, l({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20ZM77,194.66A108.9,108.9,0,0,0,85.54,182a12,12,0,1,0-20.77-12A83.28,83.28,0,0,1,60,177.27a83.73,83.73,0,0,1,0-98.54A83.28,83.28,0,0,1,64.77,86,12,12,0,1,0,85.54,74,108.9,108.9,0,0,0,77,61.34a83.76,83.76,0,0,1,102.06,0A108.9,108.9,0,0,0,170.46,74a12,12,0,1,0,20.77,12A83.28,83.28,0,0,1,196,78.73a83.73,83.73,0,0,1,0,98.54,83.28,83.28,0,0,1-4.74-7.28,12,12,0,1,0-20.77,12A108.9,108.9,0,0,0,179,194.66a83.76,83.76,0,0,1-102.06,0Zm22.2-80.14A110,110,0,0,1,100,128a110,110,0,0,1-.83,13.48A12,12,0,0,1,87.27,152a12.83,12.83,0,0,1-1.5-.09,12,12,0,0,1-10.42-13.39A85.75,85.75,0,0,0,76,128a85.75,85.75,0,0,0-.65-10.52,12,12,0,1,1,23.82-3Zm71.06,37.39a12.83,12.83,0,0,1-1.5.09,12,12,0,0,1-11.9-10.52,109.88,109.88,0,0,1,0-27,12,12,0,1,1,23.82,3,85.46,85.46,0,0,0,0,21A12,12,0,0,1,170.23,151.91Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
