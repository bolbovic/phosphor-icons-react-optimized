var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var i = (e, a, t) => a in e ? s(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, c = (e, a) => {
  for (var t in a || (a = {}))
    p.call(a, t) && i(e, t, a[t]);
  if (m)
    for (var t of m(a))
      A.call(a, t) && i(e, t, a[t]);
  return e;
};
var f = (e, a) => {
  var t = {};
  for (var r in e)
    p.call(e, r) && a.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      a.indexOf(r) < 0 && A.call(e, r) && (t[r] = e[r]);
  return t;
};
import l, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const h = Z((r, t) => {
  var o = r, { children: e } = o, a = f(o, ["children"]);
  return /* @__PURE__ */ l.createElement(d, c({ ref: t }, a), e, /* @__PURE__ */ l.createElement("path", { d: "M145,78.55A34,34,0,1,0,127.94,142a33.56,33.56,0,0,0,5.67-.49l-18.76,31.42a6,6,0,0,0,10.3,6.16L157.45,125A34,34,0,0,0,145,78.55ZM147.06,119v0A22,22,0,1,1,139,89,22,22,0,0,1,147.05,119ZM128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
