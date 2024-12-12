var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      l.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as A } from "react";
import L from "../../lib/OptiBase.mjs";
const d = A((r, e) => {
  var c = r, { children: a } = c, t = n(c, ["children"]);
  return /* @__PURE__ */ f.createElement(L, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M171.71,118.51a4,4,0,0,1-2.22,5.2l-35.16,14.07L155.2,165.6a4,4,0,1,1-6.4,4.8L128,142.67,107.2,170.4a4,4,0,0,1-6.4-4.8l20.87-27.82L86.51,123.71a4,4,0,1,1,3-7.42L124,130.09V96a4,4,0,0,1,8,0v34.09l34.51-13.8A4,4,0,0,1,171.71,118.51ZM220,56v56c0,51.16-24.73,82.12-45.47,99.1-22.4,18.32-44.55,24.5-45.48,24.76a4,4,0,0,1-2.1,0c-.93-.26-23.08-6.44-45.48-24.76C60.73,194.12,36,163.16,36,112V56A12,12,0,0,1,48,44H208A12,12,0,0,1,220,56Zm-8,0a4,4,0,0,0-4-4H48a4,4,0,0,0-4,4v56c0,38.44,14.23,69.63,42.29,92.71A132.23,132.23,0,0,0,128,227.82a132.45,132.45,0,0,0,41.71-23.11C197.77,181.63,212,150.44,212,112Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
