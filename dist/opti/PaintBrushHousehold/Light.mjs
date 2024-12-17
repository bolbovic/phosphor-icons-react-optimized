var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, e, l) => e in a ? s(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, p = (a, e) => {
  for (var l in e || (e = {}))
    L.call(e, l) && o(a, l, e[l]);
  if (r)
    for (var l of r(e))
      i.call(e, l) && o(a, l, e[l]);
  return a;
};
var c = (a, e) => {
  var l = {};
  for (var t in a)
    L.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      e.indexOf(t) < 0 && i.call(a, t) && (l[t] = a[t]);
  return l;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const n = d((t, l) => {
  var m = t, { children: a } = m, e = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(h, p({ ref: l }, e), a, /* @__PURE__ */ f.createElement("path", { d: "M229.23,26.77a30.05,30.05,0,0,0-42.43,0l-.32.34L131.67,91.16l-12.11-12.1a22,22,0,0,0-31.11,0L11.76,155.75a6,6,0,0,0,0,8.49l80,80a6,6,0,0,0,8.49,0l76.69-76.69a22,22,0,0,0,0-31.11l-12.1-12.11,64-54.81.34-.32A30.05,30.05,0,0,0,229.23,26.77ZM96,231.51,76.49,212l23.76-23.76a6,6,0,0,0-8.49-8.49L68,203.51,52.49,188l23.76-23.76a6,6,0,0,0-8.49-8.49L44,179.51,24.49,160,72,112.48,143.52,184ZM220.89,60.56l-68.78,58.87a6,6,0,0,0-2.1,4.33,6,6,0,0,0,1.76,4.47l16.68,16.69a10,10,0,0,1,0,14.15L152,175.51,80.49,104,96.93,87.55a10,10,0,0,1,14.15,0l16.69,16.68a6,6,0,0,0,8.8-.34l58.87-68.78a18,18,0,0,1,25.45,25.45Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
