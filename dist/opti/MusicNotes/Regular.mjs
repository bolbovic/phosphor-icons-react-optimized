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
import i, { forwardRef as M } from "react";
import R from "../../lib/OptiBase.mjs";
const V = M((t, a) => {
  var m = t, { children: e } = m, r = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(R, c({ ref: a }, r), e, /* @__PURE__ */ i.createElement("path", { d: "M212.92,17.69a8,8,0,0,0-6.86-1.45l-128,32A8,8,0,0,0,72,56V166.08A36,36,0,1,0,88,196V110.25l112-28v51.83A36,36,0,1,0,216,164V24A8,8,0,0,0,212.92,17.69ZM52,216a20,20,0,1,1,20-20A20,20,0,0,1,52,216ZM88,93.75V62.25l112-28v31.5ZM180,184a20,20,0,1,1,20-20A20,20,0,0,1,180,184Z" }));
});
V.displayName = "Regular";
export {
  V as Regular
};
