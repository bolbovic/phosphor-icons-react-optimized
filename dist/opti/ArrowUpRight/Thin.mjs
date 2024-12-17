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
const E = h((r, a) => {
  var o = r, { children: e } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ s.createElement(l, c({ ref: a }, t), e, /* @__PURE__ */ s.createElement("path", { d: "M196,64V168a4,4,0,0,1-8,0V73.66L66.83,194.83a4,4,0,0,1-5.66-5.66L182.34,68H88a4,4,0,0,1,0-8H192A4,4,0,0,1,196,64Z" }));
});
E.displayName = "Thin";
export {
  E as Thin
};
