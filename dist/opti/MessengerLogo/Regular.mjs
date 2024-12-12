var s = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? s(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, c = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && o(a, e, r[e]);
  if (l)
    for (var e of l(r))
      A.call(r, e) && o(a, e, r[e]);
  return a;
};
var f = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      r.indexOf(t) < 0 && A.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as L } from "react";
import R from "../../lib/OptiBase.mjs";
const d = L((t, e) => {
  var m = t, { children: a } = m, r = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(R, c({ ref: e }, r), a, /* @__PURE__ */ i.createElement("path", { d: "M181.66,106.34a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0L112,123.31,85.66,149.66a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0L144,132.69l26.34-26.35A8,8,0,0,1,181.66,106.34ZM232,128A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.52a8,8,0,0,1,6.54.67A88,88,0,0,0,216,128Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
