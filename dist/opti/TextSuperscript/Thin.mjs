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
  return /* @__PURE__ */ f.createElement(s, L({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M244,144a4,4,0,0,1-4,4H192a4,4,0,0,1-3.2-6.4L232,84.05A20,20,0,0,0,213.22,52.2a20,20,0,0,0-16.08,13.14,4,4,0,1,1-7.55-2.67,28.34,28.34,0,0,1,4-7.52,28,28,0,1,1,44.72,33.7L200,140h40A4,4,0,0,1,244,144ZM146.62,77a4,4,0,0,0-5.64.4L92,133.89,43,77.38a4,4,0,0,0-6,5.24L86.71,140,37,197.38a4,4,0,1,0,6,5.24l49-56.51,49,56.51a4,4,0,0,0,6-5.24L97.29,140,147,82.62A4,4,0,0,0,146.62,77Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
