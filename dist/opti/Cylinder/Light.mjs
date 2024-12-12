var V = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (e, a, t) => a in e ? V(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, p = (e, a) => {
  for (var t in a || (a = {}))
    s.call(a, t) && o(e, t, a[t]);
  if (r)
    for (var t of r(a))
      i.call(a, t) && o(e, t, a[t]);
  return e;
};
var f = (e, a) => {
  var t = {};
  for (var m in e)
    s.call(e, m) && a.indexOf(m) < 0 && (t[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      a.indexOf(m) < 0 && i.call(e, m) && (t[m] = e[m]);
  return t;
};
import C, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((m, t) => {
  var c = m, { children: e } = c, a = f(c, ["children"]);
  return /* @__PURE__ */ C.createElement(h, p({ ref: t }, a), e, /* @__PURE__ */ C.createElement("path", { d: "M128,18C88.75,18,58,36.45,58,60V196c0,23.55,30.75,42,70,42s70-18.45,70-42V60C198,36.45,167.25,18,128,18Zm0,12c31.44,0,58,13.74,58,30s-26.56,30-58,30S70,76.26,70,60,96.56,30,128,30Zm0,196c-31.44,0-58-13.74-58-30V83.81C82.48,94.87,103.59,102,128,102s45.52-7.13,58-18.19V196C186,212.26,159.44,226,128,226Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
