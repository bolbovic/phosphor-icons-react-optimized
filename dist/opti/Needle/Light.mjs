var s = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && c(a, e, t[e]);
  if (l)
    for (var e of l(t))
      i.call(t, e) && c(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as A } from "react";
import d from "../../lib/OptiBase.mjs";
const n = A((r, e) => {
  var m = r, { children: a } = m, t = h(m, ["children"]);
  return /* @__PURE__ */ f.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M188.24,67.76a6,6,0,0,1,0,8.48l-16,16a6,6,0,0,1-8.48-8.48l16-16A6,6,0,0,1,188.24,67.76ZM222,72a37.74,37.74,0,0,1-11.13,26.87l-24,24a6,6,0,0,1-3.23,1.67c-52.14,9-138.53,94.84-139.4,95.7a5.81,5.81,0,0,1-1.82,1.25h0A6.12,6.12,0,0,1,40,222a6,6,0,0,1-4.24-10.24h0c1.4-1.41,86.78-87.44,95.69-139.39a6,6,0,0,1,1.67-3.23l24-24A38,38,0,0,1,222,72Zm-12,0a26,26,0,0,0-44.38-18.38L142.93,76.3c-4.14,20.79-18.62,47.61-43.13,79.9,32.29-24.51,59.11-39,79.9-43.13l22.68-22.69A25.79,25.79,0,0,0,210,72Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
