var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      A.call(t, e) && i(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && A.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const l = s((r, e) => {
  var o = r, { children: a } = o, t = V(o, ["children"]);
  return /* @__PURE__ */ f.createElement(d, c({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M224,74a50.06,50.06,0,0,1-50-50,6,6,0,0,0-6-6H128a6,6,0,0,0-6,6V156a22,22,0,1,1-31.43-19.89A6,6,0,0,0,94,130.69V88a6,6,0,0,0-7-5.91C52.2,88.28,26,120.05,26,156a74,74,0,0,0,148,0V112.93A101.28,101.28,0,0,0,224,126a6,6,0,0,0,6-6V80A6,6,0,0,0,224,74Zm-6,39.8a89.13,89.13,0,0,1-46.5-16.69A6,6,0,0,0,162,102v54a62,62,0,0,1-124,0c0-27.72,18.47-52.48,44-60.38v31.53A34,34,0,1,0,134,156V30h28.29A62.09,62.09,0,0,0,218,85.71Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
