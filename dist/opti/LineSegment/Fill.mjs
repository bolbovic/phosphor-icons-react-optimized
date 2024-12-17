var d = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as n } from "react";
import h from "../../lib/OptiBase.mjs";
const E = n((r, e) => {
  var m = r, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(h, c({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M211.81,83.79a28,28,0,0,1-33.12,4.83L88.62,178.69a28,28,0,1,1-44.43-6.48h0a28,28,0,0,1,33.12-4.83l90.07-90.07a28,28,0,1,1,44.43,6.48Z" }));
});
E.displayName = "Fill";
export {
  E as Fill
};
