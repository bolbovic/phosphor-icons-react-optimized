var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && c(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var l in a)
    o.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && i.call(a, l) && (e[l] = a[l]);
  return e;
};
import n, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const V = h((l, e) => {
  var m = l, { children: a } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ n.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M188.25,169.77A84.3,84.3,0,0,0,220,102c-1-43.64-35.9-79.62-79.45-81.91A84,84,0,0,0,52,103L29.1,147c-.05.09-.09.18-.13.27a12,12,0,0,0,5.66,15.46l.13.06L60,174.38V208a12,12,0,0,0,12,12h48a4,4,0,0,0,0-8H72a4,4,0,0,1-4-4V171.81a4,4,0,0,0-2.34-3.64l-27.5-12.59a4,4,0,0,1-1.88-5l23.27-44.72A4.11,4.11,0,0,0,60,104a76,76,0,0,1,64-75V52.4a20,20,0,1,0,8,0V28.11a78.35,78.35,0,0,1,8.11,0c33.13,1.74,60.72,25,69.2,55.89H184a4,4,0,0,0-3.07,1.44l-27.46,33a20.12,20.12,0,1,0,6.13,5.13L185.87,92H211a75.9,75.9,0,0,1-29.44,72.8,4,4,0,0,0-1.57,3.7l8,64a4,4,0,0,0,4,3.5l.5,0A4,4,0,0,0,196,231.5ZM140,72a12,12,0,1,1-12-12A12,12,0,0,1,140,72Zm4,76a12,12,0,1,1,12-12A12,12,0,0,1,144,148Z" }));
});
V.displayName = "Thin";
export {
  V as Thin
};