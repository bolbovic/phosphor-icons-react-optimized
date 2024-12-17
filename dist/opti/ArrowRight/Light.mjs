var L = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (e, a, t) => a in e ? L(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, c = (e, a) => {
  for (var t in a || (a = {}))
    p.call(a, t) && i(e, t, a[t]);
  if (m)
    for (var t of m(a))
      l.call(a, t) && i(e, t, a[t]);
  return e;
};
var f = (e, a) => {
  var t = {};
  for (var r in e)
    p.call(e, r) && a.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      a.indexOf(r) < 0 && l.call(e, r) && (t[r] = e[r]);
  return t;
};
import s, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const n = d((r, t) => {
  var o = r, { children: e } = o, a = f(o, ["children"]);
  return /* @__PURE__ */ s.createElement(h, c({ ref: t }, a), e, /* @__PURE__ */ s.createElement("path", { d: "M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
