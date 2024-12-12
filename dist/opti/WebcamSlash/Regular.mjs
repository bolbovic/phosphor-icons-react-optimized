var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, c = (a, r) => {
  for (var e in r || (r = {}))
    A.call(r, e) && o(a, e, r[e]);
  if (m)
    for (var e of m(r))
      p.call(r, e) && o(a, e, r[e]);
  return a;
};
var Z = (a, r) => {
  var e = {};
  for (var t in a)
    A.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const R = s((t, e) => {
  var l = t, { children: a } = l, r = Z(l, ["children"]);
  return /* @__PURE__ */ f.createElement(L, c({ ref: e }, r), a, /* @__PURE__ */ f.createElement("path", { d: "M213.92,210.62l-160-176A8,8,0,1,0,42.08,45.38L58.82,63.8A80,80,0,0,0,120,183.6V200H32a8,8,0,0,0,0,16H197.19l4.89,5.38a8,8,0,1,0,11.84-10.76ZM64,104a63.65,63.65,0,0,1,6.26-27.62L88.68,96.64A40,40,0,0,0,128,144c1.2,0,2.39-.06,3.58-.17L150,164.11A64,64,0,0,1,64,104Zm72,96V183.59a79.91,79.91,0,0,0,25.44-6.91L182.64,200ZM85.52,45.31a8,8,0,0,1,3-10.91,80,80,0,0,1,105,115.5,8,8,0,1,1-13.1-9.19,64,64,0,0,0-84-92.4A8,8,0,0,1,85.52,45.31Zm65.31,66.12A24,24,0,0,0,128,80a24.17,24.17,0,0,0-5.24.57A8,8,0,1,1,119.3,65,40,40,0,0,1,166,116.38a8,8,0,0,1-15.21-4.95Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
