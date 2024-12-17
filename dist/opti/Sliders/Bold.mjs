var c = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && r(a, e, t[e]);
  if (V)
    for (var e of V(t))
      Z.call(t, e) && r(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && V)
    for (var m of V(a))
      t.indexOf(m) < 0 && Z.call(a, m) && (e[m] = a[m]);
  return e;
};
import A, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((m, e) => {
  var o = m, { children: a } = o, t = l(o, ["children"]);
  return /* @__PURE__ */ A.createElement(i, d({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M68,102.06V40a12,12,0,0,0-24,0v62.06a36,36,0,0,0,0,67.88V216a12,12,0,0,0,24,0V169.94a36,36,0,0,0,0-67.88ZM56,148a12,12,0,1,1,12-12A12,12,0,0,1,56,148ZM164,88a36.07,36.07,0,0,0-24-33.94V40a12,12,0,0,0-24,0V54.06a36,36,0,0,0,0,67.88V216a12,12,0,0,0,24,0V121.94A36.07,36.07,0,0,0,164,88Zm-36,12a12,12,0,1,1,12-12A12,12,0,0,1,128,100Zm108,68a36.07,36.07,0,0,0-24-33.94V40a12,12,0,0,0-24,0v94.06a36,36,0,0,0,0,67.88V216a12,12,0,0,0,24,0V201.94A36.07,36.07,0,0,0,236,168Zm-36,12a12,12,0,1,1,12-12A12,12,0,0,1,200,180Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
