var f = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && r(a, e, t[e]);
  if (c)
    for (var e of c(t))
      A.call(t, e) && r(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && c)
    for (var m of c(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((m, e) => {
  var o = m, { children: a } = o, t = l(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, d({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M224,108H32a12,12,0,0,0-12,12,108.38,108.38,0,0,0,56,94.68V216a20,20,0,0,0,20,20h64a20,20,0,0,0,20-20v-1.32A108.38,108.38,0,0,0,236,120,12,12,0,0,0,224,108Zm-61,88.39a12,12,0,0,0-7,10.9V212H100v-4.71a12,12,0,0,0-7-10.9A84.32,84.32,0,0,1,44.87,132H211.13A84.32,84.32,0,0,1,163,196.39ZM74.93,50.15a26.32,26.32,0,0,0,4.71-7,12,12,0,0,1,7.7-22.7c5.67,1.64,13.2,6.63,15.77,15.3,2.71,9.14-.67,19.26-10,30.08a26.32,26.32,0,0,0-4.71,7A12,12,0,0,1,84,96a11.81,11.81,0,0,1-3.33-.47C75,93.89,67.46,88.9,64.89,80.23,62.18,71.09,65.56,61,74.93,50.15Zm44,0a26.32,26.32,0,0,0,4.71-7,12,12,0,0,1,7.7-22.7c5.67,1.64,13.2,6.63,15.77,15.3,2.71,9.14-.67,19.26-10,30.08a26.32,26.32,0,0,0-4.71,7A12,12,0,0,1,128,96a11.81,11.81,0,0,1-3.33-.47c-5.67-1.64-13.21-6.63-15.78-15.3C106.18,71.09,109.56,61,118.93,50.15Zm44,0a26.32,26.32,0,0,0,4.71-7,12,12,0,0,1,7.7-22.7c5.67,1.64,13.2,6.63,15.77,15.3,2.71,9.14-.67,19.26-10,30.08a26.32,26.32,0,0,0-4.71,7A12,12,0,0,1,172,96a11.81,11.81,0,0,1-3.33-.47c-5.67-1.64-13.21-6.63-15.78-15.3C150.18,71.09,153.56,61,162.93,50.15Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
