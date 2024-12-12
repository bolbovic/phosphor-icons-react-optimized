var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && m(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var c in a)
    o.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && r)
    for (var c of r(a))
      t.indexOf(c) < 0 && i.call(a, c) && (e[c] = a[c]);
  return e;
};
import f, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const C = n((c, e) => {
  var l = c, { children: a } = l, t = s(l, ["children"]);
  return /* @__PURE__ */ f.createElement(A, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M222.53,144.83A96.09,96.09,0,0,0,111.17,33.47,55.38,55.38,0,0,0,80,24,56.06,56.06,0,0,0,24,80a55.38,55.38,0,0,0,9.47,31.17A96.09,96.09,0,0,0,144.83,222.53,55.38,55.38,0,0,0,176,232a56.06,56.06,0,0,0,56-56A55.38,55.38,0,0,0,222.53,144.83ZM128,184c-22.06,0-40-14.36-40-32a8,8,0,0,1,16,0c0,8.67,11,16,24,16s24-7.33,24-16c0-9.48-8.61-13-26.88-18.26C109.37,129.2,89.78,123.55,89.78,104c0-18.24,16.43-32,38.22-32,15.72,0,29.18,7.3,35.12,19a8,8,0,1,1-14.27,7.22C145.64,91.94,137.65,88,128,88c-12.67,0-22.22,6.88-22.22,16,0,7,9,10.1,23.77,14.36C145.78,123,168,129.45,168,152,168,169.64,150.06,184,128,184Z" }));
});
C.displayName = "Fill";
export {
  C as Fill
};
