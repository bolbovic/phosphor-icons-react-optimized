var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && m(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var l in a)
    o.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && i.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((l, e) => {
  var L = l, { children: a } = L, t = n(L, ["children"]);
  return /* @__PURE__ */ c.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M178.4,172.8,118.67,128l27.73-20.8a4,4,0,1,0-4.8-6.4L116,120V40l25.6,19.2a4,4,0,0,0,4.8-6.4l-32-24A4,4,0,0,0,108,32v88L50.4,76.8a4,4,0,0,0-4.8,6.4L105.33,128,45.6,172.8a4,4,0,0,0,4.8,6.4L108,136v88a4,4,0,0,0,2.21,3.58A4.05,4.05,0,0,0,112,228a4,4,0,0,0,2.4-.8l64-48a4,4,0,0,0,0-6.4ZM116,216V136l53.33,40ZM234.83,101.17a4,4,0,0,1-5.66,5.66L208,85.66l-21.17,21.17a4,4,0,0,1-5.66-5.66L202.34,80,181.17,58.83a4,4,0,0,1,5.66-5.66L208,74.34l21.17-21.17a4,4,0,1,1,5.66,5.66L213.66,80Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
