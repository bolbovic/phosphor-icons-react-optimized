var f = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, e, l) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, s = (a, e) => {
  for (var l in e || (e = {}))
    o.call(e, l) && c(a, l, e[l]);
  if (t)
    for (var l of t(e))
      p.call(e, l) && c(a, l, e[l]);
  return a;
};
var A = (a, e) => {
  var l = {};
  for (var r in a)
    o.call(a, r) && e.indexOf(r) < 0 && (l[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      e.indexOf(r) < 0 && p.call(a, r) && (l[r] = a[r]);
  return l;
};
import Z, { forwardRef as i } from "react";
import R from "../../lib/OptiBase.mjs";
const d = i((r, l) => {
  var m = r, { children: a } = m, e = A(m, ["children"]);
  return /* @__PURE__ */ Z.createElement(R, s({ ref: l }, e), a, /* @__PURE__ */ Z.createElement("path", { d: "M234.29,114.85l-5.06,4.37a8,8,0,0,1-10.45-12.12l5.06-4.37c.12-.1.23-.19.13-.5s-.18-.27-.34-.29l-8.27-.67a8,8,0,1,1,1.29-15.94l8.27.66a16.46,16.46,0,0,1,9.37,28.86Zm-61.71,37.79,4.08,17.22a8,8,0,0,0,7.78,6.16,7.86,7.86,0,0,0,1.85-.22,8,8,0,0,0,5.94-9.63l-3-12.49,8-6.86a8,8,0,0,0-10.45-12.12l-11.64,10A8,8,0,0,0,172.58,152.64Zm29.13,53.53a8,8,0,0,0-15.57,3.69l1.32,5.58a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-6.72-4.13a8,8,0,0,0-8.38,13.63l6.72,4.13A16.4,16.4,0,0,0,203,211.75ZM175.36,98.05l-15.64-1.27A8,8,0,0,1,153,91.86L136,50.78V184.63l7.43,4.57a8,8,0,1,1-8.38,13.63L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,10.76.87a8,8,0,1,1-1.29,16ZM120,184.63V50.78L103,91.86a8,8,0,0,1-6.75,4.92l-63.92,5.16c-.15,0-.24,0-.33.29a.39.39,0,0,0,.13.51l48.7,42a8,8,0,0,1,2.56,7.91l-14.88,62.8a.37.37,0,0,0,.17.48c.18.14.23.11.38,0Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
