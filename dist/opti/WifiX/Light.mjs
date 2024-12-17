var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import L, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((m, e) => {
  var o = m, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ L.createElement(s, l({ ref: e }, t), a, /* @__PURE__ */ L.createElement("path", { d: "M138,204a10,10,0,1,1-10-10A10,10,0,0,1,138,204ZM208.48,80l19.76-19.76a6,6,0,0,0-8.48-8.48L200,71.52,180.24,51.76a6,6,0,0,0-8.48,8.48L191.52,80,171.76,99.76a6,6,0,1,0,8.48,8.48L200,88.48l19.76,19.76a6,6,0,0,0,8.48-8.48Zm-36.95,80.15a74,74,0,0,0-87.06,0,6,6,0,0,0,7.06,9.7,62,62,0,0,1,72.94,0,6,6,0,0,0,8.38-1.32A6,6,0,0,0,171.53,160.15Zm-35.82-98a6,6,0,0,0,.58-12c-2.75-.13-5.54-.2-8.29-.2A170.32,170.32,0,0,0,20.19,88.55a6,6,0,1,0,7.62,9.27A158.26,158.26,0,0,1,128,62C130.56,62,133.16,62.06,135.71,62.18Zm-.12,48.08a6,6,0,1,0,.82-12c-2.79-.19-5.62-.29-8.41-.29a120.75,120.75,0,0,0-75.73,26.34,6,6,0,0,0,7.46,9.41A108.78,108.78,0,0,1,128,110C130.52,110,133.08,110.09,135.59,110.26Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
