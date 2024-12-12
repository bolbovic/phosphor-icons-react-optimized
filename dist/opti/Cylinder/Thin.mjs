var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var c = (e, a, t) => a in e ? d(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, p = (e, a) => {
  for (var t in a || (a = {}))
    o.call(a, t) && c(e, t, a[t]);
  if (r)
    for (var t of r(a))
      i.call(a, t) && c(e, t, a[t]);
  return e;
};
var n = (e, a) => {
  var t = {};
  for (var m in e)
    o.call(e, m) && a.indexOf(m) < 0 && (t[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      a.indexOf(m) < 0 && i.call(e, m) && (t[m] = e[m]);
  return t;
};
import f, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const C = h((m, t) => {
  var s = m, { children: e } = s, a = n(s, ["children"]);
  return /* @__PURE__ */ f.createElement(l, p({ ref: t }, a), e, /* @__PURE__ */ f.createElement("path", { d: "M128,20C89.87,20,60,37.57,60,60V196c0,22.43,29.87,40,68,40s68-17.57,68-40V60C196,37.57,166.13,20,128,20Zm0,8c32.52,0,60,14.65,60,32s-27.48,32-60,32S68,77.35,68,60,95.48,28,128,28Zm60,168c0,17.35-27.48,32-60,32s-60-14.65-60-32V79.11C79.35,91.65,101.71,100,128,100s48.65-8.35,60-20.89Z" }));
});
C.displayName = "Thin";
export {
  C as Thin
};
