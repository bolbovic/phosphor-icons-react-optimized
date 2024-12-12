var s = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (e, a, t) => a in e ? s(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, p = (e, a) => {
  for (var t in a || (a = {}))
    c.call(a, t) && o(e, t, a[t]);
  if (l)
    for (var t of l(a))
      i.call(a, t) && o(e, t, a[t]);
  return e;
};
var L = (e, a) => {
  var t = {};
  for (var r in e)
    c.call(e, r) && a.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && l)
    for (var r of l(e))
      a.indexOf(r) < 0 && i.call(e, r) && (t[r] = e[r]);
  return t;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const n = d((r, t) => {
  var m = r, { children: e } = m, a = L(m, ["children"]);
  return /* @__PURE__ */ f.createElement(h, p({ ref: t }, a), e, /* @__PURE__ */ f.createElement("path", { d: "M236.24,87.76l-60-60a6,6,0,0,0-8.48,0L38.53,157A42.77,42.77,0,1,0,99,217.47L211.24,105.24l22.66-7.55a6,6,0,0,0,2.34-9.93ZM90.53,209A30.77,30.77,0,1,1,47,165.47l29.13-29.12c8.84-3.14,22.84-4.56,41.08,5,12.28,6.41,23.13,8.66,32.27,8.71ZM206.1,94.31a6,6,0,0,0-2.34,1.45l-39.9,39.89c-8.84,3.14-22.84,4.56-41.08-5C110.5,124.27,99.65,122,90.51,122L172,40.49l48.89,48.89Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
