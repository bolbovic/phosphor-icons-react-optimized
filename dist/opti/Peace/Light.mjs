var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (e, a, t) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, A = (e, a) => {
  for (var t in a || (a = {}))
    l.call(a, t) && i(e, t, a[t]);
  if (m)
    for (var t of m(a))
      p.call(a, t) && i(e, t, a[t]);
  return e;
};
var Z = (e, a) => {
  var t = {};
  for (var r in e)
    l.call(e, r) && a.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      a.indexOf(r) < 0 && p.call(e, r) && (t[r] = e[r]);
  return t;
};
import c, { forwardRef as s } from "react";
import M from "../../lib/OptiBase.mjs";
const d = s((r, t) => {
  var o = r, { children: e } = o, a = Z(o, ["children"]);
  return /* @__PURE__ */ c.createElement(M, A({ ref: t }, a), e, /* @__PURE__ */ c.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm90,102a89.44,89.44,0,0,1-13,46.58l-71-49.7V38.2A90.12,90.12,0,0,1,218,128ZM122,38.2v86.68l-71,49.7A90,90,0,0,1,122,38.2ZM57.92,184.4,122,139.53V217.8A89.93,89.93,0,0,1,57.92,184.4ZM134,217.8V139.53l64.08,44.87A89.93,89.93,0,0,1,134,217.8Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
