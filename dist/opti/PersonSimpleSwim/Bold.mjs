var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && c(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var m in a)
    l.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import i, { forwardRef as A } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = A((m, e) => {
  var r = m, { children: a } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(Z, d({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M90.44,108.6l6.24-6.24A83.54,83.54,0,0,0,56.24,92H40a12,12,0,0,1,0-24H56.24A107.28,107.28,0,0,1,132.6,99.64l40.25,40.25c10.74.27,22.11-3.64,35.49-14.73a12,12,0,1,1,15.32,18.47C205.49,158.7,189.06,164,174.15,164c-19.76,0-36.86-9.29-51.88-17.45-25.06-13.61-44.86-24.36-74.61.31a12,12,0,1,1-15.32-18.48C54.07,110.36,73.3,106.32,90.44,108.6ZM140,72a36,36,0,1,1,36,36A36,36,0,0,1,140,72Zm24,0a12,12,0,1,0,12-12A12,12,0,0,0,164,72Zm44.34,109.16c-29.75,24.67-49.55,13.92-74.61.3-26.35-14.3-59.14-32.11-101.39,2.93a12,12,0,1,0,15.32,18.47c29.75-24.66,49.55-13.92,74.61-.3,15,8.15,32.12,17.44,51.88,17.44,14.91,0,31.34-5.29,49.51-20.36a12,12,0,0,0-15.32-18.48Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
