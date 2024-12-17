var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var i = (e, a, t) => a in e ? s(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, c = (e, a) => {
  for (var t in a || (a = {}))
    p.call(a, t) && i(e, t, a[t]);
  if (r)
    for (var t of r(a))
      A.call(a, t) && i(e, t, a[t]);
  return e;
};
var f = (e, a) => {
  var t = {};
  for (var m in e)
    p.call(e, m) && a.indexOf(m) < 0 && (t[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      a.indexOf(m) < 0 && A.call(e, m) && (t[m] = e[m]);
  return t;
};
import l, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const h = Z((m, t) => {
  var o = m, { children: e } = o, a = f(o, ["children"]);
  return /* @__PURE__ */ l.createElement(d, c({ ref: t }, a), e, /* @__PURE__ */ l.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm37.52,96a37.79,37.79,0,0,0-6.76-16.27l37-36.95A89.61,89.61,0,0,1,217.8,122ZM154,128a26,26,0,1,1-26-26A26,26,0,0,1,154,128Zm-26,90A90,90,0,1,1,187.22,60.29L150.27,97.24A38,38,0,1,0,165.52,134H217.8A90.12,90.12,0,0,1,128,218Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
