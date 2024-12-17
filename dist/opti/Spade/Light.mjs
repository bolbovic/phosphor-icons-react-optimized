var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const n = s((r, e) => {
  var o = r, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ f.createElement(d, c({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M179.84,51.39a284.14,284.14,0,0,0-49.16-32.76,6,6,0,0,0-5.36,0A284.14,284.14,0,0,0,76.16,51.39C42.88,79.13,26,107.59,26,136a54,54,0,0,0,75.24,49.65l-11,36.63A6,6,0,0,0,96,230h64a6,6,0,0,0,5.75-7.72l-11-36.63A54,54,0,0,0,230,136C230,107.59,213.12,79.13,179.84,51.39ZM176,178a42,42,0,0,1-27.6-10.34,6,6,0,0,0-9.69,6.24L151.94,218H104.06l13.23-44.1a6,6,0,0,0-9.69-6.24A42,42,0,0,1,38,136c0-53.73,74.77-97,90-105.22C143.24,39,218,82.2,218,136A42,42,0,0,1,176,178Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
