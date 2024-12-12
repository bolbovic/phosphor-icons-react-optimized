var s = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var o = (e, r, a) => r in e ? s(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, c = (e, r) => {
  for (var a in r || (r = {}))
    p.call(r, a) && o(e, a, r[a]);
  if (l)
    for (var a of l(r))
      A.call(r, a) && o(e, a, r[a]);
  return e;
};
var f = (e, r) => {
  var a = {};
  for (var t in e)
    p.call(e, t) && r.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && l)
    for (var t of l(e))
      r.indexOf(t) < 0 && A.call(e, t) && (a[t] = e[t]);
  return a;
};
import i, { forwardRef as L } from "react";
import R from "../../lib/OptiBase.mjs";
const d = L((t, a) => {
  var m = t, { children: e } = m, r = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(R, c({ ref: a }, r), e, /* @__PURE__ */ i.createElement("path", { d: "M227.31,80.24,175.76,28.69A15.86,15.86,0,0,0,164.45,24H91.55a15.86,15.86,0,0,0-11.31,4.69L28.69,80.24A15.86,15.86,0,0,0,24,91.55v72.9a15.86,15.86,0,0,0,4.69,11.31l51.55,51.55A15.86,15.86,0,0,0,91.55,232h72.9a15.86,15.86,0,0,0,11.31-4.69l51.55-51.55A15.86,15.86,0,0,0,232,164.45V91.55A15.86,15.86,0,0,0,227.31,80.24ZM216,164.45,164.45,216H91.55L40,164.45V91.55L91.55,40h72.9L216,91.55Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
