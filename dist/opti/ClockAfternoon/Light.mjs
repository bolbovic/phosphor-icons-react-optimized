var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (e, a, t) => a in e ? s(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, c = (e, a) => {
  for (var t in a || (a = {}))
    p.call(a, t) && i(e, t, a[t]);
  if (r)
    for (var t of r(a))
      l.call(a, t) && i(e, t, a[t]);
  return e;
};
var f = (e, a) => {
  var t = {};
  for (var m in e)
    p.call(e, m) && a.indexOf(m) < 0 && (t[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      a.indexOf(m) < 0 && l.call(e, m) && (t[m] = e[m]);
  return t;
};
import h, { forwardRef as A } from "react";
import d from "../../lib/OptiBase.mjs";
const n = A((m, t) => {
  var o = m, { children: e } = o, a = f(o, ["children"]);
  return /* @__PURE__ */ h.createElement(d, c({ ref: t }, a), e, /* @__PURE__ */ h.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm62-90a6,6,0,0,1-6,6H142.49l29.75,29.76a6,6,0,1,1-8.48,8.48l-40-40A6,6,0,0,1,128,122h56A6,6,0,0,1,190,128Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
