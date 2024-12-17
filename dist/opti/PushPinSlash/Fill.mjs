var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? s(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, c = (a, l) => {
  for (var e in l || (l = {}))
    i.call(l, e) && o(a, e, l[e]);
  if (r)
    for (var e of r(l))
      p.call(l, e) && o(a, e, l[e]);
  return a;
};
var L = (a, l) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const A = d((t, e) => {
  var m = t, { children: a } = m, l = L(m, ["children"]);
  return /* @__PURE__ */ f.createElement(n, c({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M235.33,104l-47.62,47.78a4,4,0,0,1-5.79-.14L108,70.27a4,4,0,0,1,.13-5.51L152,20.7a16,16,0,0,1,22.63,0l60.69,60.68A16,16,0,0,1,235.33,104ZM53.92,34.62a8,8,0,0,0-12,.21,8.18,8.18,0,0,0,.37,10.75L67.32,73.15C58.26,75.09,48.2,79.37,38,87.63a16,16,0,0,0-1.29,23.78L85,159.71,42.55,202.14a8.17,8.17,0,0,0-.6,11.09,8,8,0,0,0,11.71.43L96.29,171l48.29,48.29A16,16,0,0,0,155.9,224c.38,0,.75,0,1.13,0a15.93,15.93,0,0,0,11.64-6.33,88.62,88.62,0,0,0,11.64-20.2l21.77,23.95a8,8,0,1,0,11.84-10.76Z" }));
});
A.displayName = "Fill";
export {
  A as Fill
};
