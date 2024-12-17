var s = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, a, t) => a in e ? s(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, L = (e, a) => {
  for (var t in a || (a = {}))
    i.call(a, t) && o(e, t, a[t]);
  if (c)
    for (var t of c(a))
      p.call(a, t) && o(e, t, a[t]);
  return e;
};
var f = (e, a) => {
  var t = {};
  for (var r in e)
    i.call(e, r) && a.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && c)
    for (var r of c(e))
      a.indexOf(r) < 0 && p.call(e, r) && (t[r] = e[r]);
  return t;
};
import l, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const n = d((r, t) => {
  var m = r, { children: e } = m, a = f(m, ["children"]);
  return /* @__PURE__ */ l.createElement(h, L({ ref: t }, a), e, /* @__PURE__ */ l.createElement("path", { d: "M221.45,40.19a6,6,0,0,0-5.64-5.64C140.43,30.11,80.14,52.71,54.53,95c-17.44,28.79-16.76,62.8,1.79,96.2L35.76,211.76a6,6,0,1,0,8.48,8.48L64.8,199.68c17.27,9.59,34.7,14.41,51.49,14.41A85.38,85.38,0,0,0,161,201.47C203.29,175.86,225.88,115.57,221.45,40.19Zm-66.66,151c-24.08,14.58-52.64,14.37-81.13-.39l90.59-90.59a6,6,0,0,0-8.48-8.48L65.18,182.34c-14.76-28.49-15-57-.39-81.13,22.68-37.43,76.63-57.8,145-54.95C212.59,114.58,192.22,168.54,154.79,191.21Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
