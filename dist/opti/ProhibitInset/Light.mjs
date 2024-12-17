var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (e, a, t) => a in e ? d(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, f = (e, a) => {
  for (var t in a || (a = {}))
    p.call(a, t) && i(e, t, a[t]);
  if (m)
    for (var t of m(a))
      c.call(a, t) && i(e, t, a[t]);
  return e;
};
var l = (e, a) => {
  var t = {};
  for (var r in e)
    p.call(e, r) && a.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      a.indexOf(r) < 0 && c.call(e, r) && (t[r] = e[r]);
  return t;
};
import s, { forwardRef as h } from "react";
import n from "../../lib/OptiBase.mjs";
const Z = h((r, t) => {
  var o = r, { children: e } = o, a = l(o, ["children"]);
  return /* @__PURE__ */ s.createElement(n, f({ ref: t }, a), e, /* @__PURE__ */ s.createElement("path", { d: "M164.24,155.76a6,6,0,1,1-8.48,8.48l-64-64a6,6,0,0,1,8.48-8.48ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z" }));
});
Z.displayName = "Light";
export {
  Z as Light
};
