var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      n.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && n.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const d = l((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(s, L({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M244,208a4,4,0,0,1-4,4H192a4,4,0,0,1-3.2-6.4L232,148A20,20,0,0,0,228,120,20,20,0,0,0,200,124a20.23,20.23,0,0,0-2.89,5.37,4,4,0,0,1-7.55-2.66,28.34,28.34,0,0,1,4-7.52,28,28,0,0,1,44.72,33.7L200,204h40A4,4,0,0,1,244,208ZM146.62,53a4,4,0,0,0-5.64.4L92,109.89,43,53.38a4,4,0,1,0-6,5.24L86.71,116,37,173.38a4,4,0,1,0,6,5.24l49-56.51,49,56.51a4,4,0,0,0,6-5.24L97.29,116,147,58.62A4,4,0,0,0,146.62,53Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
