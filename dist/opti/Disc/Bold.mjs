var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var l = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, d = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && l(e, a, t[a]);
  if (o)
    for (var a of o(t))
      A.call(t, a) && l(e, a, t[a]);
  return e;
};
var c = (e, t) => {
  var a = {};
  for (var m in e)
    p.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && o)
    for (var m of o(e))
      t.indexOf(m) < 0 && A.call(e, m) && (a[m] = e[m]);
  return a;
};
import f, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = s((m, a) => {
  var r = m, { children: e } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, d({ ref: a }, t), e, /* @__PURE__ */ f.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm42.32,96a44,44,0,0,0-3.91-9.44l28.84-28.84A83.55,83.55,0,0,1,211.13,116ZM148,128a20,20,0,1,1-20-20A20,20,0,0,1,148,128Zm-20,84A84,84,0,1,1,178.28,60.75L149.43,89.59A44,44,0,1,0,170.32,140h40.81A84.12,84.12,0,0,1,128,212Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
