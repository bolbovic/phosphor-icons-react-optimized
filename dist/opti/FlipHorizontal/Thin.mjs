var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var m in a)
    l.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = f((m, e) => {
  var o = m, { children: a } = o, t = h(o, ["children"]);
  return /* @__PURE__ */ n.createElement(s, A({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M106.38,28.26a11.76,11.76,0,0,0-13.44,7.08l0,.08L29,195.32A12,12,0,0,0,40,212h64a12,12,0,0,0,12-12V40A11.75,11.75,0,0,0,106.38,28.26ZM108,200a4,4,0,0,1-4,4H40a3.93,3.93,0,0,1-3.33-1.79,4,4,0,0,1-.32-3.84l64-159.94A4,4,0,0,1,108,40Zm119.07-4.6-64-160,0-.08A12,12,0,0,0,140,40V200a12,12,0,0,0,12,12h64a12,12,0,0,0,11.08-16.6Zm-7.75,6.81A3.93,3.93,0,0,1,216,204H152a4,4,0,0,1-4-4V40a3.81,3.81,0,0,1,3.2-3.92,4.64,4.64,0,0,1,.9-.09,3.69,3.69,0,0,1,3.57,2.42l64,160A3.9,3.9,0,0,1,219.32,202.21Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
