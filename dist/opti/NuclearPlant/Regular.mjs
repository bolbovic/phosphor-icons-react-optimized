var f = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, r, e) => r in a ? f(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, l = (a, r) => {
  for (var e in r || (r = {}))
    o.call(r, e) && m(a, e, r[e]);
  if (h)
    for (var e of h(r))
      p.call(r, e) && m(a, e, r[e]);
  return a;
};
var M = (a, r) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && h)
    for (var t of h(a))
      r.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const A = i((t, e) => {
  var c = t, { children: a } = c, r = M(c, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, l({ ref: e }, r), a, /* @__PURE__ */ Z.createElement("path", { d: "M152,32h24a8,8,0,0,0,8-8,8,8,0,0,1,16,0,24,24,0,0,1-24,24H152a8,8,0,0,0-8,8,8,8,0,0,1-16,0A24,24,0,0,1,152,32ZM104,64a8,8,0,0,0,8-8,40,40,0,0,1,40-40h8a8,8,0,0,0,0-16h-8A56.06,56.06,0,0,0,96,56,8,8,0,0,0,104,64ZM248,216a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16H32.74c13.77-27.83,29.48-68.69,31.12-112.66A15.91,15.91,0,0,1,79.85,80h88.33a16,16,0,0,1,16,15.28c2.1,47.84,23.84,92.37,35.29,112.72H240A8,8,0,0,1,248,216ZM168.18,96h-16c1.77,43.72,17.39,84.32,31.09,112h18C188.68,184.08,170.18,141.64,168.18,96ZM50.5,208h115C152,179.09,137.77,139.09,136.15,96a7.46,7.46,0,0,1-1-.06L79.85,96C78.24,139.06,64.06,179.07,50.5,208Z" }));
});
A.displayName = "Regular";
export {
  A as Regular
};
