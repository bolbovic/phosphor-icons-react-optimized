var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (e, a, t) => a in e ? d(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, c = (e, a) => {
  for (var t in a || (a = {}))
    l.call(a, t) && i(e, t, a[t]);
  if (m)
    for (var t of m(a))
      p.call(a, t) && i(e, t, a[t]);
  return e;
};
var f = (e, a) => {
  var t = {};
  for (var r in e)
    l.call(e, r) && a.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      a.indexOf(r) < 0 && p.call(e, r) && (t[r] = e[r]);
  return t;
};
import s, { forwardRef as h } from "react";
import n from "../../lib/OptiBase.mjs";
const L = h((r, t) => {
  var o = r, { children: e } = o, a = f(o, ["children"]);
  return /* @__PURE__ */ s.createElement(n, c({ ref: t }, a), e, /* @__PURE__ */ s.createElement("path", { d: "M205.42,202.57a6,6,0,0,1-8,2.85l-152-72a6,6,0,0,1,0-10.84l152-72a6,6,0,0,1,5.14,10.84L62,128l140.55,66.58A6,6,0,0,1,205.42,202.57Z" }));
});
L.displayName = "Light";
export {
  L as Light
};
