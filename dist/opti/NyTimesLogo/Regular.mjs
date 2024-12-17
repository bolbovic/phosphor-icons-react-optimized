var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, c = (a, r) => {
  for (var e in r || (r = {}))
    l.call(r, e) && o(a, e, r[e]);
  if (m)
    for (var e of m(r))
      p.call(r, e) && o(a, e, r[e]);
  return a;
};
var Z = (a, r) => {
  var e = {};
  for (var t in a)
    l.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import R from "../../lib/OptiBase.mjs";
const d = s((t, e) => {
  var A = t, { children: a } = A, r = Z(A, ["children"]);
  return /* @__PURE__ */ f.createElement(R, c({ ref: e }, r), a, /* @__PURE__ */ f.createElement("path", { d: "M172,136a12,12,0,1,1-12,12A12,12,0,0,1,172,136Zm12.62-32.75L118.91,72.59A71.95,71.95,0,0,0,56.06,141.3l68.18-36.36A8,8,0,0,1,136,112V215.55a71.64,71.64,0,0,0,60.71-50A8,8,0,0,1,212,170.4,88,88,0,1,1,51.74,100.1,36,36,0,0,1,68,32a8.05,8.05,0,0,1,3.38.75L189.63,87.93A20,20,0,0,0,188,48a8,8,0,0,1,0-16,36,36,0,0,1,0,72A8.05,8.05,0,0,1,184.62,103.25ZM88,203.83V142.4L57.51,158.66A72.15,72.15,0,0,0,88,203.83Zm32-78.5-16,8.54v78a71,71,0,0,0,16,3.67ZM96.13,62,66.37,48.07a20,20,0,0,0-5.2,38.71c.6-.71,1.2-1.42,1.84-2.11A88,88,0,0,1,96.13,62Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
