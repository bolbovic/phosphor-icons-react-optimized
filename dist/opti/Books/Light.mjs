var p = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var L = (a, e, m) => e in a ? p(a, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : a[e] = m, h = (a, e) => {
  for (var m in e || (e = {}))
    Z.call(e, m) && L(a, m, e[m]);
  if (l)
    for (var m of l(e))
      A.call(e, m) && L(a, m, e[m]);
  return a;
};
var o = (a, e) => {
  var m = {};
  for (var t in a)
    Z.call(a, t) && e.indexOf(t) < 0 && (m[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      e.indexOf(t) < 0 && A.call(a, t) && (m[t] = a[t]);
  return m;
};
import i, { forwardRef as V } from "react";
import c from "../../lib/OptiBase.mjs";
const f = V((t, m) => {
  var r = t, { children: a } = r, e = o(r, ["children"]);
  return /* @__PURE__ */ i.createElement(c, h({ ref: m }, e), a, /* @__PURE__ */ i.createElement("path", { d: "M104,34H56A14,14,0,0,0,42,48V208a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V48A14,14,0,0,0,104,34ZM54,78h52V178H54Zm2-32h48a2,2,0,0,1,2,2V66H54V48A2,2,0,0,1,56,46Zm48,164H56a2,2,0,0,1-2-2V190h52v18A2,2,0,0,1,104,210Zm125.7-15L196.51,37.16a14,14,0,0,0-16.63-10.85L133.07,36.37A14.09,14.09,0,0,0,122.3,53l33.19,157.81a14,14,0,0,0,6.1,8.9,13.85,13.85,0,0,0,7.57,2.26,13.55,13.55,0,0,0,3-.32l46.81-10.05A14.09,14.09,0,0,0,229.7,195Zm-82.81-83.32,50.73-10.9,14.12,67.16L161,178.81Zm-6.63-31.56L191,69.19,195.15,89l-50.73,10.9Zm-4.66-32,46.8-10.05a2.18,2.18,0,0,1,.42,0,1.89,1.89,0,0,1,1.05.32,2,2,0,0,1,.89,1.31l3.75,17.82L137.79,68.34l-3.74-17.78A2.07,2.07,0,0,1,135.6,48.1Zm80.81,151.8L169.6,210a1.92,1.92,0,0,1-1.47-.27,2,2,0,0,1-.89-1.31l-3.75-17.82,50.72-10.9L218,197.43A2.07,2.07,0,0,1,216.41,199.9Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
