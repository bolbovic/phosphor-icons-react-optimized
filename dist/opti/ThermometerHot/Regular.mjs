var i = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? i(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, l = (a, m) => {
  for (var e in m || (m = {}))
    p.call(m, e) && o(a, e, m[e]);
  if (t)
    for (var e of t(m))
      Z.call(m, e) && o(a, e, m[e]);
  return a;
};
var A = (a, m) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && m.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      m.indexOf(r) < 0 && Z.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import C from "../../lib/OptiBase.mjs";
const R = s((r, e) => {
  var c = r, { children: a } = c, m = A(c, ["children"]);
  return /* @__PURE__ */ f.createElement(C, l({ ref: e }, m), a, /* @__PURE__ */ f.createElement("path", { d: "M128,153V48a8,8,0,0,0-16,0V153a32,32,0,1,0,16,0Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,120,200Zm40-66V48a40,40,0,0,0-80,0v86a64,64,0,1,0,80,0Zm-40,98a48,48,0,0,1-27.42-87.4A8,8,0,0,0,96,138V48a24,24,0,0,1,48,0v90a8,8,0,0,0,3.42,6.56A48,48,0,0,1,120,232ZM177.3,80.77a8,8,0,0,1,2.33-11.07c15-9.79,26.87-4.75,35.51-1.06C223,72,227.76,74,235.63,68.89a8,8,0,0,1,8.74,13.41C237.88,86.53,232,88,226.69,88c-7,0-12.92-2.54-17.83-4.63C201,80,196.24,78,188.37,83.11A8,8,0,0,1,177.3,80.77Zm69.4,22.46a8,8,0,0,1-2.33,11.07C237.88,118.53,232,120,226.69,120c-7,0-12.92-2.54-17.83-4.63-7.87-3.36-12.62-5.38-20.49-.25a8,8,0,0,1-8.74-13.41c15-9.79,26.87-4.75,35.51-1.06,7.87,3.36,12.62,5.39,20.49.25A8,8,0,0,1,246.7,103.23Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
