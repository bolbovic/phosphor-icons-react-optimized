var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import H, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = h((r, e) => {
  var c = r, { children: a } = c, t = V(c, ["children"]);
  return /* @__PURE__ */ H.createElement(s, A({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M230,112a22,22,0,0,0-22-22H134V77.4A30.05,30.05,0,0,0,158,48c0-26.9-25.58-44.27-26.67-45a6,6,0,0,0-6.66,0C123.58,3.73,98,21.1,98,48a30.05,30.05,0,0,0,24,29.4V90H48a22,22,0,0,0-22,22v23.33a38.81,38.81,0,0,0,8,23.57V200a22,22,0,0,0,22,22H200a22,22,0,0,0,22-22V158.9a38.81,38.81,0,0,0,8-23.57ZM110,48c0-15.4,12-27.41,18-32.44,6,5,18,17,18,32.44a18,18,0,0,1-36,0ZM38,112a10,10,0,0,1,10-10H208a10,10,0,0,1,10,10v23.33c0,14.32-11.33,26.28-25.26,26.66A26,26,0,0,1,166,136a6,6,0,0,0-12,0,26,26,0,0,1-52,0,6,6,0,0,0-12,0,26,26,0,0,1-26.74,26C49.33,161.61,38,149.65,38,135.33Zm162,98H56a10,10,0,0,1-10-10V169.31A36.8,36.8,0,0,0,62.94,174,37.82,37.82,0,0,0,90.5,163.24,38.83,38.83,0,0,0,96,156.5a38,38,0,0,0,64,0,38.83,38.83,0,0,0,5.52,6.74A37.73,37.73,0,0,0,192,174h1.07A36.8,36.8,0,0,0,210,169.31V200A10,10,0,0,1,200,210Z" }));
});
Z.displayName = "Light";
export {
  Z as Light
};
