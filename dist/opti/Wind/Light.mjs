var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import h, { forwardRef as d } from "react";
import l from "../../lib/OptiBase.mjs";
const n = d((r, e) => {
  var c = r, { children: a } = c, t = f(c, ["children"]);
  return /* @__PURE__ */ h.createElement(l, H({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M182,184a30,30,0,0,1-30,30c-12.9,0-25.36-8.38-29.63-19.92a6,6,0,0,1,11.26-4.16C136.13,196.69,144.2,202,152,202a18,18,0,0,0,0-36H40a6,6,0,0,1,0-12H152A30,30,0,0,1,182,184ZM150,72a30,30,0,0,0-30-30c-12.9,0-25.36,8.38-29.63,19.92a6,6,0,1,0,11.26,4.16C104.13,59.31,112.2,54,120,54a18,18,0,0,1,0,36H24a6,6,0,0,0,0,12h96A30,30,0,0,0,150,72Zm58,2c-12.9,0-25.36,8.38-29.63,19.92a6,6,0,1,0,11.26,4.16C192.13,91.31,200.2,86,208,86a18,18,0,0,1,0,36H32a6,6,0,0,0,0,12H208a30,30,0,0,0,0-60Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
