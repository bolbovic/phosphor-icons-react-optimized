var s = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? s(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, c = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && o(a, e, l[e]);
  if (t)
    for (var e of t(l))
      H.call(l, e) && o(a, e, l[e]);
  return a;
};
var f = (a, l) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && l.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      l.indexOf(r) < 0 && H.call(a, r) && (e[r] = a[r]);
  return e;
};
import i, { forwardRef as A } from "react";
import L from "../../lib/OptiBase.mjs";
const R = A((r, e) => {
  var m = r, { children: a } = m, l = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(L, c({ ref: e }, l), a, /* @__PURE__ */ i.createElement("path", { d: "M224,232a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16H216A8,8,0,0,1,224,232Zm0-72v32a16,16,0,0,1-16,16H114.11a15.93,15.93,0,0,1-14.32-8.85l-58.11-116a16.1,16.1,0,0,1,0-14.32l22.12-44A16,16,0,0,1,85,17.56l33.69,14.22.47.22a16,16,0,0,1,7.15,21.46,1.51,1.51,0,0,1-.11.22L112,80l31.78,64L208,144A16,16,0,0,1,224,160Zm-16,0H143.77a15.91,15.91,0,0,1-14.31-8.85l-31.79-64a16.07,16.07,0,0,1,0-14.29l.12-.22L112,46.32,78.57,32.21A4.84,4.84,0,0,1,78.1,32L56,76,114.1,192H208Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
