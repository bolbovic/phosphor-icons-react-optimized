var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      A.call(t, e) && m(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var l in a)
    p.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && A.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const L = i((l, e) => {
  var r = l, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M242.79,149.32,223.7,97.11A20,20,0,0,0,198.12,85.2l-61.31,22.22L147.7,45.18A20,20,0,0,0,131.55,22L76.87,12.31A19.94,19.94,0,0,0,53.76,28.55l-25,143.13A48,48,0,0,0,67.4,227.26a51.19,51.19,0,0,0,8.7.74H224a20,20,0,0,0,20-20V156.19A21.74,21.74,0,0,0,242.79,149.32ZM99,184.18a23.84,23.84,0,0,1-9.86,15.56,23.28,23.28,0,0,1-17.56,3.89,24,24,0,0,1-19.23-27.82L76.71,36.66,123.37,45,99,184.18Zm23.64,4.13,9.39-53.64,70.49-25.54,16.3,44.59-96.23,34.87C122.62,188.5,122.65,188.41,122.66,188.31ZM220,204H150.52L220,178.82ZM89.22,174.07l-1.4,8A12,12,0,0,1,76,192a12.35,12.35,0,0,1-2.08-.18,12,12,0,0,1-9.75-13.89l1.4-8a12,12,0,0,1,23.64,4.14Z" }));
});
L.displayName = "Bold";
export {
  L as Bold
};
