var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, t, a) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    i.call(t, a) && o(e, a, t[a]);
  if (r)
    for (var a of r(t))
      p.call(t, a) && o(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var l in e)
    i.call(e, l) && t.indexOf(l) < 0 && (a[l] = e[l]);
  if (e != null && r)
    for (var l of r(e))
      t.indexOf(l) < 0 && p.call(e, l) && (a[l] = e[l]);
  return a;
};
import s, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const h = n((l, a) => {
  var m = l, { children: e } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(A, c({ ref: a }, t), e, /* @__PURE__ */ s.createElement("path", { d: "M215.39,132.94a8,8,0,0,1-1.73,8.72l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,128h60.69L42.34,61.66A8,8,0,0,1,48,48H208a8,8,0,0,1,5.66,13.66L147.31,128H208A8,8,0,0,1,215.39,132.94Z" }));
});
h.displayName = "Fill";
export {
  h as Fill
};
