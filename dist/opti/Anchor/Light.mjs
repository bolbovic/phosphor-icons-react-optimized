var C = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? C(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (c)
    for (var e of c(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && c)
    for (var r of c(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as d } from "react";
import l from "../../lib/OptiBase.mjs";
const n = d((r, e) => {
  var m = r, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(l, h({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M216,138a6,6,0,0,0-6,6c0,26.09-15,31.52-39.58,38.21C158,185.6,143.79,189.47,134,199.16V126h34a6,6,0,0,0,0-12H134V85.4a30,30,0,1,0-12,0V114H88a6,6,0,0,0,0,12h34v73.16c-9.79-9.69-24-13.56-36.42-16.95C61,175.52,46,170.09,46,144a6,6,0,0,0-12,0c0,36.58,26.85,43.91,48.42,49.79C107,200.48,122,205.91,122,232a6,6,0,0,0,12,0c0-26.09,15-31.52,39.58-38.21C195.15,187.91,222,180.58,222,144A6,6,0,0,0,216,138ZM110,56a18,18,0,1,1,18,18A18,18,0,0,1,110,56Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
