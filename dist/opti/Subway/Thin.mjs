var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && A(a, e, t[e]);
  if (m)
    for (var e of m(t))
      o.call(t, e) && A(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var h in a)
    V.call(a, h) && t.indexOf(h) < 0 && (e[h] = a[h]);
  if (a != null && m)
    for (var h of m(a))
      t.indexOf(h) < 0 && o.call(a, h) && (e[h] = a[h]);
  return e;
};
import H, { forwardRef as l } from "react";
import n from "../../lib/OptiBase.mjs";
const v = l((h, e) => {
  var r = h, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ H.createElement(n, i({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M220,96V208a4,4,0,0,1-8,0V96a60.07,60.07,0,0,0-60-60H104A60.07,60.07,0,0,0,44,96V208a4,4,0,0,1-8,0V96a68.07,68.07,0,0,1,68-68h48A68.07,68.07,0,0,1,220,96Zm-40,0v72a20,20,0,0,1-20,20h-1.53l5.11,10.21a4,4,0,0,1-1.79,5.37A4.12,4.12,0,0,1,160,204a4,4,0,0,1-3.58-2.21L149.53,188H106.47l-6.89,13.79A4,4,0,0,1,96,204a4.12,4.12,0,0,1-1.79-.42,4,4,0,0,1-1.79-5.37L97.53,188H96a20,20,0,0,1-20-20V96A20,20,0,0,1,96,76h64A20,20,0,0,1,180,96ZM84,96v52h88V96a12,12,0,0,0-12-12H96A12,12,0,0,0,84,96Zm32,60v24h24V156ZM96,180h12V156H84v12A12,12,0,0,0,96,180Zm76-12V156H148v24h12A12,12,0,0,0,172,168Z" }));
});
v.displayName = "Thin";
export {
  v as Thin
};
