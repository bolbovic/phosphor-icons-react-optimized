var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      A.call(t, e) && c(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && A.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as s } from "react";
import n from "../../lib/OptiBase.mjs";
const B = s((o, e) => {
  var m = o, { children: a } = m, t = l(m, ["children"]);
  return /* @__PURE__ */ f.createElement(n, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M188,104a12,12,0,0,1-12,12H80a12,12,0,0,1,0-24h96A12,12,0,0,1,188,104Zm67.91,27.63A76.29,76.29,0,0,1,182.43,204c-.56,0-1.13,0-1.69,0-14.44,0-29.37-5.78-45.58-17.64a12.08,12.08,0,0,0-14.32,0C104,198.68,88.56,204.44,73.57,204A76.29,76.29,0,0,1,.09,131.63,76,76,0,0,1,76,52H180a76,76,0,0,1,75.91,79.63ZM217.62,92.1A51.56,51.56,0,0,0,180,76H76a52,52,0,0,0-51.94,54.51A52.19,52.19,0,0,0,74.32,180c9.42.29,20-4,32.35-13a36,36,0,0,1,42.66,0c12.36,9,22.91,13.29,32.35,13a52.19,52.19,0,0,0,50.26-49.48A51.63,51.63,0,0,0,217.62,92.1Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
