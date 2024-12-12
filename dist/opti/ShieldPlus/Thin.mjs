var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as v } from "react";
import A from "../../lib/OptiBase.mjs";
const H = v((m, e) => {
  var c = m, { children: a } = c, t = n(c, ["children"]);
  return /* @__PURE__ */ f.createElement(A, h({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M164,128a4,4,0,0,1-4,4H132v28a4,4,0,0,1-8,0V132H96a4,4,0,0,1,0-8h28V96a4,4,0,0,1,8,0v28h28A4,4,0,0,1,164,128Zm56-72v56c0,51.16-24.73,82.12-45.47,99.1-22.4,18.32-44.55,24.5-45.48,24.76a4,4,0,0,1-2.1,0c-.93-.26-23.08-6.44-45.48-24.76C60.73,194.12,36,163.16,36,112V56A12,12,0,0,1,48,44H208A12,12,0,0,1,220,56Zm-8,0a4,4,0,0,0-4-4H48a4,4,0,0,0-4,4v56c0,38.44,14.23,69.63,42.29,92.71A132.23,132.23,0,0,0,128,227.82a132.45,132.45,0,0,0,41.71-23.11C197.77,181.63,212,150.44,212,112Z" }));
});
H.displayName = "Thin";
export {
  H as Thin
};
