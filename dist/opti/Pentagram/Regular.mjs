var h = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var L = (e, m, a) => m in e ? h(e, m, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[m] = a, p = (e, m) => {
  for (var a in m || (m = {}))
    o.call(m, a) && L(e, a, m[a]);
  if (t)
    for (var a of t(m))
      Z.call(m, a) && L(e, a, m[a]);
  return e;
};
var c = (e, m) => {
  var a = {};
  for (var r in e)
    o.call(e, r) && m.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && t)
    for (var r of t(e))
      m.indexOf(r) < 0 && Z.call(e, r) && (a[r] = e[r]);
  return a;
};
import f, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const A = i((r, a) => {
  var l = r, { children: e } = l, m = c(l, ["children"]);
  return /* @__PURE__ */ f.createElement(s, p({ ref: a }, m), e, /* @__PURE__ */ f.createElement("path", { d: "M239.18,91.05A15.75,15.75,0,0,0,224,80h-61L143.23,19.26a15.93,15.93,0,0,0-30.45-.05L93.06,80H32a16,16,0,0,0-9.37,29l49.46,35.58L53.15,203A15.75,15.75,0,0,0,59,220.88a15.74,15.74,0,0,0,18.77,0L128,184.75l50.23,36.13A16,16,0,0,0,202.85,203l-19-58.46,49.49-35.61A15.74,15.74,0,0,0,239.18,91.05ZM128,24.15,146.12,80H109.88ZM32,96H87.87L77.3,128.56Zm36.34,112h0l17.39-53.59,28.54,20.54Zm22.57-69.57L104.69,96h46.62l13.75,42.38L128,165Zm96.69,69.57,0,0-45.9-33,28.54-20.54Zm-8.93-79.38L168.13,96H224Z" }));
});
A.displayName = "Regular";
export {
  A as Regular
};
