var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, m = Object.prototype.propertyIsEnumerable;
var v = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, o = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && v(a, e, t[e]);
  if (r)
    for (var e of r(t))
      m.call(t, e) && v(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var H in a)
    h.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && r)
    for (var H of r(a))
      t.indexOf(H) < 0 && m.call(a, H) && (e[H] = a[H]);
  return e;
};
import p, { forwardRef as A } from "react";
import c from "../../lib/OptiBase.mjs";
const f = A((H, e) => {
  var V = H, { children: a } = V, t = i(V, ["children"]);
  return /* @__PURE__ */ p.createElement(c, o({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M236,108.7V72a12,12,0,0,0-12-12H32A12,12,0,0,0,20,72v36.7A12,12,0,0,0,12,120v48a12,12,0,0,0,12,12H36v20a4,4,0,0,0,8,0V180H212v20a4,4,0,0,0,8,0V180h12a12,12,0,0,0,12-12V120A12,12,0,0,0,236,108.7ZM228,72v36H216a12,12,0,0,0-12,12v20H132V68h92A4,4,0,0,1,228,72ZM32,68h92v72H52V120a12,12,0,0,0-12-12H28V72A4,4,0,0,1,32,68ZM236,168a4,4,0,0,1-4,4H24a4,4,0,0,1-4-4V120a4,4,0,0,1,4-4H40a4,4,0,0,1,4,4v24a4,4,0,0,0,4,4H208a4,4,0,0,0,4-4V120a4,4,0,0,1,4-4h16a4,4,0,0,1,4,4Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
