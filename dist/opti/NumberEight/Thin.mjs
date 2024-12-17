var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (e, t, a) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
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
import s, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const Z = h((r, a) => {
  var o = r, { children: e } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ s.createElement(l, c({ ref: a }, t), e, /* @__PURE__ */ s.createElement("path", { d: "M147.08,119.64a44,44,0,1,0-38.16,0,52,52,0,1,0,38.16,0ZM92,80a36,36,0,1,1,36,36A36,36,0,0,1,92,80Zm36,132a44,44,0,1,1,44-44A44.05,44.05,0,0,1,128,212Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
