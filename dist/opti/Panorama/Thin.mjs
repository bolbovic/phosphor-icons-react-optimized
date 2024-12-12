var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var A = (a, e, l) => e in a ? n(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, i = (a, e) => {
  for (var l in e || (e = {}))
    o.call(e, l) && A(a, l, e[l]);
  if (r)
    for (var l of r(e))
      c.call(e, l) && A(a, l, e[l]);
  return a;
};
var p = (a, e) => {
  var l = {};
  for (var t in a)
    o.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      e.indexOf(t) < 0 && c.call(a, t) && (l[t] = a[t]);
  return l;
};
import s, { forwardRef as C } from "react";
import V from "../../lib/OptiBase.mjs";
const Z = C((t, l) => {
  var m = t, { children: a } = m, e = p(m, ["children"]);
  return /* @__PURE__ */ s.createElement(V, i({ ref: l }, e), a, /* @__PURE__ */ s.createElement("path", { d: "M239.31,54.49a11.88,11.88,0,0,0-10.39-2.08l-3.47.93C206.47,58.47,171.14,68,128,68S49.53,58.47,30.55,53.34l-3.47-.93A12,12,0,0,0,12,64V192a11.95,11.95,0,0,0,15.09,11.59l3.18-.85C49.27,197.58,84.64,188,128,188s78.73,9.58,97.73,14.73l3.18.85A12,12,0,0,0,244,192V64A11.92,11.92,0,0,0,239.31,54.49ZM21.57,60.83A4,4,0,0,1,24,60a4.19,4.19,0,0,1,1,.14l3.44.93C47.8,66.29,83.8,76,128,76s80.2-9.71,99.54-14.93l3.45-.93A4,4,0,0,1,236,64V192c0,.13,0,.24,0,.37l-64.85-64.85a12,12,0,0,0-17,0l-22.83,22.83L84.49,103.51a12,12,0,0,0-17,0L20,151V64A4,4,0,0,1,21.57,60.83ZM28.17,195l-3.15.85A4,4,0,0,1,20,192V162.34l53.17-53.17a4,4,0,0,1,5.66,0l71.67,71.67c-7.24-.53-14.76-.84-22.5-.84C83.57,180,46.16,190.13,28.17,195ZM163,182l-26-26,22.83-22.83a4,4,0,0,1,5.66,0l61.64,61.64C214,191.25,191.11,185.14,163,182Zm33-74a8,8,0,1,1,8,8A8,8,0,0,1,196,108Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
