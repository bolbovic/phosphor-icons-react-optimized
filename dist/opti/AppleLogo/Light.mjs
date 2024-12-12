var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && c(a, e, t[e]);
  if (m)
    for (var e of m(t))
      o.call(t, e) && c(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var A in a)
    h.call(a, A) && t.indexOf(A) < 0 && (e[A] = a[A]);
  if (a != null && m)
    for (var A of m(a))
      t.indexOf(A) < 0 && o.call(a, A) && (e[A] = a[A]);
  return e;
};
import f, { forwardRef as d } from "react";
import l from "../../lib/OptiBase.mjs";
const n = d((A, e) => {
  var r = A, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ f.createElement(l, i({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M219.4,167.84C201.71,155.69,198,135.12,198,120c0-18.42,13.86-34.29,22.12-42.12a6,6,0,0,0,0-8.71C208,57.7,187.07,50,168,50a70.23,70.23,0,0,0-40,12.55,69.6,69.6,0,0,0-89.31,8.08A72.63,72.63,0,0,0,18,123.35a125.11,125.11,0,0,0,39.53,88.33A37.85,37.85,0,0,0,83.6,222h87.7A37.83,37.83,0,0,0,199,210.07a122.6,122.6,0,0,0,17.54-24.2c6.55-12,5.77-13.75,5-15.48A6.07,6.07,0,0,0,219.4,167.84Zm-29.23,34A25.82,25.82,0,0,1,171.3,210H83.6A25.85,25.85,0,0,1,65.78,203,113.21,113.21,0,0,1,30,123a60.55,60.55,0,0,1,17.21-44A56.82,56.82,0,0,1,88,62h.81a57.35,57.35,0,0,1,35.44,12.71,6,6,0,0,0,7.5,0A57.39,57.39,0,0,1,168,62c13.89,0,28.81,4.68,39.11,12-9.44,10.14-21.1,26.59-21.1,46,0,23.78,7.81,42.6,22.66,54.77A107.33,107.33,0,0,1,190.17,201.89Zm-60-171.39A38,38,0,0,1,167,2h1a6,6,0,0,1,0,12h-1a26,26,0,0,0-25.18,19.5,6,6,0,1,1-11.62-3Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
