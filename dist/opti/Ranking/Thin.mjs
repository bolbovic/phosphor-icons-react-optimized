var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import l, { forwardRef as A } from "react";
import Z from "../../lib/OptiBase.mjs";
const c = A((m, e) => {
  var h = m, { children: a } = h, t = V(h, ["children"]);
  return /* @__PURE__ */ l.createElement(Z, H({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M116.21,101.26a4,4,0,0,1,2.53-5.05l12-4A4,4,0,0,1,136,96v40a4,4,0,0,1-8,0V101.55l-6.74,2.24A4,4,0,0,1,116.21,101.26ZM244,208a4,4,0,0,1-4,4H16a4,4,0,0,1,0-8H28V104A12,12,0,0,1,40,92H84V56A12,12,0,0,1,96,44h64a12,12,0,0,1,12,12v76h44a12,12,0,0,1,12,12v60h12A4,4,0,0,1,244,208Zm-72-68v64h48V144a4,4,0,0,0-4-4ZM92,204h72V56a4,4,0,0,0-4-4H96a4,4,0,0,0-4,4Zm-56,0H84V100H40a4,4,0,0,0-4,4Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
