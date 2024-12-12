var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (e, a, t) => a in e ? d(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, f = (e, a) => {
  for (var t in a || (a = {}))
    p.call(a, t) && i(e, t, a[t]);
  if (r)
    for (var t of r(a))
      c.call(a, t) && i(e, t, a[t]);
  return e;
};
var h = (e, a) => {
  var t = {};
  for (var m in e)
    p.call(e, m) && a.indexOf(m) < 0 && (t[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      a.indexOf(m) < 0 && c.call(e, m) && (t[m] = e[m]);
  return t;
};
import s, { forwardRef as l } from "react";
import n from "../../lib/OptiBase.mjs";
const A = l((m, t) => {
  var o = m, { children: e } = o, a = h(o, ["children"]);
  return /* @__PURE__ */ s.createElement(n, f({ ref: t }, a), e, /* @__PURE__ */ s.createElement("path", { d: "M174,128a6,6,0,0,1-6,6H88a6,6,0,0,1,0-12h80A6,6,0,0,1,174,128Zm56,0A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z" }));
});
A.displayName = "Light";
export {
  A as Light
};
