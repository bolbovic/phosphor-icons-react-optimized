var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (e, a, t) => a in e ? c(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, p = (e, a) => {
  for (var t in a || (a = {}))
    A.call(a, t) && o(e, t, a[t]);
  if (r)
    for (var t of r(a))
      i.call(a, t) && o(e, t, a[t]);
  return e;
};
var H = (e, a) => {
  var t = {};
  for (var l in e)
    A.call(e, l) && a.indexOf(l) < 0 && (t[l] = e[l]);
  if (e != null && r)
    for (var l of r(e))
      a.indexOf(l) < 0 && i.call(e, l) && (t[l] = e[l]);
  return t;
};
import L, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((l, t) => {
  var m = l, { children: e } = m, a = H(m, ["children"]);
  return /* @__PURE__ */ L.createElement(h, p({ ref: t }, a), e, /* @__PURE__ */ L.createElement("path", { d: "M213.33,203.75l-28.45-89.41L212.43,84A6,6,0,0,0,203.55,76l-22.87,25.17L162.42,43.75A13.94,13.94,0,0,0,149.08,34H106.92a13.94,13.94,0,0,0-13.34,9.75l-50.91,160A14,14,0,0,0,56,222H200a14,14,0,0,0,13.34-18.25ZM187.45,162H141.56l34-37.39ZM105,47.39A2,2,0,0,1,106.92,46h42.16A2,2,0,0,1,151,47.39l20.36,64-46,50.61H68.55ZM201.6,209.18A1.94,1.94,0,0,1,200,210H56a2,2,0,0,1-1.9-2.61L64.73,174H191.27l10.62,33.39A1.94,1.94,0,0,1,201.6,209.18Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
