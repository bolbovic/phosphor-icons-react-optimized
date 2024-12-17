var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var c = (e, a, t) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, i = (e, a) => {
  for (var t in a || (a = {}))
    l.call(a, t) && c(e, t, a[t]);
  if (r)
    for (var t of r(a))
      n.call(a, t) && c(e, t, a[t]);
  return e;
};
var d = (e, a) => {
  var t = {};
  for (var o in e)
    l.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      a.indexOf(o) < 0 && n.call(e, o) && (t[o] = e[o]);
  return t;
};
import m, { forwardRef as s } from "react";
import E from "../../lib/OptiBase.mjs";
const M = s((o, t) => {
  var p = o, { children: e } = p, a = d(p, ["children"]);
  return /* @__PURE__ */ m.createElement(E, i({ ref: t }, a), e, /* @__PURE__ */ m.createElement("path", { d: "M160,48V208L80,128Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M163.06,40.61a8,8,0,0,0-8.72,1.73l-80,80a8,8,0,0,0,0,11.32l80,80A8,8,0,0,0,168,208V48A8,8,0,0,0,163.06,40.61ZM152,188.69,91.31,128,152,67.31Z" }));
});
M.displayName = "Duotone";
export {
  M as Duotone
};
