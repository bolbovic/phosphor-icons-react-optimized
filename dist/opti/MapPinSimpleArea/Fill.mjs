var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var l = (e, t, a) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, p = (e, t) => {
  for (var a in t || (t = {}))
    o.call(t, a) && l(e, a, t[a]);
  if (r)
    for (var a of r(t))
      i.call(t, a) && l(e, a, t[a]);
  return e;
};
var s = (e, t) => {
  var a = {};
  for (var c in e)
    o.call(e, c) && t.indexOf(c) < 0 && (a[c] = e[c]);
  if (e != null && r)
    for (var c of r(e))
      t.indexOf(c) < 0 && i.call(e, c) && (a[c] = e[c]);
  return a;
};
import f, { forwardRef as n } from "react";
import C from "../../lib/OptiBase.mjs";
const A = n((c, a) => {
  var m = c, { children: e } = m, t = s(m, ["children"]);
  return /* @__PURE__ */ f.createElement(C, p({ ref: a }, t), e, /* @__PURE__ */ f.createElement("path", { d: "M88,64a40,40,0,1,1,48,39.19V176a8,8,0,0,1-16,0V103.19A40.05,40.05,0,0,1,88,64Zm130,82.59c-12.26-6.94-29.12-12.27-48.77-15.42A8,8,0,1,0,166.73,147c17.54,2.82,33,7.63,43.42,13.55C219,165.5,224,171.14,224,176c0,13.36-36.52,32-96,32s-96-18.64-96-32c0-4.86,5-10.5,13.85-15.49,10.46-5.92,25.88-10.73,43.42-13.55a8,8,0,1,0-2.54-15.79c-19.65,3.15-36.51,8.48-48.77,15.42C19.81,156.87,16,168.26,16,176c0,31.18,57.71,48,112,48s112-16.82,112-48C240,168.26,236.19,156.87,218,146.59Z" }));
});
A.displayName = "Fill";
export {
  A as Fill
};
