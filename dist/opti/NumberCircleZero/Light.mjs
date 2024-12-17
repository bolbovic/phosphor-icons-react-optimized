var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var c = (e, a, t) => a in e ? d(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, p = (e, a) => {
  for (var t in a || (a = {}))
    o.call(a, t) && c(e, t, a[t]);
  if (r)
    for (var t of r(a))
      i.call(a, t) && c(e, t, a[t]);
  return e;
};
var f = (e, a) => {
  var t = {};
  for (var m in e)
    o.call(e, m) && a.indexOf(m) < 0 && (t[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      a.indexOf(m) < 0 && i.call(e, m) && (t[m] = e[m]);
  return t;
};
import Z, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const n = h((m, t) => {
  var s = m, { children: e } = s, a = f(s, ["children"]);
  return /* @__PURE__ */ Z.createElement(l, p({ ref: t }, a), e, /* @__PURE__ */ Z.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm0-144c-13.52,0-24.69,6.12-32.29,17.71C89.45,101.24,86,114.13,86,128s3.45,26.76,9.7,36.29C103.31,175.88,114.47,182,128,182s24.69-6.12,32.29-17.71c6.26-9.53,9.71-22.42,9.71-36.29s-3.45-26.76-9.7-36.29C152.69,80.12,141.52,74,128,74Zm0,96c-20.72,0-30-21.09-30-42s9.28-42,30-42,30,21.09,30,42S148.72,170,128,170Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
