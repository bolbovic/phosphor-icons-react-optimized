var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var o = (e, r, a) => r in e ? s(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, c = (e, r) => {
  for (var a in r || (r = {}))
    p.call(r, a) && o(e, a, r[a]);
  if (m)
    for (var a of m(r))
      A.call(r, a) && o(e, a, r[a]);
  return e;
};
var f = (e, r) => {
  var a = {};
  for (var t in e)
    p.call(e, t) && r.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && m)
    for (var t of m(e))
      r.indexOf(t) < 0 && A.call(e, t) && (a[t] = e[t]);
  return a;
};
import i, { forwardRef as R } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = R((t, a) => {
  var l = t, { children: e } = l, r = f(l, ["children"]);
  return /* @__PURE__ */ i.createElement(Z, c({ ref: a }, r), e, /* @__PURE__ */ i.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM146,76.82A36,36,0,1,0,127.94,144q.94,0,1.89-.06l-16.7,28a8,8,0,0,0,2.77,11,8,8,0,0,0,11-2.77L159.18,126A36.05,36.05,0,0,0,146,76.82ZM145.33,118l0,0A20,20,0,1,1,138,90.68,20,20,0,0,1,145.31,118Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
