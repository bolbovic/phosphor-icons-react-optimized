var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, l, a) => l in e ? d(e, l, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[l] = a, c = (e, l) => {
  for (var a in l || (l = {}))
    i.call(l, a) && o(e, a, l[a]);
  if (r)
    for (var a of r(l))
      p.call(l, a) && o(e, a, l[a]);
  return e;
};
var f = (e, l) => {
  var a = {};
  for (var t in e)
    i.call(e, t) && l.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && r)
    for (var t of r(e))
      l.indexOf(t) < 0 && p.call(e, t) && (a[t] = e[t]);
  return a;
};
import s, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const L = n((t, a) => {
  var m = t, { children: e } = m, l = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(A, c({ ref: a }, l), e, /* @__PURE__ */ s.createElement("path", { d: "M220.49,207.8,207.8,220.49a12,12,0,0,1-17,0l-56.57-56.57L115,214.08l-.13.33A15.84,15.84,0,0,1,100.26,224l-.78,0a15.82,15.82,0,0,1-14.41-11L32.8,52.92A15.95,15.95,0,0,1,52.92,32.8L213,85.07a16,16,0,0,1,1.41,29.8l-.33.13-50.16,19.27,56.57,56.56A12,12,0,0,1,220.49,207.8Z" }));
});
L.displayName = "Fill";
export {
  L as Fill
};
