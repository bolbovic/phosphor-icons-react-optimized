var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var l = (e, a, t) => a in e ? Z(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, p = (e, a) => {
  for (var t in a || (a = {}))
    o.call(a, t) && l(e, t, a[t]);
  if (r)
    for (var t of r(a))
      i.call(a, t) && l(e, t, a[t]);
  return e;
};
var f = (e, a) => {
  var t = {};
  for (var m in e)
    o.call(e, m) && a.indexOf(m) < 0 && (t[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      a.indexOf(m) < 0 && i.call(e, m) && (t[m] = e[m]);
  return t;
};
import s, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const A = d((m, t) => {
  var c = m, { children: e } = c, a = f(c, ["children"]);
  return /* @__PURE__ */ s.createElement(n, p({ ref: t }, a), e, /* @__PURE__ */ s.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm39.11,25.19C170.24,83.71,155,99.44,135,113.61c-2.25-24.48-8.44-49.8-38.37-67.82a87.89,87.89,0,0,1,70.5,3.4ZM40.18,133.54c28.34-20,49.57-14.68,71.87-4.39C92,143.34,73.19,161.36,72.52,196.26A87.92,87.92,0,0,1,40.18,133.54Zm136.5,67.73c-31.45-14.55-37.47-35.58-39.71-60,12.72,5.86,26.31,10.75,41.3,10.75,11.33,0,23.46-2.8,36.63-10.08A88.2,88.2,0,0,1,176.68,201.27Z" }));
});
A.displayName = "Fill";
export {
  A as Fill
};
