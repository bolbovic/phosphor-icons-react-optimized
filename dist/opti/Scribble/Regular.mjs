var i = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (e, r, a) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, p = (e, r) => {
  for (var a in r || (r = {}))
    o.call(r, a) && m(e, a, r[a]);
  if (A)
    for (var a of A(r))
      l.call(r, a) && m(e, a, r[a]);
  return e;
};
var c = (e, r) => {
  var a = {};
  for (var t in e)
    o.call(e, t) && r.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && A)
    for (var t of A(e))
      r.indexOf(t) < 0 && l.call(e, t) && (a[t] = e[t]);
  return a;
};
import f, { forwardRef as s } from "react";
import R from "../../lib/OptiBase.mjs";
const d = s((t, a) => {
  var L = t, { children: e } = L, r = c(L, ["children"]);
  return /* @__PURE__ */ f.createElement(R, p({ ref: a }, r), e, /* @__PURE__ */ f.createElement("path", { d: "M205.67,189.66a14.61,14.61,0,0,0,0,20.68,8,8,0,0,1-11.32,11.32,30.64,30.64,0,0,1,0-43.32l9.38-9.37A14.63,14.63,0,0,0,183,148.28L116.28,215A30.63,30.63,0,0,1,73,171.72L171.72,73A14.63,14.63,0,0,0,151,52.28L84.28,119A30.63,30.63,0,0,1,41,75.72L82.34,34.34A8,8,0,0,1,93.65,45.66L52.27,87A14.63,14.63,0,0,0,73,107.72L139.72,41A30.63,30.63,0,0,1,183,84.28L84.28,183A14.63,14.63,0,0,0,105,203.72L171.72,137A30.63,30.63,0,0,1,215,180.28Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
