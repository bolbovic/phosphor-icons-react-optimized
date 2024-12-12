var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var L = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && L(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && L(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var l in a)
    o.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && i.call(a, l) && (e[l] = a[l]);
  return e;
};
import h, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((l, e) => {
  var r = l, { children: a } = r, t = H(r, ["children"]);
  return /* @__PURE__ */ h.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M233.91,118.14l-96-96a13.93,13.93,0,0,0-19.72,0l-96,96.05a13.93,13.93,0,0,0,0,19.72l96.05,96a13.93,13.93,0,0,0,19.72,0l96-96a13.93,13.93,0,0,0,0-19.72ZM126.62,30.57a2,2,0,0,1,2.76,0L188.81,90H160a6,6,0,0,0-4.24,1.76L128,119.52,100.24,91.76A6,6,0,0,0,96,90H67.19ZM30,128a1.94,1.94,0,0,1,.57-1.38L55.19,102H93.51l26,26-26,26H55.19L30.57,129.38A1.94,1.94,0,0,1,30,128Zm99.38,97.43a2,2,0,0,1-2.76,0L67.19,166H96a6,6,0,0,0,4.24-1.76L128,136.48l27.76,27.76A6,6,0,0,0,160,166h28.81Zm96.05-96.05L200.81,154H162.49l-26-26,26-26h38.32l24.62,24.62a2,2,0,0,1,0,2.76Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
