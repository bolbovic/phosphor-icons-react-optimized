var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import h, { forwardRef as A } from "react";
import d from "../../lib/OptiBase.mjs";
const n = A((r, e) => {
  var o = r, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ h.createElement(d, c({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M184,90q-2.59,0-5.16.24a54,54,0,1,0-101.69,0C75.45,90.08,73.73,90,72,90A54,54,0,1,0,99.85,190.28l-9.6,32A6,6,0,0,0,96,230h64a6,6,0,0,0,5.75-7.72l-9.6-32A54,54,0,1,0,184,90Zm0,96a41.92,41.92,0,0,1-35.06-18.87,6,6,0,0,0-10.76,5L151.94,218H104.06l13.76-45.84a6,6,0,0,0-10.76-5,42,42,0,1,1-20.91-62.69,6,6,0,0,0,7-9,42,42,0,1,1,69.72,0,6,6,0,0,0,7,9A42,42,0,1,1,184,186Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
