var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, a, t) => a in e ? d(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, c = (e, a) => {
  for (var t in a || (a = {}))
    i.call(a, t) && o(e, t, a[t]);
  if (m)
    for (var t of m(a))
      p.call(a, t) && o(e, t, a[t]);
  return e;
};
var f = (e, a) => {
  var t = {};
  for (var r in e)
    i.call(e, r) && a.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      a.indexOf(r) < 0 && p.call(e, r) && (t[r] = e[r]);
  return t;
};
import s, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const E = n((r, t) => {
  var l = r, { children: e } = l, a = f(l, ["children"]);
  return /* @__PURE__ */ s.createElement(A, c({ ref: t }, a), e, /* @__PURE__ */ s.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,176A72,72,0,0,1,92,65.64a8,8,0,0,1,8,13.85,56,56,0,1,0,56,0,8,8,0,0,1,8-13.85A72,72,0,0,1,128,200Z" }));
});
E.displayName = "Fill";
export {
  E as Fill
};
