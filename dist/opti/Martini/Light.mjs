var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (e, a, t) => a in e ? s(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, c = (e, a) => {
  for (var t in a || (a = {}))
    i.call(a, t) && h(e, t, a[t]);
  if (m)
    for (var t of m(a))
      p.call(a, t) && h(e, t, a[t]);
  return e;
};
var f = (e, a) => {
  var t = {};
  for (var r in e)
    i.call(e, r) && a.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      a.indexOf(r) < 0 && p.call(e, r) && (t[r] = e[r]);
  return t;
};
import l, { forwardRef as L } from "react";
import d from "../../lib/OptiBase.mjs";
const n = L((r, t) => {
  var o = r, { children: e } = o, a = f(o, ["children"]);
  return /* @__PURE__ */ l.createElement(d, c({ ref: t }, a), e, /* @__PURE__ */ l.createElement("path", { d: "M236.24,44.24A6,6,0,0,0,232,34H24a6,6,0,0,0-4.24,10.24L122,146.49V210H88a6,6,0,0,0,0,12h80a6,6,0,0,0,0-12H134V146.49ZM70.49,78h115L128,135.51Zm147-32-20,20h-139l-20-20Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
