var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && r(a, e, t[e]);
  if (m)
    for (var e of m(t))
      A.call(t, e) && r(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var l in a)
    c.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && A.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as s } from "react";
import n from "../../lib/OptiBase.mjs";
const B = s((l, e) => {
  var o = l, { children: a } = o, t = d(o, ["children"]);
  return /* @__PURE__ */ f.createElement(n, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M144,104a16,16,0,1,1-16-16A16,16,0,0,1,144,104Zm92,25.53A108.3,108.3,0,0,1,130.18,236l-2.25,0A107.31,107.31,0,0,1,56,208.94a12,12,0,1,1,16-17.88,81.42,81.42,0,0,0,16.2,11.26l21.54-29.62c-20.4-7-41.91-3.33-54.43-1.21a35.79,35.79,0,0,1-35.25-14.43c-.16-.21-.31-.43-.45-.65l-13.78-22A12,12,0,0,1,9.43,118L108,53.51V32a12,12,0,0,1,12-12h8A108,108,0,0,1,236,129.53Zm-24-.33a84,84,0,0,0-80-85.11V60a12,12,0,0,1-5.43,10L32.41,131.61l7.31,11.68a12,12,0,0,0,11.58,4.54c16.23-2.75,49.4-8.36,79.64,8A36,36,0,0,0,164,120a12,12,0,0,1,24,0,60.09,60.09,0,0,1-53.64,59.66l-22.45,30.87a87.57,87.57,0,0,0,17.8,1.45A84.29,84.29,0,0,0,212,129.2Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
