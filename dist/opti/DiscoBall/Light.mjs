var p = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? p(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, o = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && r(a, e, t[e]);
  if (c)
    for (var e of c(t))
      Z.call(t, e) && r(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var m in a)
    V.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && c)
    for (var m of c(a))
      t.indexOf(m) < 0 && Z.call(a, m) && (e[m] = a[m]);
  return e;
};
import i, { forwardRef as M } from "react";
import A from "../../lib/OptiBase.mjs";
const f = M((m, e) => {
  var h = m, { children: a } = h, t = H(h, ["children"]);
  return /* @__PURE__ */ i.createElement(A, o({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M118,66.23V16a6,6,0,0,0-12,0V66.23a86,86,0,1,0,12,0ZM185.74,146H149.87c-1.3-32.59-13-54.15-22.36-66.35A74.15,74.15,0,0,1,185.74,146Zm-99.6,12h51.72c-1.63,37.69-18.33,58.46-25.86,66C104.46,216.45,87.77,195.67,86.14,158Zm0-12c1.63-37.69,18.33-58.46,25.86-66,7.54,7.51,24.23,28.29,25.86,66ZM96.49,79.65C87.11,91.85,75.43,113.41,74.13,146H38.26A74.15,74.15,0,0,1,96.49,79.65ZM38.26,158H74.13c1.3,32.59,13,54.15,22.36,66.35A74.15,74.15,0,0,1,38.26,158Zm89.25,66.35c9.38-12.2,21.06-33.76,22.36-66.35h35.87A74.15,74.15,0,0,1,127.51,224.35ZM254,88a6,6,0,0,1-6,6H238v10a6,6,0,0,1-12,0V94H216a6,6,0,0,1,0-12h10V72a6,6,0,0,1,12,0V82h10A6,6,0,0,1,254,88ZM208,46H190V64a6,6,0,0,1-12,0V46H160a6,6,0,0,1,0-12h18V16a6,6,0,0,1,12,0V34h18a6,6,0,0,1,0,12Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
