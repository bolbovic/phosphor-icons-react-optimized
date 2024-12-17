var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const Z = s((r, e) => {
  var c = r, { children: a } = c, t = n(c, ["children"]);
  return /* @__PURE__ */ f.createElement(A, l({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M128,20a84.09,84.09,0,0,0-84,84c0,22.57,9.08,47.63,24.28,67,12.68,16.17,28,26.81,44.22,31l-12.18,28.4A4,4,0,0,0,104,236h48a4,4,0,0,0,3.68-5.58L143.5,202c16.23-4.17,31.54-14.81,44.22-31,15.2-19.41,24.28-44.47,24.28-67A84.09,84.09,0,0,0,128,20Zm17.93,208H110.07l10.48-24.46a60.56,60.56,0,0,0,14.9,0ZM128,196c-42.1,0-76-50.33-76-92a76,76,0,0,1,152,0C204,145.67,170.1,196,128,196ZM180,95.34a4,4,0,0,1-3.29,4.61,5,5,0,0,1-.66,0,4,4,0,0,1-3.95-3.34A45.31,45.31,0,0,0,135.34,60a4,4,0,0,1,1.32-7.9A53.46,53.46,0,0,1,180,95.34Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
