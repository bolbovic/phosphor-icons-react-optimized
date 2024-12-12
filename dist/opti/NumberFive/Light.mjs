var L = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (e, a, t) => a in e ? L(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, f = (e, a) => {
  for (var t in a || (a = {}))
    p.call(a, t) && i(e, t, a[t]);
  if (m)
    for (var t of m(a))
      c.call(a, t) && i(e, t, a[t]);
  return e;
};
var h = (e, a) => {
  var t = {};
  for (var r in e)
    p.call(e, r) && a.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      a.indexOf(r) < 0 && c.call(e, r) && (t[r] = e[r]);
  return t;
};
import s, { forwardRef as d } from "react";
import l from "../../lib/OptiBase.mjs";
const n = d((r, t) => {
  var o = r, { children: e } = o, a = h(o, ["children"]);
  return /* @__PURE__ */ s.createElement(l, f({ ref: t }, a), e, /* @__PURE__ */ s.createElement("path", { d: "M174,160a54,54,0,0,1-90,40.25,6,6,0,1,1,8-8.94A42,42,0,1,0,92.8,128,6,6,0,0,1,83,122.25L98.12,46.82A6,6,0,0,1,104,42h64a6,6,0,0,1,0,12H108.92L97.54,110.89A54,54,0,0,1,174,160Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
