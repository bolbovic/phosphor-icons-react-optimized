var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (e, a, t) => a in e ? d(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, c = (e, a) => {
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
import s, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const E = h((r, t) => {
  var o = r, { children: e } = o, a = f(o, ["children"]);
  return /* @__PURE__ */ s.createElement(l, c({ ref: t }, a), e, /* @__PURE__ */ s.createElement("path", { d: "M136,128a8,8,0,1,1-8-8A8,8,0,0,1,136,128Z" }));
});
E.displayName = "Thin";
export {
  E as Thin
};