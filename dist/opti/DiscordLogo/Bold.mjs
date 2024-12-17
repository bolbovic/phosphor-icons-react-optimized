var f = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
var m = (a, e, l) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, p = (a, e) => {
  for (var l in e || (e = {}))
    o.call(e, l) && m(a, l, e[l]);
  if (c)
    for (var l of c(e))
      r.call(e, l) && m(a, l, e[l]);
  return a;
};
var s = (a, e) => {
  var l = {};
  for (var t in a)
    o.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && c)
    for (var t of c(a))
      e.indexOf(t) < 0 && r.call(a, t) && (l[t] = a[t]);
  return l;
};
import d, { forwardRef as i } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = i((t, l) => {
  var A = t, { children: a } = A, e = s(A, ["children"]);
  return /* @__PURE__ */ d.createElement(Z, p({ ref: l }, e), a, /* @__PURE__ */ d.createElement("path", { d: "M108,136a16,16,0,1,1-16-16A16,16,0,0,1,108,136Zm56-16a16,16,0,1,0,16,16A16,16,0,0,0,164,120Zm76.07,76.56-67,29.71A20.15,20.15,0,0,1,146,214.9l-8.54-23.13c-3.13.14-6.27.24-9.45.24s-6.32-.1-9.45-.24L110,214.9a20.19,20.19,0,0,1-27.08,11.37l-67-29.71A19.93,19.93,0,0,1,4.62,173.41L34.15,57A20,20,0,0,1,50.37,42.19l36.06-5.93A20.26,20.26,0,0,1,109.22,51.1l4.41,17.41c4.74-.33,9.52-.51,14.37-.51s9.63.18,14.37.51l4.41-17.41a20.25,20.25,0,0,1,22.79-14.84l36.06,5.93A20,20,0,0,1,221.85,57l29.53,116.38A19.93,19.93,0,0,1,240.07,196.56ZM227.28,176,199.23,65.46l-30.07-4.94-2.84,11.17c2.9.58,5.78,1.2,8.61,1.92a12,12,0,1,1-5.86,23.27A168.43,168.43,0,0,0,128,92a168.43,168.43,0,0,0-41.07,4.88,12,12,0,0,1-5.86-23.27c2.83-.72,5.71-1.34,8.61-1.92L86.85,60.52,56.77,65.46,28.72,176l60.22,26.7,5-13.57c-4.37-.76-8.67-1.65-12.88-2.71a12,12,0,0,1,5.86-23.28A168.43,168.43,0,0,0,128,168a168.43,168.43,0,0,0,41.07-4.88,12,12,0,0,1,5.86,23.28c-4.21,1.06-8.51,1.95-12.88,2.71l5,13.57Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
