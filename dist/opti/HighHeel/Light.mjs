var H = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      c.call(t, e) && i(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && c.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const n = d((r, e) => {
  var o = r, { children: a } = o, t = l(o, ["children"]);
  return /* @__PURE__ */ s.createElement(h, f({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M230.53,158.14,179,146.53,68.24,35.76a6,6,0,0,0-8.67.19C37.92,59.62,26,89.47,26,120v72a14,14,0,0,0,14,14H72a14,14,0,0,0,14-14V139.65a115,115,0,0,1,51.74,57.69,13.92,13.92,0,0,0,13,8.66H240a14,14,0,0,0,14-14v-4.73A29.73,29.73,0,0,0,230.53,158.14ZM74,192a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V126.18A112.75,112.75,0,0,1,74,134Zm168,0a2,2,0,0,1-2,2H150.72a2,2,0,0,1-1.86-1.18,126.53,126.53,0,0,0-45.58-56.65,125.13,125.13,0,0,0-65.12-22C39.47,90.66,48.6,67.83,64.31,48.79L171.76,156.24a6,6,0,0,0,2.92,1.61l53.23,12A17.81,17.81,0,0,1,242,187.31Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
