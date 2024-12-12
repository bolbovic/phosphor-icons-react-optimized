var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, e, l) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, p = (a, e) => {
  for (var l in e || (e = {}))
    o.call(e, l) && m(a, l, e[l]);
  if (r)
    for (var l of r(e))
      i.call(e, l) && m(a, l, e[l]);
  return a;
};
var Z = (a, e) => {
  var l = {};
  for (var t in a)
    o.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      e.indexOf(t) < 0 && i.call(a, t) && (l[t] = a[t]);
  return l;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const L = h((t, l) => {
  var A = t, { children: a } = A, e = Z(A, ["children"]);
  return /* @__PURE__ */ c.createElement(s, p({ ref: l }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M210.43,41.22l-130.25-23A14,14,0,0,0,64,29.58l-29.75,169a14,14,0,0,0,11.36,16.22l130.25,23h0a13.64,13.64,0,0,0,2.46.22A14,14,0,0,0,192,226.42l29.75-169A14,14,0,0,0,210.43,41.22ZM210,55.36l-29.75,169a2,2,0,0,1-.82,1.3,2,2,0,0,1-1.49.33L47.65,203A2,2,0,0,1,46,200.64l29.75-169a2,2,0,0,1,.82-1.3A2.06,2.06,0,0,1,78.1,30L208.35,53A2,2,0,0,1,210,55.36ZM186.11,75.51a6,6,0,0,1-5.9,5,6.2,6.2,0,0,1-1.05-.09l-83-14.66a6,6,0,1,1,2.09-11.81l83,14.65A6,6,0,0,1,186.11,75.51ZM180.56,107a6,6,0,0,1-5.9,5,5.48,5.48,0,0,1-1-.1l-83-14.65a6,6,0,0,1,2.09-11.82l83,14.66A6,6,0,0,1,180.56,107Zm-47,24.19a6,6,0,0,1-5.91,4.95,6.38,6.38,0,0,1-1.05-.09l-41.49-7.33a6,6,0,1,1,2.09-11.81l41.49,7.32A6,6,0,0,1,133.53,131.22Z" }));
});
L.displayName = "Light";
export {
  L as Light
};
