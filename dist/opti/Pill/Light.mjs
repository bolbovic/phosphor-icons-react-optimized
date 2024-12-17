var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (e, a, t) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, A = (e, a) => {
  for (var t in a || (a = {}))
    p.call(a, t) && i(e, t, a[t]);
  if (m)
    for (var t of m(a))
      l.call(a, t) && i(e, t, a[t]);
  return e;
};
var L = (e, a) => {
  var t = {};
  for (var r in e)
    p.call(e, r) && a.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      a.indexOf(r) < 0 && l.call(e, r) && (t[r] = e[r]);
  return t;
};
import c, { forwardRef as s } from "react";
import M from "../../lib/OptiBase.mjs";
const Z = s((r, t) => {
  var o = r, { children: e } = o, a = L(o, ["children"]);
  return /* @__PURE__ */ c.createElement(M, A({ ref: t }, a), e, /* @__PURE__ */ c.createElement("path", { d: "M215,41a51.28,51.28,0,0,0-72.5,0L41,142.5A51.26,51.26,0,0,0,113.49,215L215,113.5A51.31,51.31,0,0,0,215,41ZM105,206.5A39.26,39.26,0,0,1,49.48,151L96,104.49,151.52,160ZM206.52,105,160,151.51,104.48,96,151,49.5A39.26,39.26,0,0,1,206.52,105ZM188.26,83.76a6,6,0,0,1,0,8.48l-24,24a6,6,0,0,1-8.49-8.48l24-24A6,6,0,0,1,188.26,83.76Z" }));
});
Z.displayName = "Light";
export {
  Z as Light
};
