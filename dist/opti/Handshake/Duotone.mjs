var i = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && r(a, e, t[e]);
  if (l)
    for (var e of l(t))
      c.call(t, e) && r(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var L in a)
    p.call(a, L) && t.indexOf(L) < 0 && (e[L] = a[L]);
  if (a != null && l)
    for (var L of l(a))
      t.indexOf(L) < 0 && c.call(a, L) && (e[L] = a[L]);
  return e;
};
import m, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const s = d((L, e) => {
  var o = L, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ m.createElement(f, Z({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M200,152l-40,40L96,176,40,136,72.68,70.63,128,56l55.32,14.63L183.6,72H144L98.34,116.29a8,8,0,0,0,1.38,12.42C117.23,139.9,141,139.13,160,120Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M254.3,107.91,228.78,56.85a16,16,0,0,0-21.47-7.15L182.44,62.13,130.05,48.27a8.14,8.14,0,0,0-4.1,0L73.56,62.13,48.69,49.7a16,16,0,0,0-21.47,7.15L1.7,107.9a16,16,0,0,0,7.15,21.47l27,13.51,55.49,39.63a8.06,8.06,0,0,0,2.71,1.25l64,16a8,8,0,0,0,7.6-2.1l55.07-55.08,26.42-13.21a16,16,0,0,0,7.15-21.46Zm-54.89,33.37L165,113.72a8,8,0,0,0-10.68.61C136.51,132.27,116.66,130,104,122L147.24,80h31.81l27.21,54.41ZM41.53,64,62,74.22,36.43,125.27,16,115.06Zm116,119.13L99.42,168.61l-49.2-35.14,28-56L128,64.28l9.8,2.59-45,43.68-.08.09a16,16,0,0,0,2.72,24.81c20.56,13.13,45.37,11,64.91-5L188,152.66Zm62-57.87-25.52-51L214.47,64,240,115.06Zm-87.75,92.67a8,8,0,0,1-7.75,6.06,8.13,8.13,0,0,1-1.95-.24L80.41,213.33a7.89,7.89,0,0,1-2.71-1.25L51.35,193.26a8,8,0,0,1,9.3-13l25.11,17.94L126,208.24A8,8,0,0,1,131.82,217.94Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};