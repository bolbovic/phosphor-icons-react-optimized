var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var l = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, d = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && l(e, a, t[a]);
  if (r)
    for (var a of r(t))
      A.call(t, a) && l(e, a, t[a]);
  return e;
};
var Z = (e, t) => {
  var a = {};
  for (var o in e)
    p.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && A.call(e, o) && (a[o] = e[o]);
  return a;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const M = i((o, a) => {
  var m = o, { children: e } = m, t = Z(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: a }, t), e, /* @__PURE__ */ c.createElement("path", { d: "M244,76H12A12,12,0,0,0,0,88v4a128,128,0,0,0,256,0V88A12,12,0,0,0,244,76ZM64.52,100h42.69L84.67,139.05A63.87,63.87,0,0,1,64.52,100ZM128,112l22.94,39.73a63.76,63.76,0,0,1-45.88,0Zm43.33,27.05L148.79,100h42.69A63.87,63.87,0,0,1,171.33,139.05ZM128,196A104.15,104.15,0,0,1,24.3,100H40.37a88,88,0,0,0,175.26,0H231.7A104.15,104.15,0,0,1,128,196Z" }));
});
M.displayName = "Bold";
export {
  M as Bold
};
