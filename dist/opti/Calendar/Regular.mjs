var Z = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var l = (a, r, e) => r in a ? Z(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, p = (a, r) => {
  for (var e in r || (r = {}))
    H.call(r, e) && l(a, e, r[e]);
  if (V)
    for (var e of V(r))
      o.call(r, e) && l(a, e, r[e]);
  return a;
};
var v = (a, r) => {
  var e = {};
  for (var t in a)
    H.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && V)
    for (var t of V(a))
      r.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import A, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const h = c((t, e) => {
  var m = t, { children: a } = m, r = v(m, ["children"]);
  return /* @__PURE__ */ A.createElement(f, p({ ref: e }, r), a, /* @__PURE__ */ A.createElement("path", { d: "M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z" }));
});
h.displayName = "Regular";
export {
  h as Regular
};
