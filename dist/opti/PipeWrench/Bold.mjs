var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var m = (a, e, l) => e in a ? i(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, c = (a, e) => {
  for (var l in e || (e = {}))
    p.call(e, l) && m(a, l, e[l]);
  if (o)
    for (var l of o(e))
      L.call(e, l) && m(a, l, e[l]);
  return a;
};
var d = (a, e) => {
  var l = {};
  for (var t in a)
    p.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      e.indexOf(t) < 0 && L.call(a, t) && (l[t] = a[t]);
  return l;
};
import f, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = s((t, l) => {
  var r = t, { children: a } = r, e = d(r, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, c({ ref: l }, e), a, /* @__PURE__ */ f.createElement("path", { d: "M219.11,40.2l-.36-.35L185.92,9.64a20,20,0,0,0-28,.19L110.36,57.11a32,32,0,0,0-45.46,45l-15.06,15a20,20,0,0,0,0,28.29l17.72,17.72-30.2,30.2a32,32,0,0,0,45.26,45.26l0,0,91.51-92.32a20,20,0,0,0-.38-28.61l-13-12.4,11.91-11.8,14.73,13a20,20,0,0,0,28-.33l3.71-3.71a44,44,0,0,0,0-62.23ZM69.65,131.32l12.21-12.19L96.73,134l-12.2,12.21Zm-4,90.36a8,8,0,0,1-11.3-11.33l67.86-67.86a12,12,0,0,0,0-17L82.33,85.66A8,8,0,0,1,93.65,74.34c.06.07.13.13.19.19l60.44,57.72ZM202.14,85.46l-1,1L186.27,73.44a20.06,20.06,0,0,0-27.82.38l-15,14.88-15.72-15L172.1,29.53l30.19,27.8a20,20,0,0,1-.15,28.13Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};