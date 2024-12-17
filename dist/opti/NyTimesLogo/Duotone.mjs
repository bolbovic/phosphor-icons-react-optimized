var l = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && A(a, e, t[e]);
  if (m)
    for (var e of m(t))
      n.call(t, e) && A(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var o in a)
    c.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && n.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const s = d((o, e) => {
  var p = o, { children: a } = p, t = i(p, ["children"]);
  return /* @__PURE__ */ r.createElement(f, Z({ ref: e }, t), a, /* @__PURE__ */ r.createElement("path", { d: "M128,112V224a79.58,79.58,0,0,1-32-6.66V129.07Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M172,136a12,12,0,1,1-12,12A12,12,0,0,1,172,136Zm12.62-32.75L118.91,72.59A71.95,71.95,0,0,0,56.06,141.3l68.18-36.36A8,8,0,0,1,136,112V215.55a71.64,71.64,0,0,0,60.71-50A8,8,0,0,1,212,170.4,88,88,0,1,1,51.74,100.1,36,36,0,0,1,68,32a8.05,8.05,0,0,1,3.38.75L189.63,87.93A20,20,0,0,0,188,48a8,8,0,0,1,0-16,36,36,0,0,1,0,72A8.05,8.05,0,0,1,184.62,103.25ZM88,203.83V142.4L57.51,158.66A72.15,72.15,0,0,0,88,203.83Zm32-78.5-16,8.54v78a71,71,0,0,0,16,3.67ZM96.13,62,66.37,48.07a20,20,0,0,0-5.2,38.71c.6-.71,1.2-1.42,1.84-2.11A88,88,0,0,1,96.13,62Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
