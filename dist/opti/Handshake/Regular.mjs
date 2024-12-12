var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var t = (a, l, e) => l in a ? i(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, Z = (a, l) => {
  for (var e in l || (l = {}))
    o.call(l, e) && t(a, e, l[e]);
  if (m)
    for (var e of m(l))
      p.call(l, e) && t(a, e, l[e]);
  return a;
};
var c = (a, l) => {
  var e = {};
  for (var L in a)
    o.call(a, L) && l.indexOf(L) < 0 && (e[L] = a[L]);
  if (a != null && m)
    for (var L of m(a))
      l.indexOf(L) < 0 && p.call(a, L) && (e[L] = a[L]);
  return e;
};
import f, { forwardRef as s } from "react";
import R from "../../lib/OptiBase.mjs";
const d = s((L, e) => {
  var r = L, { children: a } = r, l = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(R, Z({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M254.3,107.91,228.78,56.85a16,16,0,0,0-21.47-7.15L182.44,62.13,130.05,48.27a8.14,8.14,0,0,0-4.1,0L73.56,62.13,48.69,49.7a16,16,0,0,0-21.47,7.15L1.7,107.9a16,16,0,0,0,7.15,21.47l27,13.51,55.49,39.63a8.06,8.06,0,0,0,2.71,1.25l64,16a8,8,0,0,0,7.6-2.1l55.07-55.08,26.42-13.21a16,16,0,0,0,7.15-21.46Zm-54.89,33.37L165,113.72a8,8,0,0,0-10.68.61C136.51,132.27,116.66,130,104,122L147.24,80h31.81l27.21,54.41ZM41.53,64,62,74.22,36.43,125.27,16,115.06Zm116,119.13L99.42,168.61l-49.2-35.14,28-56L128,64.28l9.8,2.59-45,43.68-.08.09a16,16,0,0,0,2.72,24.81c20.56,13.13,45.37,11,64.91-5L188,152.66Zm62-57.87-25.52-51L214.47,64,240,115.06Zm-87.75,92.67a8,8,0,0,1-7.75,6.06,8.13,8.13,0,0,1-1.95-.24L80.41,213.33a7.89,7.89,0,0,1-2.71-1.25L51.35,193.26a8,8,0,0,1,9.3-13l25.11,17.94L126,208.24A8,8,0,0,1,131.82,217.94Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
