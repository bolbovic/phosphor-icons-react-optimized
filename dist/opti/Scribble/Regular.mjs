var c = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var l = (e, t, a) => t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, p = (e, t) => {
  for (var a in t || (t = {}))
    m.call(t, a) && l(e, a, t[a]);
  if (A)
    for (var a of A(t))
      o.call(t, a) && l(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var r in e)
    m.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && A)
    for (var r of A(e))
      t.indexOf(r) < 0 && o.call(e, r) && (a[r] = e[r]);
  return a;
};
import s, { forwardRef as d } from "react";
import i from "../../lib/OptiBase.mjs";
const R = d((r, a) => {
  var L = r, { children: e } = L, t = f(L, ["children"]);
  return /* @__PURE__ */ s.createElement(i, p({ ref: a }, t), e, /* @__PURE__ */ s.createElement("path", { d: "M205.67,189.66a14.61,14.61,0,0,0,0,20.68,8,8,0,0,1-11.32,11.32,30.64,30.64,0,0,1,0-43.32l9.38-9.37A14.63,14.63,0,0,0,183,148.28L116.28,215A30.63,30.63,0,0,1,73,171.72L171.72,73A14.63,14.63,0,0,0,151,52.28L84.28,119A30.63,30.63,0,0,1,41,75.72L82.34,34.34A8,8,0,0,1,93.65,45.66L52.27,87A14.63,14.63,0,0,0,73,107.72L139.72,41A30.63,30.63,0,0,1,183,84.28L84.28,183A14.63,14.63,0,0,0,105,203.72L171.72,137A30.63,30.63,0,0,1,215,180.28Z" }));
});
R.displayName = "Regular";
export {
  R as Regular,
  R as default
};
