var p = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? p(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      L.call(t, e) && o(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var A in a)
    H.call(a, A) && t.indexOf(A) < 0 && (e[A] = a[A]);
  if (a != null && m)
    for (var A of m(a))
      t.indexOf(A) < 0 && L.call(a, A) && (e[A] = a[A]);
  return e;
};
import l, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((A, e) => {
  var r = A, { children: a } = r, t = i(r, ["children"]);
  return /* @__PURE__ */ l.createElement(f, h({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M208,98H146.49L100.25,51.76A6,6,0,0,0,96,50H88A14,14,0,0,0,74.73,68.43L84.59,98H58.49L36.25,75.76A6,6,0,0,0,32,74H24A14,14,0,0,0,10.6,92l14.07,46.9A37.77,37.77,0,0,0,61.07,166H240a6,6,0,0,0,6-6V136A38,38,0,0,0,208,98Zm26,56H61.07a25.86,25.86,0,0,1-24.91-18.53L22.1,88.57a1.91,1.91,0,0,1,.31-1.76A1.93,1.93,0,0,1,24,86h5.51l22.24,22.24A6,6,0,0,0,56,110H92.91a6,6,0,0,0,5.69-7.9L86.11,64.63A2,2,0,0,1,88,62h5.51l46.24,46.24A6,6,0,0,0,144,110h64a26,26,0,0,1,26,26Zm-12,46a14,14,0,1,1-14-14A14,14,0,0,1,222,200Zm-96,0a14,14,0,1,1-14-14A14,14,0,0,1,126,200Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
