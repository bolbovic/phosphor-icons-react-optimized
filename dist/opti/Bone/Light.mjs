var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      L.call(t, e) && i(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && L.call(a, r) && (e[r] = a[r]);
  return e;
};
import l, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const n = d((r, e) => {
  var o = r, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ l.createElement(h, c({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M230.14,62.17A33.88,33.88,0,0,0,206,50a34,34,0,1,0-62.81,20,2,2,0,0,1-.23,2.54L72.56,143a2.06,2.06,0,0,1-2.55.23A34,34,0,1,0,50,206a34,34,0,1,0,62.81-20,2,2,0,0,1,.23-2.54l70.4-70.4a2,2,0,0,1,2.54-.23,34,34,0,0,0,44.15-50.65ZM220.6,98.48a22,22,0,0,1-28.24,4.17,14,14,0,0,0-17.4,1.92L104.57,175a14,14,0,0,0-1.92,17.4,22,22,0,1,1-40.41,8.26,6,6,0,0,0-5.93-6.93,7.28,7.28,0,0,0-.93.07,22,22,0,1,1,8.26-40.41A14,14,0,0,0,81,151.43L151.43,81a14,14,0,0,0,1.92-17.4,22,22,0,1,1,40.41-8.26,6,6,0,0,0,6.86,6.86,22,22,0,0,1,20,36.24Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
