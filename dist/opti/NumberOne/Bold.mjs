var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (e, a, t) => a in e ? s(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, c = (e, a) => {
  for (var t in a || (a = {}))
    p.call(a, t) && m(e, t, a[t]);
  if (r)
    for (var t of r(a))
      d.call(a, t) && m(e, t, a[t]);
  return e;
};
var f = (e, a) => {
  var t = {};
  for (var o in e)
    p.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      a.indexOf(o) < 0 && d.call(e, o) && (t[o] = e[o]);
  return t;
};
import i, { forwardRef as n } from "react";
import B from "../../lib/OptiBase.mjs";
const A = n((o, t) => {
  var l = o, { children: e } = l, a = f(l, ["children"]);
  return /* @__PURE__ */ i.createElement(B, c({ ref: t }, a), e, /* @__PURE__ */ i.createElement("path", { d: "M148,48V208a12,12,0,0,1-24,0V69.19l-21.83,13.1A12,12,0,0,1,89.83,61.71l40-24A12,12,0,0,1,148,48Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
