var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var c = (e, a, t) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, C = (e, a) => {
  for (var t in a || (a = {}))
    l.call(a, t) && c(e, t, a[t]);
  if (r)
    for (var t of r(a))
      o.call(a, t) && c(e, t, a[t]);
  return e;
};
var i = (e, a) => {
  var t = {};
  for (var m in e)
    l.call(e, m) && a.indexOf(m) < 0 && (t[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      a.indexOf(m) < 0 && o.call(e, m) && (t[m] = e[m]);
  return t;
};
import p, { forwardRef as V } from "react";
import d from "../../lib/OptiBase.mjs";
const n = V((m, t) => {
  var s = m, { children: e } = s, a = i(s, ["children"]);
  return /* @__PURE__ */ p.createElement(d, C({ ref: t }, a), e, /* @__PURE__ */ p.createElement("path", { d: "M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64Zm-21.61,74.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z" }));
});
n.displayName = "Fill";
export {
  n as Fill
};
