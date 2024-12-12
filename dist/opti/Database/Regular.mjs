var i = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var c = (e, a, s) => a in e ? i(e, a, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[a] = s, p = (e, a) => {
  for (var s in a || (a = {}))
    m.call(a, s) && c(e, s, a[s]);
  if (t)
    for (var s of t(a))
      o.call(a, s) && c(e, s, a[s]);
  return e;
};
var l = (e, a) => {
  var s = {};
  for (var r in e)
    m.call(e, r) && a.indexOf(r) < 0 && (s[r] = e[r]);
  if (e != null && t)
    for (var r of t(e))
      a.indexOf(r) < 0 && o.call(e, r) && (s[r] = e[r]);
  return s;
};
import f, { forwardRef as R } from "react";
import V from "../../lib/OptiBase.mjs";
const Z = R((r, s) => {
  var C = r, { children: e } = C, a = l(C, ["children"]);
  return /* @__PURE__ */ f.createElement(V, p({ ref: s }, a), e, /* @__PURE__ */ f.createElement("path", { d: "M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z" }));
});
Z.displayName = "Regular";
export {
  Z as Regular
};
