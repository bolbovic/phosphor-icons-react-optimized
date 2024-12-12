var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && l(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && l(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((r, e) => {
  var c = r, { children: a } = c, t = A(c, ["children"]);
  return /* @__PURE__ */ n.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M163.79,44.14A36.06,36.06,0,0,0,128,12a4,4,0,0,0,0,8,28,28,0,0,1,27.73,24.17A60.07,60.07,0,0,0,100,104c0,48.75-26.71,81.34-79.4,96.87a12,12,0,0,0,1.33,23.36A260.42,260.42,0,0,0,66.69,228a256.53,256.53,0,0,0,34.83-2.3c33.23-4.59,60.2-15.41,80.19-32.18C207.12,172.21,220,142.09,220,104A60.07,60.07,0,0,0,163.79,44.14ZM160,52a52.08,52.08,0,0,1,50.19,38.44L192,99.54,161.79,84.43a4,4,0,0,0-3.58,0L128,99.54l-18.19-9.1A52.08,52.08,0,0,1,160,52Zm16.57,135.39c-25.47,21.37-80.88,41.77-153.24,29a4,4,0,0,1-.47-7.81C78.56,192.14,108,156,108,104a53.28,53.28,0,0,1,.28-5.39l17.93,9a4,4,0,0,0,3.58,0L160,92.48l30.21,15.11a4,4,0,0,0,3.58,0l17.93-9A53.28,53.28,0,0,1,212,104C212,139.62,200.08,167.67,176.57,187.39Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
