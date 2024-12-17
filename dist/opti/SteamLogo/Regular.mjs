var s = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? s(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, c = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && o(a, e, r[e]);
  if (l)
    for (var e of l(r))
      Z.call(r, e) && o(a, e, r[e]);
  return a;
};
var f = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      r.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as A } from "react";
import R from "../../lib/OptiBase.mjs";
const d = A((t, e) => {
  var m = t, { children: a } = m, r = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(R, c({ ref: e }, r), a, /* @__PURE__ */ i.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM117.39,185.92l62-50.55a36,36,0,1,0-51.14-50.23l-43,52.73L45.28,98A88,88,0,1,1,40,128a89.56,89.56,0,0,1,.8-11.88l34.57,34.57a28,28,0,0,0,42,35.23Zm4.19-67.37a36.18,36.18,0,0,0,23.87,23.87l-18.26,14.89a28.11,28.11,0,0,0-20.5-20.5ZM156,128a20,20,0,1,1,20-20A20,20,0,0,1,156,128Zm-56,24a12,12,0,1,1-12,12A12,12,0,0,1,100,152Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
