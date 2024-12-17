var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && l(a, e, t[e]);
  return a;
};
var C = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as A } from "react";
import d from "../../lib/OptiBase.mjs";
const n = A((m, e) => {
  var c = m, { children: a } = c, t = C(c, ["children"]);
  return /* @__PURE__ */ f.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M128,128a81.4,81.4,0,0,1,25.69,4.28C151.56,154.87,137.33,176,112,176c-15.8,0-24.06-10.85-24.06-21.58,0-6.59,3-12.75,8.56-17.35C103.62,131.14,114.52,128,128,128Zm96-80V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48Zm-18.11,98.59a120.21,120.21,0,0,0-36.08-25.21c-.9-14.35-5.75-27.54-13.89-37.55C145.38,70.86,130.19,64,112,64,76.44,64,50.68,97.76,49.6,99.2a8,8,0,0,0,12.79,9.62C62.61,108.53,84.51,80,112,80c13.4,0,24,4.68,31.5,13.92a47.54,47.54,0,0,1,9.48,21.4A96.75,96.75,0,0,0,128,112c-17.27,0-31.71,4.42-41.74,12.78C77,132.47,71.94,143,71.94,154.42,71.94,172.64,86,192,112,192a54,54,0,0,0,43.53-21.23A70,70,0,0,0,169,138.89a106.24,106.24,0,0,1,25.13,18.52,8,8,0,1,0,11.78-10.82Z" }));
});
n.displayName = "Fill";
export {
  n as Fill
};
