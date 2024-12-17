var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && H(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    h.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as f } from "react";
import l from "../../lib/OptiBase.mjs";
const s = f((m, e) => {
  var o = m, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(l, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M118,64a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h16A6,6,0,0,1,118,64Zm52.14,132,3.72,26A14,14,0,0,1,160,238H96a14,14,0,0,1-13.86-16l3.72-26A94.1,94.1,0,0,1,34,112a6,6,0,0,1,6-6H58V40A14,14,0,0,1,72,26H184a14,14,0,0,1,14,14v66h18a6,6,0,0,1,6,6A94.1,94.1,0,0,1,170.14,196ZM70,106H186V40a2,2,0,0,0-2-2H72a2,2,0,0,0-2,2Zm88.71,94.84a94,94,0,0,1-61.42,0L94,223.72a2,2,0,0,0,.47,1.59A2,2,0,0,0,96,226h64a2,2,0,0,0,1.51-.69,2,2,0,0,0,.47-1.59ZM209.78,118H46.22a82,82,0,0,0,163.56,0Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
