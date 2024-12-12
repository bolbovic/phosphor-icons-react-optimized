var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && l(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && l(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var m in a)
    A.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = s((m, e) => {
  var r = m, { children: a } = r, t = d(r, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, c({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M128,92a36,36,0,1,0,36,36A36,36,0,0,0,128,92Zm0,48a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm35.37-97,8.14-27.65A12,12,0,0,0,157.89.19,194,194,0,0,0,97.77,23.74C57.36,48.28,36,84.33,36,128a92.15,92.15,0,0,0,56.63,85l-8.14,27.65A12,12,0,0,0,96,256a11.58,11.58,0,0,0,2.11-.19,194,194,0,0,0,60.12-23.55C198.64,207.72,220,171.67,220,128A92.15,92.15,0,0,0,163.37,43Zm-17,168.35a168.74,168.74,0,0,1-32.74,15.28l5.28-18a12,12,0,0,0-8.42-15A68,68,0,0,1,60,128c0-35.12,16.7-63.18,49.65-83.39a168.84,168.84,0,0,1,32.74-15.29l-5.28,18a12,12,0,0,0,8.42,15A68,68,0,0,1,196,128C196,163.12,179.3,191.17,146.35,211.39Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
