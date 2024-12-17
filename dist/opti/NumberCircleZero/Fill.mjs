var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var s = (e, a, t) => a in e ? d(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, i = (e, a) => {
  for (var t in a || (a = {}))
    l.call(a, t) && s(e, t, a[t]);
  if (r)
    for (var t of r(a))
      o.call(a, t) && s(e, t, a[t]);
  return e;
};
var p = (e, a) => {
  var t = {};
  for (var m in e)
    l.call(e, m) && a.indexOf(m) < 0 && (t[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      a.indexOf(m) < 0 && o.call(e, m) && (t[m] = e[m]);
  return t;
};
import f, { forwardRef as n } from "react";
import Z from "../../lib/OptiBase.mjs";
const C = n((m, t) => {
  var c = m, { children: e } = c, a = p(c, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, i({ ref: t }, a), e, /* @__PURE__ */ f.createElement("path", { d: "M156,128c0,14.86-5.9,40-28,40s-28-25.14-28-40,5.9-40,28-40S156,113.14,156,128Zm76,0A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-60,0c0-14.25-3.56-27.53-10-37.39C154,78.44,142.23,72,128,72s-26,6.44-34,18.61c-6.47,9.86-10,23.14-10,37.39s3.56,27.53,10,37.39c8,12.18,19.74,18.61,34,18.61s26-6.43,34-18.61C168.44,155.53,172,142.25,172,128Z" }));
});
C.displayName = "Fill";
export {
  C as Fill
};
