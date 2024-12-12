var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var r = (a, l, e) => l in a ? h(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, d = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && r(a, e, l[e]);
  if (m)
    for (var e of m(l))
      L.call(l, e) && r(a, e, l[e]);
  return a;
};
var c = (a, l) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      l.indexOf(t) < 0 && L.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = i((t, e) => {
  var o = t, { children: a } = o, l = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(s, d({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M209.84,47.44A91.42,91.42,0,0,0,144.62,20h-.35A91.44,91.44,0,0,0,79.15,47L17.76,109.17a20,20,0,0,0,.08,28.21L46.5,166a19.89,19.89,0,0,0,14.15,5.86h.11a19.86,19.86,0,0,0,14.2-6l60.87-62.39a12.07,12.07,0,0,1,16.77-.12,11.63,11.63,0,0,1,3.5,8.35,12.85,12.85,0,0,1-3.66,9.11L90.19,181a20,20,0,0,0-.21,28.5l28.66,28.66a20.08,20.08,0,0,0,28.15.14l61.76-60.44.09-.09C244.65,141.78,245.18,83.31,209.84,47.44ZM60.62,146.21l-23-23L55.81,104.8l22.88,22.88Zm72.2,72.18-23-23,18.61-18,22.88,22.87Zm58.89-57.62L168.48,183.5,145.7,160.73,169.21,138l.15-.14a37,37,0,0,0,10.74-26.37,35.44,35.44,0,0,0-10.85-25.41,36.2,36.2,0,0,0-50.44.48l-.1.11L95.46,110.49,72.68,87.72l23.5-23.8A67.55,67.55,0,0,1,144.27,44h.26a67.62,67.62,0,0,1,48.21,20.29C218.85,90.78,218.38,134.05,191.71,160.77Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
