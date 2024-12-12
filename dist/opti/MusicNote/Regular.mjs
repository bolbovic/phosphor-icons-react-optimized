var d = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var o = (e, t, a) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, s = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && o(e, a, t[a]);
  if (l)
    for (var a of l(t))
      f.call(t, a) && o(e, a, t[a]);
  return e;
};
var A = (e, t) => {
  var a = {};
  for (var r in e)
    p.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && l)
    for (var r of l(e))
      t.indexOf(r) < 0 && f.call(e, r) && (a[r] = e[r]);
  return a;
};
import c, { forwardRef as i } from "react";
import R from "../../lib/OptiBase.mjs";
const V = i((r, a) => {
  var m = r, { children: e } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ c.createElement(R, s({ ref: a }, t), e, /* @__PURE__ */ c.createElement("path", { d: "M210.3,56.34l-80-24A8,8,0,0,0,120,40V148.26A48,48,0,1,0,136,184V98.75l69.7,20.91A8,8,0,0,0,216,112V64A8,8,0,0,0,210.3,56.34ZM88,216a32,32,0,1,1,32-32A32,32,0,0,1,88,216ZM200,101.25l-64-19.2V50.75L200,70Z" }));
});
V.displayName = "Regular";
export {
  V as Regular,
  V as default
};
