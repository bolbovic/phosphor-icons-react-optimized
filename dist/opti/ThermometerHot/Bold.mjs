var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && c(a, e, t[e]);
  if (o)
    for (var e of o(t))
      A.call(t, e) && c(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((m, e) => {
  var r = m, { children: a } = r, t = l(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, d({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M160,56A52,52,0,0,0,56,56v94.69a64,64,0,1,0,104,0ZM108,228a40,40,0,0,1-30.91-65.39A12,12,0,0,0,80,154.78V56a28,28,0,0,1,56,0v98.77a12,12,0,0,0,2.77,7.68A40,40,0,0,1,108,228Zm24-40a24,24,0,1,1-36-20.78V56a12,12,0,0,1,24,0V167.22A24,24,0,0,1,132,188ZM173.94,83a12,12,0,0,1,3.51-16.6c16.82-11,30.32-5.2,39.26-1.39,8.09,3.46,10.93,4.37,16.74.58a12,12,0,0,1,13.1,20.11C239.28,90.38,232.64,92,226.71,92c-7.79,0-14.34-2.8-19.42-5-8.09-3.46-10.93-4.37-16.74-.58A12,12,0,0,1,173.94,83Zm76.11,26.1a12,12,0,0,1-3.5,16.6c-7.27,4.73-13.91,6.35-19.84,6.35-7.79,0-14.34-2.8-19.42-5-8.09-3.46-10.93-4.37-16.74-.58a12,12,0,1,1-13.1-20.11c16.82-11,30.32-5.2,39.26-1.39,8.09,3.46,10.93,4.37,16.74.58A12,12,0,0,1,250.05,109.05Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};