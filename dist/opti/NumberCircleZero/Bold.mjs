var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var c = (e, a, t) => a in e ? i(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, d = (e, a) => {
  for (var t in a || (a = {}))
    p.call(a, t) && c(e, t, a[t]);
  if (o)
    for (var t of o(a))
      s.call(a, t) && c(e, t, a[t]);
  return e;
};
var l = (e, a) => {
  var t = {};
  for (var m in e)
    p.call(e, m) && a.indexOf(m) < 0 && (t[m] = e[m]);
  if (e != null && o)
    for (var m of o(e))
      a.indexOf(m) < 0 && s.call(e, m) && (t[m] = e[m]);
  return t;
};
import f, { forwardRef as Z } from "react";
import n from "../../lib/OptiBase.mjs";
const B = Z((m, t) => {
  var r = m, { children: e } = r, a = l(r, ["children"]);
  return /* @__PURE__ */ f.createElement(n, d({ ref: t }, a), e, /* @__PURE__ */ f.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm0-144c-28.26,0-48,24.67-48,60s19.74,60,48,60,48-24.67,48-60S156.26,68,128,68Zm0,96c-23.33,0-24-32.32-24-36s.67-36,24-36,24,32.32,24,36S151.33,164,128,164Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
