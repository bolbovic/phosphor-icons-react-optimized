var d = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, a, t) => a in e ? d(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, c = (e, a) => {
  for (var t in a || (a = {}))
    i.call(a, t) && o(e, t, a[t]);
  if (l)
    for (var t of l(a))
      p.call(a, t) && o(e, t, a[t]);
  return e;
};
var f = (e, a) => {
  var t = {};
  for (var r in e)
    i.call(e, r) && a.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && l)
    for (var r of l(e))
      a.indexOf(r) < 0 && p.call(e, r) && (t[r] = e[r]);
  return t;
};
import s, { forwardRef as n } from "react";
import E from "../../lib/OptiBase.mjs";
const F = n((r, t) => {
  var m = r, { children: e } = m, a = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(E, c({ ref: t }, a), e, /* @__PURE__ */ s.createElement("path", { d: "M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z" }));
});
F.displayName = "Fill";
export {
  F as Fill
};
