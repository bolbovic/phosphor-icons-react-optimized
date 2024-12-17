var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      A.call(t, e) && i(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && A.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((r, e) => {
  var o = r, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ s.createElement(h, c({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M200.16,55.88a102,102,0,1,0,0,144.24A101.4,101.4,0,0,0,200.16,55.88ZM64.33,64.36a89.62,89.62,0,0,1,57.25-26.07A89.32,89.32,0,0,1,95.46,95.47a89.38,89.38,0,0,1-57.21,26.11A89.61,89.61,0,0,1,64.33,64.36ZM38.2,133.63A101.36,101.36,0,0,0,104,104a101.24,101.24,0,0,0,29.68-65.72,89.76,89.76,0,0,1,84.17,84.13,102,102,0,0,0-95.43,95.39A89.76,89.76,0,0,1,38.2,133.63Zm153.47,58a89.63,89.63,0,0,1-57.25,26.06,89.94,89.94,0,0,1,83.33-83.28A89.61,89.61,0,0,1,191.67,191.64Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
