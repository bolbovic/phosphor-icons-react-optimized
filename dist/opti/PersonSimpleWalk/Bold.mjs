var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && l(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && l(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var m in a)
    c.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import i, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const B = n((m, e) => {
  var r = m, { children: a } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(A, d({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M152,84a36,36,0,1,0-36-36A36,36,0,0,0,152,84Zm0-48a12,12,0,1,1-12,12A12,12,0,0,1,152,36Zm68,112a12,12,0,0,1-12,12c-37,0-55.27-18.47-70-33.3-1.71-1.72-3.36-3.4-5-5l-8.63,19.85L159,166.23a12,12,0,0,1,5,9.77v56a12,12,0,0,1-24,0V182.17l-25.37-18.12L83,236.78a12,12,0,1,1-22-9.57l50.06-115.13q-10.64.75-25,8.4a159.78,159.78,0,0,0-29.83,21.23,12,12,0,0,1-16.43-17.5c2.61-2.45,64.36-59.67,104.09-25.18,3.94,3.42,7.64,7.16,11.22,10.78C168.43,123.28,181,136,208,136A12,12,0,0,1,220,148Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};