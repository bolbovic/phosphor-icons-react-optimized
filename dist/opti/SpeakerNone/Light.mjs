var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (e, a, t) => a in e ? A(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, c = (e, a) => {
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
import s, { forwardRef as H } from "react";
import L from "../../lib/OptiBase.mjs";
const d = H((r, t) => {
  var o = r, { children: e } = o, a = f(o, ["children"]);
  return /* @__PURE__ */ s.createElement(L, c({ ref: t }, a), e, /* @__PURE__ */ s.createElement("path", { d: "M154.64,26.61a6,6,0,0,0-6.32.65L77.94,82H32A14,14,0,0,0,18,96v64a14,14,0,0,0,14,14H77.94l70.38,54.74A6,6,0,0,0,158,224V32A6,6,0,0,0,154.64,26.61ZM30,160V96a2,2,0,0,1,2-2H74v68H32A2,2,0,0,1,30,160Zm116,51.73L86,165.06V90.94l60-46.67Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
