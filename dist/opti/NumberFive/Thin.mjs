var l = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (e, t, a) => t in e ? l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && i(e, a, t[a]);
  if (m)
    for (var a of m(t))
      n.call(t, a) && i(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var r in e)
    p.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      t.indexOf(r) < 0 && n.call(e, r) && (a[r] = e[r]);
  return a;
};
import h, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const A = s((r, a) => {
  var o = r, { children: e } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ h.createElement(d, c({ ref: a }, t), e, /* @__PURE__ */ h.createElement("path", { d: "M172,160a52,52,0,0,1-86.67,38.76,4,4,0,1,1,5.34-6,44,44,0,1,0,.84-66.33A4,4,0,0,1,85,122.64l15.09-75.42A4,4,0,0,1,104,44h64a4,4,0,0,1,0,8H107.28L94.77,114.53A52,52,0,0,1,172,160Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
