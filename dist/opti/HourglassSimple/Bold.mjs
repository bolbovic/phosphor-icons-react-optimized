var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (e, a, t) => a in e ? s(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, c = (e, a) => {
  for (var t in a || (a = {}))
    p.call(a, t) && m(e, t, a[t]);
  if (o)
    for (var t of o(a))
      d.call(a, t) && m(e, t, a[t]);
  return e;
};
var f = (e, a) => {
  var t = {};
  for (var l in e)
    p.call(e, l) && a.indexOf(l) < 0 && (t[l] = e[l]);
  if (e != null && o)
    for (var l of o(e))
      a.indexOf(l) < 0 && d.call(e, l) && (t[l] = e[l]);
  return t;
};
import i, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const B = n((l, t) => {
  var r = l, { children: e } = r, a = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(A, c({ ref: t }, a), e, /* @__PURE__ */ i.createElement("path", { d: "M214,193.68,145.35,128,214,62.32l.18-.18A20,20,0,0,0,200,28H56A20,20,0,0,0,41.87,62.14l.18.18L110.65,128l-68.6,65.68-.18.18A20,20,0,0,0,56,228H200a20,20,0,0,0,14.14-34.14ZM190,52l-62,59.39L66,52ZM66,204l62-59.39L190,204Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
