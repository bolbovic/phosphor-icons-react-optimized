var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && c(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && c(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && d.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((m, e) => {
  var r = m, { children: a } = r, t = H(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, l({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M124,192a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24h72A12,12,0,0,1,124,192ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24Zm0,64H96a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24Zm212,4c0,17-9.53,33.56-28.32,49.22a151.47,151.47,0,0,1-26.31,17.51,12,12,0,0,1-10.74,0,151.47,151.47,0,0,1-26.31-17.51C141.53,177.56,132,161,132,144a36,36,0,0,1,60-26.81A36,36,0,0,1,252,144Zm-24,0a12,12,0,0,0-24,0,12,12,0,0,1-24,0,12,12,0,0,0-24,0c0,17.23,22.85,34.43,36,42.29C205.14,178.44,228,161.23,228,144Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
