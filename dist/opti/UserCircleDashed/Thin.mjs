var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      A.call(t, e) && i(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as s } from "react";
import M from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var o = m, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ c.createElement(M, Z({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M100.13,36A4,4,0,0,1,103,31.17a100.09,100.09,0,0,1,50,0,4,4,0,0,1-1,7.88,4.36,4.36,0,0,1-1-.13,92,92,0,0,0-46,0A4,4,0,0,1,100.13,36ZM34.42,106.16a4,4,0,0,0,4.92-2.79,91.92,91.92,0,0,1,23-39.82,4,4,0,0,0-5.71-5.61,100.15,100.15,0,0,0-25,43.3A4,4,0,0,0,34.42,106.16ZM151,217.09a92,92,0,0,1-46,0,4,4,0,0,0-2,7.75,100,100,0,0,0,50,0,4,4,0,1,0-2-7.74Zm65.65-113.71a4,4,0,1,0,7.7-2.14,100.08,100.08,0,0,0-25-43.31,4,4,0,1,0-5.71,5.61A92,92,0,0,1,216.65,103.38Zm7.73,51.39a99.77,99.77,0,0,1-29.5,47.57,4,4,0,0,1-6.24-1.16,68,68,0,0,0-121.28,0,4,4,0,0,1-2.83,2.12,3.61,3.61,0,0,1-.73.07,4,4,0,0,1-2.68-1,99.8,99.8,0,0,1-29.5-47.58,4,4,0,1,1,7.71-2.13A91.89,91.89,0,0,0,62.8,192.91a75.66,75.66,0,0,1,44.54-34.08,44,44,0,1,1,41.32,0,75.66,75.66,0,0,1,44.54,34.08,91.83,91.83,0,0,0,23.47-40.28,4,4,0,0,1,7.71,2.14ZM128,156a36,36,0,1,0-36-36A36,36,0,0,0,128,156Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
