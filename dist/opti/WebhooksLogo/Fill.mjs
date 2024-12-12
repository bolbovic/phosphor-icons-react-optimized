var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? d(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, p = (a, l) => {
  for (var e in l || (l = {}))
    c.call(l, e) && o(a, e, l[e]);
  if (r)
    for (var e of r(l))
      i.call(l, e) && o(a, e, l[e]);
  return a;
};
var f = (a, l) => {
  var e = {};
  for (var t in a)
    c.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import s, { forwardRef as h } from "react";
import n from "../../lib/OptiBase.mjs";
const A = h((t, e) => {
  var m = t, { children: a } = m, l = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(n, p({ ref: e }, l), a, /* @__PURE__ */ s.createElement("path", { d: "M50.15,160,89.07,92.57l-2.24-3.88a48,48,0,1,1,85.05-44.17,8.17,8.17,0,0,1-3.19,10.4,8,8,0,0,1-11.35-3.72,32,32,0,1,0-56.77,29.3.57.57,0,0,1,.08.13l13.83,23.94a8,8,0,0,1,0,8L77.86,176a16,16,0,0,1-27.71-16Zm141-40H178.81L141.86,56a16,16,0,0,0-27.71,16l34.64,60a8,8,0,0,0,6.92,4h35.63c17.89,0,32.95,14.64,32.66,32.53A32,32,0,0,1,192.31,200a8.23,8.23,0,0,0-8.28,7.33,8,8,0,0,0,8,8.67,48.05,48.05,0,0,0,48-48.93C239.49,140.79,217.48,120,191.19,120ZM208,167.23c-.4-8.61-7.82-15.23-16.43-15.23H114.81a8,8,0,0,0-6.93,4L91.72,184h0a32,32,0,1,1-53.47-35,8.2,8.2,0,0,0-.92-11,8,8,0,0,0-11.72,1.17A47.63,47.63,0,0,0,16,167.54,48,48,0,0,0,105.55,192v0l4.62-8H192A16,16,0,0,0,208,167.23Z" }));
});
A.displayName = "Fill";
export {
  A as Fill
};
