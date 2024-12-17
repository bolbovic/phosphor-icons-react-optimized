var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && A(a, e, t[e]);
  if (r)
    for (var e of r(t))
      H.call(t, e) && A(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && H.call(a, m) && (e[m] = a[m]);
  return e;
};
import p, { forwardRef as n } from "react";
import c from "../../lib/OptiBase.mjs";
const f = n((m, e) => {
  var h = m, { children: a } = h, t = l(h, ["children"]);
  return /* @__PURE__ */ p.createElement(c, i({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M140,116a8,8,0,1,1,8,8A8,8,0,0,1,140,116Zm79.93-33.35A76.07,76.07,0,0,1,144,156H112a16,16,0,0,0,0,32h56a4,4,0,0,1,0,8H116v24h36a4,4,0,0,1,0,8H96A76,76,0,0,1,96,76H212a16,16,0,0,0,0-32H128a20,20,0,0,1-20-20,4,4,0,0,1,8,0,12,12,0,0,0,12,12h84a24,24,0,0,1,7.93,46.65ZM50.47,202.46l37.78-27A24.75,24.75,0,0,1,88,172a23.85,23.85,0,0,1,2-9.6l-59.9-27.23a68,68,0,0,0,20.36,67.29Zm40.43-19L57,207.64A67.59,67.59,0,0,0,96,220h12V195.66A24.07,24.07,0,0,1,90.9,183.42ZM108,148.34V84H96a68.1,68.1,0,0,0-63.42,43.51l61.89,28.13A23.94,23.94,0,0,1,108,148.34ZM211.88,84H116v64h28A68.08,68.08,0,0,0,211.88,84Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
