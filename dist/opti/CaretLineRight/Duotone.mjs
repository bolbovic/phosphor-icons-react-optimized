var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var c = (e, a, t) => a in e ? d(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, l = (e, a) => {
  for (var t in a || (a = {}))
    n.call(a, t) && c(e, t, a[t]);
  if (r)
    for (var t of r(a))
      i.call(a, t) && c(e, t, a[t]);
  return e;
};
var V = (e, a) => {
  var t = {};
  for (var o in e)
    n.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      a.indexOf(o) < 0 && i.call(e, o) && (t[o] = e[o]);
  return t;
};
import m, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const M = f((o, t) => {
  var p = o, { children: e } = p, a = V(p, ["children"]);
  return /* @__PURE__ */ m.createElement(s, l({ ref: t }, a), e, /* @__PURE__ */ m.createElement("path", { d: "M144,128,64,208V48Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M69.66,42.34A8,8,0,0,0,56,48V208a8,8,0,0,0,13.66,5.66l80-80a8,8,0,0,0,0-11.32ZM72,188.69V67.31L132.69,128ZM192,48V208a8,8,0,0,1-16,0V48a8,8,0,0,1,16,0Z" }));
});
M.displayName = "Duotone";
export {
  M as Duotone
};
