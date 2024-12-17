var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && l(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && d.call(a, m) && (e[m] = a[m]);
  return e;
};
import i, { forwardRef as A } from "react";
import h from "../../lib/OptiBase.mjs";
const n = A((m, e) => {
  var r = m, { children: a } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(h, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm66-73.34-24,36a12,12,0,0,1-20,0l-22-33-22,33a12,12,0,0,1-20,0l-24-36A12,12,0,0,1,72,120h41.58L94,90.66A12,12,0,0,1,104,72h48a12,12,0,0,1,10,18.66L142.42,120H184a12,12,0,0,1,10,18.66Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
