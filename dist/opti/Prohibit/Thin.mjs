var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (e, a, t) => a in e ? A(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, c = (e, a) => {
  for (var t in a || (a = {}))
    p.call(a, t) && i(e, t, a[t]);
  if (m)
    for (var t of m(a))
      n.call(a, t) && i(e, t, a[t]);
  return e;
};
var f = (e, a) => {
  var t = {};
  for (var r in e)
    p.call(e, r) && a.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      a.indexOf(r) < 0 && n.call(e, r) && (t[r] = e[r]);
  return t;
};
import s, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((r, t) => {
  var o = r, { children: e } = o, a = f(o, ["children"]);
  return /* @__PURE__ */ s.createElement(h, c({ ref: t }, a), e, /* @__PURE__ */ s.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm92,100a91.67,91.67,0,0,1-24.21,62.13L65.87,60.21A92,92,0,0,1,220,128ZM36,128A91.67,91.67,0,0,1,60.21,65.87L190.13,195.79A92,92,0,0,1,36,128Z" }));
});
l.displayName = "Thin";
export {
  l as Thin
};
