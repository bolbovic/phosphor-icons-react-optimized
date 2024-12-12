var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var l = (e, r, a) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, H = (e, r) => {
  for (var a in r || (r = {}))
    p.call(r, a) && l(e, a, r[a]);
  if (m)
    for (var a of m(r))
      A.call(r, a) && l(e, a, r[a]);
  return e;
};
var Z = (e, r) => {
  var a = {};
  for (var t in e)
    p.call(e, t) && r.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && m)
    for (var t of m(e))
      r.indexOf(t) < 0 && A.call(e, t) && (a[t] = e[t]);
  return a;
};
import c, { forwardRef as h } from "react";
import i from "../../lib/OptiBase.mjs";
const s = h((t, a) => {
  var o = t, { children: e } = o, r = Z(o, ["children"]);
  return /* @__PURE__ */ c.createElement(i, H({ ref: a }, r), e, /* @__PURE__ */ c.createElement("path", { d: "M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm-8,67.31,39.49-39.49A48.49,48.49,0,0,1,186.66,58l-46,46H136Zm55.78-7.78c.14,1.47.22,3,.22,4.47v24H163.31ZM161.41,35.28,136,60.69V32h8A47.73,47.73,0,0,1,161.41,35.28ZM112,32h8v72H64V80A48.05,48.05,0,0,1,112,32Zm32,192H112a48.05,48.05,0,0,1-48-48V120H192v56A48.05,48.05,0,0,1,144,224Z" }));
});
s.displayName = "Regular";
export {
  s as Regular
};
