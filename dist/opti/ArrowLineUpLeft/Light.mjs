var L = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? L(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      c.call(t, e) && i(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && c.call(a, r) && (e[r] = a[r]);
  return e;
};
import H, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((r, e) => {
  var o = r, { children: a } = o, t = s(o, ["children"]);
  return /* @__PURE__ */ H.createElement(h, f({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M230,208a6,6,0,0,1-6,6H48a6,6,0,0,1,0-12H224A6,6,0,0,1,230,208ZM72,150a6,6,0,0,0,6-6V62.49L179.76,164.24a6,6,0,0,0,8.48-8.48L86.49,54H168a6,6,0,0,0,0-12H72a6,6,0,0,0-6,6v96A6,6,0,0,0,72,150Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
