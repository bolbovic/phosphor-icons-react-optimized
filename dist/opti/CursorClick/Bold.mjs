var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, e, l) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, A = (a, e) => {
  for (var l in e || (e = {}))
    c.call(e, l) && r(a, l, e[l]);
  if (m)
    for (var l of m(e))
      p.call(e, l) && r(a, l, e[l]);
  return a;
};
var Z = (a, e) => {
  var l = {};
  for (var t in a)
    c.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && p.call(a, t) && (l[t] = a[t]);
  return l;
};
import d, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const M = i((t, l) => {
  var o = t, { children: a } = o, e = Z(o, ["children"]);
  return /* @__PURE__ */ d.createElement(s, A({ ref: l }, e), a, /* @__PURE__ */ d.createElement("path", { d: "M224.15,179.17l-46.82-46.82,37.92-13.51c.26-.09.51-.19.76-.3a20,20,0,0,0-1.76-37.27L54.16,29A20,20,0,0,0,29,54.16L81.27,214.24A20,20,0,0,0,118.54,216c.11-.25.21-.5.3-.76l13.51-37.92,46.83,46.82a20,20,0,0,0,28.28,0l16.69-16.68A20,20,0,0,0,224.15,179.17Zm-30.83,25.17-48.48-48.48A20,20,0,0,0,130.7,150a20.47,20.47,0,0,0-3.73.35A20,20,0,0,0,112.35,162c-.11.25-.2.5-.3.76L100.4,195.5,54.29,54.29,195.5,100.4l-32.71,11.65c-.25.09-.51.19-.76.3a20,20,0,0,0-6.16,32.48h0l48.48,48.48ZM84,16V12a12,12,0,0,1,24,0v4a12,12,0,0,1-24,0ZM12,108a12,12,0,0,1,0-24h4a12,12,0,0,1,0,24ZM120.62,24.21l4-12a12,12,0,0,1,22.77,7.58l-4,12a12,12,0,0,1-22.77-7.58Zm-81.23,104a12,12,0,0,1-7.59,15.17l-12,4a12,12,0,1,1-7.59-22.76l12-4A12,12,0,0,1,39.39,128.21Z" }));
});
M.displayName = "Bold";
export {
  M as Bold
};
