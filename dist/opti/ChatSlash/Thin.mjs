var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      n.call(t, e) && i(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && n.call(a, r) && (e[r] = a[r]);
  return e;
};
import L, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const V = f((r, e) => {
  var o = r, { children: a } = o, t = H(o, ["children"]);
  return /* @__PURE__ */ L.createElement(s, A({ ref: e }, t), a, /* @__PURE__ */ L.createElement("path", { d: "M51,37.31A4,4,0,0,0,45,42.69L53.5,52H40A12,12,0,0,0,28,64V224a11.89,11.89,0,0,0,6.93,10.88A12.09,12.09,0,0,0,40,236a12,12,0,0,0,7.74-2.87L81.49,204H191.68L205,218.69a4,4,0,0,0,3,1.31,4,4,0,0,0,3-6.69ZM80,196a4,4,0,0,0-2.61,1L42.57,227A4,4,0,0,1,36,224V64a4,4,0,0,1,4-4H60.78L184.41,196ZM228,64V186a4,4,0,0,1-8,0V64a4,4,0,0,0-4-4H105.79a4,4,0,0,1,0-8H216A12,12,0,0,1,228,64Z" }));
});
V.displayName = "Thin";
export {
  V as Thin
};
