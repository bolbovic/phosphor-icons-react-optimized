var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (e, a, t) => a in e ? s(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, c = (e, a) => {
  for (var t in a || (a = {}))
    d.call(a, t) && p(e, t, a[t]);
  if (r)
    for (var t of r(a))
      l.call(a, t) && p(e, t, a[t]);
  return e;
};
var f = (e, a) => {
  var t = {};
  for (var o in e)
    d.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      a.indexOf(o) < 0 && l.call(e, o) && (t[o] = e[o]);
  return t;
};
import i, { forwardRef as A } from "react";
import n from "../../lib/OptiBase.mjs";
const B = A((o, t) => {
  var m = o, { children: e } = m, a = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(n, c({ ref: t }, a), e, /* @__PURE__ */ i.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm84,108a83.6,83.6,0,0,1-16.75,50.28L77.72,60.75A84,84,0,0,1,212,128ZM44,128A83.6,83.6,0,0,1,60.75,77.72L178.28,195.25A84,84,0,0,1,44,128Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
