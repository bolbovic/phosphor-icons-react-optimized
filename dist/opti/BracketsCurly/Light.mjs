var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, e, c) => e in a ? d(a, e, { enumerable: !0, configurable: !0, writable: !0, value: c }) : a[e] = c, C = (a, e) => {
  for (var c in e || (e = {}))
    i.call(e, c) && o(a, c, e[c]);
  if (r)
    for (var c of r(e))
      p.call(e, c) && o(a, c, e[c]);
  return a;
};
var f = (a, e) => {
  var c = {};
  for (var t in a)
    i.call(a, t) && e.indexOf(t) < 0 && (c[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      e.indexOf(t) < 0 && p.call(a, t) && (c[t] = a[t]);
  return c;
};
import s, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const n = h((t, c) => {
  var m = t, { children: a } = m, e = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(l, C({ ref: c }, e), a, /* @__PURE__ */ s.createElement("path", { d: "M39.91,128a27.68,27.68,0,0,1,9.49,11.13C54,148.62,54,160.51,54,172c0,24.27,1.21,38,26,38a6,6,0,0,1,0,12c-16.88,0-27.81-5.6-33.4-17.13C42,195.38,42,183.49,42,172c0-24.27-1.21-38-26-38a6,6,0,0,1,0-12c24.79,0,26-13.73,26-38,0-11.49,0-23.38,4.6-32.87C52.19,39.6,63.12,34,80,34a6,6,0,0,1,0,12C55.21,46,54,59.73,54,84c0,11.49,0,23.38-4.6,32.87A27.68,27.68,0,0,1,39.91,128ZM240,122c-24.79,0-26-13.73-26-38,0-11.49,0-23.38-4.6-32.87C203.81,39.6,192.88,34,176,34a6,6,0,0,0,0,12c24.79,0,26,13.73,26,38,0,11.49,0,23.38,4.6,32.87A27.68,27.68,0,0,0,216.09,128a27.68,27.68,0,0,0-9.49,11.13C202,148.62,202,160.51,202,172c0,24.27-1.21,38-26,38a6,6,0,0,0,0,12c16.88,0,27.81-5.6,33.4-17.13,4.6-9.49,4.6-21.38,4.6-32.87,0-24.27,1.21-38,26-38a6,6,0,0,0,0-12Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
