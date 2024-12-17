var c = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var L = (e, a, t) => a in e ? c(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, o = (e, a) => {
  for (var t in a || (a = {}))
    Z.call(a, t) && L(e, t, a[t]);
  if (l)
    for (var t of l(a))
      h.call(a, t) && L(e, t, a[t]);
  return e;
};
var i = (e, a) => {
  var t = {};
  for (var m in e)
    Z.call(e, m) && a.indexOf(m) < 0 && (t[m] = e[m]);
  if (e != null && l)
    for (var m of l(e))
      a.indexOf(m) < 0 && h.call(e, m) && (t[m] = e[m]);
  return t;
};
import p, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const M = f((m, t) => {
  var r = m, { children: e } = r, a = i(r, ["children"]);
  return /* @__PURE__ */ p.createElement(s, o({ ref: t }, a), e, /* @__PURE__ */ p.createElement("path", { d: "M234.85,90.72h0l-104-56a6,6,0,0,0-5.68,0l-104,56h0A6,6,0,0,0,18,96v64a6,6,0,0,0,3.15,5.28h0l104,56a6,6,0,0,0,5.68,0l104-56h0A6,6,0,0,0,238,160V96A6,6,0,0,0,234.85,90.72ZM226,150,185.23,128l40.77-22Zm-53.43-28.77L134,100.42V50l85.34,46Zm-44.57,24L96.08,128,128,110.81,159.92,128ZM122,50v50.38L83.43,121.18,36.66,96Zm-92,56,40.77,22L30,150Zm53.43,28.76L122,155.58V206L36.66,160ZM134,206V155.58l38.57-20.77L219.34,160Z" }));
});
M.displayName = "Light";
export {
  M as Light
};
