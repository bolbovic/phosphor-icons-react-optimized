var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (e, a, t) => a in e ? c(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, p = (e, a) => {
  for (var t in a || (a = {}))
    Z.call(a, t) && o(e, t, a[t]);
  if (m)
    for (var t of m(a))
      i.call(a, t) && o(e, t, a[t]);
  return e;
};
var L = (e, a) => {
  var t = {};
  for (var l in e)
    Z.call(e, l) && a.indexOf(l) < 0 && (t[l] = e[l]);
  if (e != null && m)
    for (var l of m(e))
      a.indexOf(l) < 0 && i.call(e, l) && (t[l] = e[l]);
  return t;
};
import h, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const H = f((l, t) => {
  var r = l, { children: e } = r, a = L(r, ["children"]);
  return /* @__PURE__ */ h.createElement(s, p({ ref: t }, a), e, /* @__PURE__ */ h.createElement("path", { d: "M244.52,100.05l-56-64A6,6,0,0,0,184,34H72a6,6,0,0,0-4.52,2l-56,64a6,6,0,0,0,.13,8l112,120a6,6,0,0,0,8.78,0l112-120A6,6,0,0,0,244.52,100.05ZM75.94,110l34.6,86.49L29.81,110Zm91.2,0L128,207.84,88.86,110ZM92,98l36-48,36,48Zm88.06,12h46.13l-80.73,86.49Zm46.72-12H179L140,46h41.28ZM74.72,46H116L77,98H29.22Z" }));
});
H.displayName = "Light";
export {
  H as Light
};
