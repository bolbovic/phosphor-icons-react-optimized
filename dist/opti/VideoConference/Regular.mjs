var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import H, { forwardRef as f } from "react";
import M from "../../lib/OptiBase.mjs";
const V = f((r, e) => {
  var Z = r, { children: a } = Z, t = A(Z, ["children"]);
  return /* @__PURE__ */ H.createElement(M, s({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,80H168V56h48ZM40,56H152V200H40ZM216,200H168V136h48v64ZM180,88a12,12,0,1,1,12,12A12,12,0,0,1,180,88Zm24,80a12,12,0,1,1-12-12A12,12,0,0,1,204,168Zm-68.25-2a39.76,39.76,0,0,0-17.19-23.34,32,32,0,1,0-45.12,0A39.84,39.84,0,0,0,56.25,166a8,8,0,0,0,15.5,4c2.64-10.25,13.06-18,24.25-18s21.62,7.73,24.25,18a8,8,0,1,0,15.5-4ZM80,120a16,16,0,1,1,16,16A16,16,0,0,1,80,120Z" }));
});
V.displayName = "Regular";
export {
  V as Regular,
  V as default
};
