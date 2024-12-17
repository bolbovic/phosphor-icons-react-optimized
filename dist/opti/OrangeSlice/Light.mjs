var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (e, a, t) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, p = (e, a) => {
  for (var t in a || (a = {}))
    A.call(a, t) && o(e, t, a[t]);
  if (r)
    for (var t of r(a))
      i.call(a, t) && o(e, t, a[t]);
  return e;
};
var Z = (e, a) => {
  var t = {};
  for (var m in e)
    A.call(e, m) && a.indexOf(m) < 0 && (t[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      a.indexOf(m) < 0 && i.call(e, m) && (t[m] = e[m]);
  return t;
};
import c, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const M = s((m, t) => {
  var h = m, { children: e } = h, a = Z(h, ["children"]);
  return /* @__PURE__ */ c.createElement(L, p({ ref: t }, a), e, /* @__PURE__ */ c.createElement("path", { d: "M248,82H8a6,6,0,0,0-6,6,126,126,0,0,0,252,0A6,6,0,0,0,248,82ZM74.46,150,122,102.48v67.28A81.66,81.66,0,0,1,74.46,150ZM66,141.54A81.66,81.66,0,0,1,46.24,94h67.28Zm68-39.06L181.54,150A81.66,81.66,0,0,1,134,169.76Zm56,39.06L142.48,94h67.28A81.66,81.66,0,0,1,190,141.54ZM128,202A114.14,114.14,0,0,1,14.16,94h20a94,94,0,0,0,187.6,0h20A114.14,114.14,0,0,1,128,202Z" }));
});
M.displayName = "Light";
export {
  M as Light
};
