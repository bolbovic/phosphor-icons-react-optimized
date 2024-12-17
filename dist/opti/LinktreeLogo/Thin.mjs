var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      L.call(t, e) && i(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && L.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const d = h((r, e) => {
  var o = r, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, l({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M132,160v72a4,4,0,0,1-8,0V160a4,4,0,0,1,8,0Zm76-60H137.66l49.17-49.17a4,4,0,1,0-5.66-5.66L132,94.34V24a4,4,0,0,0-8,0V94.34L74.83,45.17a4,4,0,0,0-5.66,5.66L118.34,100H48a4,4,0,0,0,0,8h70.34L69.17,157.17a4,4,0,0,0,5.66,5.66L128,109.66l53.17,53.17a4,4,0,0,0,5.66-5.66L137.66,108H208a4,4,0,0,0,0-8Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
