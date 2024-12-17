var Z = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var A = (a, l, e) => l in a ? Z(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, n = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && A(a, e, l[e]);
  if (o)
    for (var e of o(l))
      c.call(l, e) && A(a, e, l[e]);
  return a;
};
var i = (a, l) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      l.indexOf(t) < 0 && c.call(a, t) && (e[t] = a[t]);
  return e;
};
import r, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const s = d((t, e) => {
  var m = t, { children: a } = m, l = i(m, ["children"]);
  return /* @__PURE__ */ r.createElement(f, n({ ref: e }, l), a, /* @__PURE__ */ r.createElement("path", { d: "M208,128a80,80,0,1,1-80-80A80,80,0,0,1,208,128Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M232,120H215.63a87.27,87.27,0,0,0-7.74-28.88l14.18-8.19a8,8,0,0,0-8-13.86l-14.2,8.2a88.78,88.78,0,0,0-21.14-21.14l8.2-14.2a8,8,0,0,0-13.86-8l-8.19,14.18A87.27,87.27,0,0,0,136,40.37V24a8,8,0,0,0-16,0V40.37a87.27,87.27,0,0,0-28.88,7.74L82.93,33.93a8,8,0,0,0-13.86,8l8.2,14.2A88.78,88.78,0,0,0,56.13,77.27l-14.2-8.2a8,8,0,0,0-8,13.86l14.18,8.19A87.27,87.27,0,0,0,40.37,120H24a8,8,0,0,0,0,16H40.37a87.27,87.27,0,0,0,7.74,28.88l-14.18,8.19a8,8,0,0,0,4,14.93,7.92,7.92,0,0,0,4-1.07l14.2-8.2a88.78,88.78,0,0,0,21.14,21.14l-8.2,14.2a8,8,0,0,0,13.86,8l8.19-14.18A87.27,87.27,0,0,0,120,215.63V232a8,8,0,0,0,16,0V215.63a87.27,87.27,0,0,0,28.88-7.74l8.19,14.18a8,8,0,0,0,13.86-8l-8.2-14.2a88.78,88.78,0,0,0,21.14-21.14l14.2,8.2A8,8,0,0,0,225,184a8,8,0,0,0-2.92-10.93l-14.18-8.19A87.27,87.27,0,0,0,215.63,136H232a8,8,0,0,0,0-16ZM85.31,185.94a71.92,71.92,0,0,1,0-115.88L118.76,128ZM128,200A71.58,71.58,0,0,1,99.16,194L132.62,136h66.92A72.08,72.08,0,0,1,128,200Zm4.62-80L99.16,62.05a71.94,71.94,0,0,1,100.38,58Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
