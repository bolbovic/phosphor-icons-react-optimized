var s = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && A(a, e, t[e]);
  if (l)
    for (var e of l(t))
      i.call(t, e) && A(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const n = Z((r, e) => {
  var m = r, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M172,136a12,12,0,1,1-12,12A12,12,0,0,1,172,136Zm12.62-32.75L118.91,72.59A71.95,71.95,0,0,0,56.06,141.3l68.18-36.36A8,8,0,0,1,136,112V215.55a71.64,71.64,0,0,0,60.71-50A8,8,0,0,1,212,170.4,88,88,0,1,1,51.74,100.1,36,36,0,0,1,68,32a8.05,8.05,0,0,1,3.38.75L189.63,87.93A20,20,0,0,0,188,48a8,8,0,0,1,0-16,36,36,0,0,1,0,72A8.05,8.05,0,0,1,184.62,103.25ZM96,208.47V138.13L57.51,158.66A72.23,72.23,0,0,0,96,208.47ZM96.13,62,66.37,48.07a20,20,0,0,0-5.2,38.71c.6-.71,1.2-1.42,1.84-2.11A88,88,0,0,1,96.13,62Z" }));
});
n.displayName = "Fill";
export {
  n as Fill
};
